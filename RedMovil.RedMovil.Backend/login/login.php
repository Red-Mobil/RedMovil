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

?>	
		<form id="login" action="login.php?log=login" method="post" style="margin:0px;">		
		Email <input type="text" name="lemail" size="6"/></br>
		Password <input type="password" name="lpas" size="6"/></br>
		<input type="submit" value="Login" /> <a href="inscribir.php">Link Para Registrar</a>
		</form>
	<?php

	
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
										if ($fila['id_tipo_usuario'] == '0')
										{
											echo 'Debe validar su direccion de correo electronico antes de continuar, Gracias.';
										}
										else
										{
											$_SESSION['email'] = $fila['email'];
											pg_free_result($consulta);
											?><script>											
											opener.location.href="http://www.eddiseno.com/post/red/RedMovil.RedMovil.UserInterface/Html/edu.html";
											window.close();
											</script><?php											
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
						
			default:		break;
		}	
	}
?>