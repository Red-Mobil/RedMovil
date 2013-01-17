$(document).ready(function(){
  $("#add").click(function(){
	if (max > 0)
	{	t = "t".concat(id);
		b =  "b".concat(id);
		tt = "tt".concat(id);
		bb = "bb".concat(id);
		$("#editor").append("<textarea id="+t+"></textarea><br><textarea id="+b+"></textarea><br><br><br><br>");
		$("#vista").append("<p id="+tt+"></p><br><p id="+bb+"></p><br><br><br><br>");
		asd = new nicEditor({fullPanel : true}).panelInstance(b);
		id++;
		max -= 1;
	}
  });
 }); 