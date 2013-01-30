<?php
$q=$_GET["q"];
$aux = explode("/",$q);
$myfile = "../RedMovil.RedMovil.UserInterface/PlanillasCustom/".$aux[0];
$myfiletmp = "../RedMovil.RedMovil.UserInterface/PlanillasCustom/".$aux[0]."tmp";
$reading = fopen($myfile, 'r');
$writing = fopen($myfiletmp, 'w');
$replaced = false;

while (!feof($reading)) {
  $line = fgets($reading);
  if (stristr($line,$aux[1])) {
    $line = $aux[1]." = ".aux[2].";\n";
    $replaced = true;
  }
  fputs($writing, $line);
}
fclose($reading); fclose($writing);
if ($replaced) 
{
  rename('myfile.tmp', 'myfile');
} else {
  unlink('myfile.tmp');
}
?>

