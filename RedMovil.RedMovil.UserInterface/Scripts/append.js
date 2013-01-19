$(document).ready(function(){
  $("#add").click(function(){
	if (max > 0)
	{	t = "t".concat(id);
		b =  "b".concat(id);
		tt = "tt".concat(id);
		bb = "bb".concat(id);
		$("#editor").append("<textarea id="+t+" style='width:320px;'></textarea><br><textarea id="+b+" style='width:320px;'></textarea><br><br><br><br>");
		$("#editor").append("<p id="+tt+"></p><br><p id="+bb+"></p><br><br><br><br>");
		asd = new nicEditor({fullPanel : true}).panelInstance(b);
		id++;
		max -= 1;
	}
  });
 });