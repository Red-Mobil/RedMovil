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
		//			$pass = md5($_POST["pas"]);
					pg_exec("INSERT INTO usuarios(email,pass) VALUES('".$_POST["email"]."','".$_POST["ipas"]."')");												
					pg_free_result($consulta);									
				}
				else
				{								
					echo "El email ingresado ya esta en uso, use otra direccion de correo, gracias.";
					pg_free_result($consulta);
				}								
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
									$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$_POST["lemail"]."' AND pass= '".$_POST["lpas"]."' ");
									$filas=pg_numrows($consulta);
									if($filas == 1 )
									{
										$fila = pg_fetch_assoc($consulta);								
										$_SESSION['email'] = $fila['email'];
										pg_free_result($consulta);
										header ("Location: registrar.php");																
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
		$consulta=pg_exec("SELECT * FROM usuarios WHERE email = '".$_SESSION["email"]."' AND pass= '".$_POST["pas1"]."' ");
		$filas=pg_numrows($consulta);
		if($filas == 1 )
		{		
			if ($_POST["pas2"] == $_POST["pas3"] && $_POST["pas2"] != '')
			{
				pg_exec("UPDATE usuarios SET pass = '".$_POST["pas2"]."' WHERE email = '".$_SESSION["email"]."'");
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
	</table>
</center>
