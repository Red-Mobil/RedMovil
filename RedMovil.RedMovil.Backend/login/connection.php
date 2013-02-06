<?php
$connection_string="host=localhost port=5432 user=cred001 password=r7b07sJ1qP dbname=cred001_redmovil";
//$connection_string="host=localhost port=5432 user=redmovil password=z15as12xx dbname=redmovil";
$conn = pg_connect($connection_string) or die("Fall� la conexi�n.");
?>