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

function inscripcion()
{	
	?> <form id="registrar" action="registrar.php?ins" method="post" style="margin:0px;">								
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
}

function login()
{	
	if(!isset($_SESSION["email"])) 
	{
	?>
		<form id="login" action="registrar.php?log=login" method="post" style="margin:0px;">		
		Email <input type="text" name="lemail" size="6"/></br>
		Password <input type="password" name="lpas" size="6"/></br>
		<input type="submit" value="Login" /> <a href="#">Link Para Registrar</a>
		</form>
	<?php
	}
	else
		echo "Bienvenido, <b>".$_SESSION["email"]."<a href=\"registrar.php?log=out\">Cerrar sesi&oacute;n</a>";
	
	if (isset($_GET['log']))
	{
		switch($_GET['log'])
		{
			case "login":	if ($_POST["lpas"] == '' || $_POST["lemail"] == '')
							{
								echo 'Debe llenar los campos';
							}
							else
							{								
								if (verificaremail($_POST["lemail"]))
								{
									$pass = md5($_POST["lpas"]);									
									$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$_POST["lemail"]."' AND pass= '".$pass."' ");
									$filas=pg_numrows($consulta);
									if($filas == 1 )
									{
										$fila = pg_fetch_assoc($consulta);																		
										if ($fila['id_tipo_usuario'] == '1')
										{
											echo 'Debe validar su direccion de correo electronico antes de continuar, Gracias.';
										}
										else
										{
											$_SESSION['email'] = $fila['email'];
											pg_free_result($consulta);
											header ("Location: registrar.php");																										
										}										
									}
									else
									{								
										echo "usuario y password no coinciden";				
									}							
									pg_free_result($consulta);
								}
								else
								{
									echo "mail invalido";
								}							
							}
							break;														
						
			case "out":		unset($_SESSION['email']);
							header ("Location: registrar.php");																
							break;
						
			default:		break;
		}	
	}
}

function cambiarpass()
{	
	if(!isset($_SESSION["email"])) 
	{
	?>
		Debe logearse primero
	<?php
	}
	else
	{
		?> <form id="mod_pass" action="registrar.php?mod" method="post" style="margin:0px;">										
		Password Antiguo <input type="password" name="pas1" size="6"/><br/></br>
		
		Password <input type="password" name="pas2" size="6"/><br/>
		Password <input type="password" name="pas3" size="6"/><br/>
		<input type="submit" value="Modificar Clave" />
		</form>
		<?php
	}
	if (isset($_GET['mod']))
	{		
		$pass = md5($_POST["pas1"]);
		$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$_SESSION["email"]."' AND pass= '".$pass."' ");
		$filas=pg_numrows($consulta);
		if($filas == 1 )
		{		
			if ($_POST["pas2"] == $_POST["pas3"] && $_POST["pas2"] != '')
			{
				$pass = md5($_POST["pas2"]);
				pg_exec("UPDATE usuarios SET pass = '".$pass."' WHERE email = '".$_SESSION["email"]."'");
			}
			else if ($_POST["pas2"] == '')
			{
				echo "Debe llenar el campo Password";
			}
			else
			{
				echo "Las Claves no son iguales.";
			}
		}
		else
		{
			echo "La clave es incorrecta";
		}
	}
}

function confirmar()
{
	pg_free_result($consulta);
	if (isset($_GET['validar']))
	{						
		$consulta=pg_exec("SELECT * FROM usuarios WHERE confirmacion = '".$_GET["validar"]."'");
		$filas=pg_numrows($consulta);
		if($filas == 1 )
		{			
			pg_exec("UPDATE usuarios SET id_tipo_usuario = '2' WHERE confirmacion = '".$_GET["validar"]."'");
			echo 'Su Cuenta a sido correctamente activada';			
		}
		else
		{
			echo 'Error, no se puedo activar Su Cuenta';
		}		
		pg_free_result($consulta);				
	}
}


?>





<center>
	<table border="1">
	<tr><td>
	Inscripcion</br></br>
	<?php
	inscripcion();
	?>
	</td></tr>
	<tr><td>
	Login</br></br>
	<?php
	login();
	?>
	</td></tr>
	<tr><td>
	Cambiar Password</br></br>
	<?php
	cambiarpass();
	?>
	</td></tr>		
	<tr><td>
	Confirmar</br></br>
	<?php
	confirmar();
	?>
	</td></tr>		
	</table>
</center>