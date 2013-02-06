<?php
include 'connection.php';
session_start();

function verificaremail($email)
{ 
  if (!ereg("^([a-zA-Z0-9._]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,4})$",$email))
  { 
      return FALSE; 
  } 
  else 
  { 
       return TRUE; 
  } 
} 

?> <form id="registrar" action="inscribir.php?ins" method="post" style="margin:0px;">								
		Email <input type="text" name="email" size="6"/><br/>		
		Password <input type="password" name="ipas" size="6"/><br/>
		<input type="submit" value="Registrar" />
		</form>
	<?php
	if (isset($_GET['ins']))
	{
		if ($_POST["ipas"] == '' || $_POST["email"] == '')
		{
			echo 'Debe llenar los campos';
		}
		else
		{
			if (verificaremail($_POST["email"]))
			{
				$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$_POST["email"]."'");
				$filas=pg_numrows($consulta);
				if($filas == 0 )
				{
					pg_free_result($consulta);
					$pass = md5($_POST["ipas"]);
					$confirmar = md5($_POST["email"]);
					pg_exec("INSERT INTO usuarios(email,pass,id_tipo_usuario,confirmacion) VALUES('".$_POST["email"]."','".$pass."','1','".$confirmar."')");
					pg_free_result($consulta);									
					$mensaje = "Bienvenido".PHP_EOL."Para la activacion de su cuenta pulse el siguiente link:".PHP_EOL."http://www.eddiseno.com/post/registrar.php?validar=".$confirmar.PHP_EOL."Gracias";
					mail($_POST["email"],"No responder",$mensaje);							
					?><script>											
					opener.location.href="http://www.eddiseno.com/post/red/RedMovil.RedMovil.UserInterface/Html/edu.html";
					window.close();
					</script><?php											
				}
				else
				{								
					echo "El email ingresado ya esta en uso, use otra direccion de correo, gracias.";					
				}								
				pg_free_result($consulta);
			}
			else
			{
					echo "mail invalido";				
			}
		}		
	}
?>

<a href="login.php">Log in</a>