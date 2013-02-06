
function ver() {
    if (max == 2) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
		if (document.getElementById("h0").value == "vacio")
        {
			document.getElementById("bb0").innerHTML = tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		else
		{
			document.getElementById("bb0").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h0").value + "\'></img>" + tinyMCE.activeEditor.getContent({format : 'raw'});
		}
    }
    if (max == 1) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        document.getElementById("tt1").innerHTML = document.getElementById("t1").value;
		document.getElementById("title1").innerHTML = document.getElementById("t1").value;
		if (document.getElementById("h0").value == "vacio")
        {
			document.getElementById("bb0").innerHTML = tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		else
		{
			document.getElementById("bb0").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h0").value + "\'></img>" + tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		if (document.getElementById("h1").value == "vacio")
        {
			document.getElementById("bb1").innerHTML = tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		else
		{
			document.getElementById("bb1").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h1").value + "\'></img>" + tinyMCE.activeEditor.getContent({format : 'raw'});
		}
    }
    if (max == 0) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        document.getElementById("tt1").innerHTML = document.getElementById("t1").value;
		document.getElementById("title1").innerHTML = document.getElementById("t1").value;
        document.getElementById("tt2").innerHTML = document.getElementById("t2").value;
		document.getElementById("title2").innerHTML = document.getElementById("t2").value;
		if (document.getElementById("h0").value == "vacio")
        {
			document.getElementById("bb0").innerHTML = tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		else
		{
			document.getElementById("bb0").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h0").value + "\'></img>" + tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		if (document.getElementById("h1").value == "vacio")
        {
			document.getElementById("bb1").innerHTML = tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		else
		{
			document.getElementById("bb1").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h1").value + "\'></img>" + tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		if (document.getElementById("h2").value == "vacio")
        {
			document.getElementById("bb2").innerHTML = tinyMCE.activeEditor.getContent({format : 'raw'});
		}
		else
		{
			document.getElementById("bb2").innerHTML = "<img width='100%' src =\'../images/" + document.getElementById("h2").value + "\'></img>" + tinyMCE.activeEditor.getContent({format : 'raw'});
		}
    }
}