<?php
if (isset($_GET['si']))
	echo 'Existe una pagina con dicho nombre';
else if (isset($_GET['no']))
	echo 'No existe una pagina con dicho nombre';
?>
