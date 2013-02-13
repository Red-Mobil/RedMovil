<?php
require_once 'excel_reader2.php';


$ix = 0;
$row = 2;

$plantilla = "../RedMovil.RedMovil.UserInterface/Html/plantilla.html";
if (file_exists($plantilla))
{
	$fp = fopen($plantilla,"r");
	$auxplantilla = fread($fp,filesize($plantilla));
	$claves = "../RedMovil.RedMovil.UserInterface/landingpages/keywords.xls";
	if (file_exists($claves))
	{
		$kw = new Spreadsheet_Excel_Reader($claves,false,"UTF-8");
		while($row < $kw->rowcount($sheet_index=0)+1)
		{
			$buffer = $kw->val($row,2);
			$title = $kw->val($row,1);
			$newplantilla = str_replace("-keyword-",$buffer,$auxplantilla);
			$new2plantilla = str_replace("-title-",$title,$newplantilla);
			$new = fopen("../RedMovil.RedMovil.UserInterface/landingpages/landing_page_".$ix.".html","w");
			fwrite($new,$new2plantilla);
			fclose($new);
			$ix++;
			$row++;
		}
		fclose($kw);
		fclose($fp);
	}
	else
	{
		echo "No existen palabras claves";
		return;
	}	
}
else
{
	echo "Plantilla no existe";
	return;
}

?>