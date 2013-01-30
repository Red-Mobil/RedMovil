function ver() {
    if (max == 2) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        var z = nicEditors.findEditor("b0");
        var y = z.getContent();
		if (document.getElementById("h0").value == "vacio")
        {
			document.getElementById("bb0").innerHTML = y;
		}
		else
		{
			document.getElementById("bb0").innerHTML = "<img width='150px' src =\'../images/" + document.getElementById("h0").value + "\'></img>" + y;
		}
    }
    if (max == 1) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        document.getElementById("tt1").innerHTML = document.getElementById("t1").value;
		document.getElementById("title1").innerHTML = document.getElementById("t1").value;
        var z = nicEditors.findEditor("b0");
        var y = z.getContent();
        var p = nicEditors.findEditor("b1");
        var o = p.getContent();
		if (document.getElementById("h0").value == "vacio")
        {
			document.getElementById("bb0").innerHTML = y;
		}
		else
		{
			document.getElementById("bb0").innerHTML = "<img width='150px' src =\'../images/" + document.getElementById("h0").value + "\'></img>" + y;
		}
		if (document.getElementById("h1").value == "vacio")
        {
			document.getElementById("bb1").innerHTML = o;
		}
		else
		{
			document.getElementById("bb1").innerHTML = "<img width='150px' src =\'../images/" + document.getElementById("h1").value + "\'></img>" + y;
		}
    }
    if (max == 0) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        document.getElementById("tt1").innerHTML = document.getElementById("t1").value;
		document.getElementById("title1").innerHTML = document.getElementById("t1").value;
        document.getElementById("tt2").innerHTML = document.getElementById("t2").value;
		document.getElementById("title2").innerHTML = document.getElementById("t2").value;
        var z = nicEditors.findEditor("b0");
        var y = z.getContent();
        var p = nicEditors.findEditor("b1");
        var o = p.getContent();
        var i = nicEditors.findEditor("b2");
        var u = i.getContent();
		if (document.getElementById("h0").value == "vacio")
        {
			document.getElementById("bb0").innerHTML = y;
		}
		else
		{
			document.getElementById("bb0").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h0").value + "\'></img>" + y;
		}
		if (document.getElementById("h1").value == "vacio")
        {
			document.getElementById("bb1").innerHTML = y;
		}
		else
		{
			document.getElementById("bb1").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h1").value + "\'></img>" + y;
		}
		if (document.getElementById("h2").value == "vacio")
        {
			document.getElementById("bb2").innerHTML = y;
		}
		else
		{
			document.getElementById("bb2").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h2").value + "\'></img>" + y;
		}
    }
}