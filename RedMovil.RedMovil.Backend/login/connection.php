<?php
$connection_string="host=localhost port=5432 user=postgres password=123 dbname=postgres";
//$connection_string="host=localhost port=5432 user=redmovil password=z15as12xx dbname=redmovil";
$conn = pg_connect($connection_string) or die("Falló la conexión.");
?>
