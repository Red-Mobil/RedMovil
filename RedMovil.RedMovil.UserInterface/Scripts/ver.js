function ver() {
    if (max == 2) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        var z = nicEditors.findEditor("b0");
        var y = z.getContent();
        document.getElementById("bb0").innerHTML = y;
    }
    if (max == 1) {
        document.getElementById("tt0").innerHTML = document.getElementById("t0").value;
		document.getElementById("title0").innerHTML = document.getElementById("t0").value;
        document.getElementById("tt1").innerHTML = document.getElementById("t1").value;
		document.getElementById("title1").innerHTML = document.getElementById("t1").value;
        var z = nicEditors.findEditor("b0");
        var y = z.getContent();
        document.getElementById("bb0").innerHTML = y;
        var p = nicEditors.findEditor("b1");
        var o = p.getContent();
        document.getElementById("bb1").innerHTML = o;
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
        document.getElementById("bb0").innerHTML = y;
        var p = nicEditors.findEditor("b1");
        var o = p.getContent();
        document.getElementById("bb1").innerHTML = o;
        var i = nicEditors.findEditor("b2");
        var u = i.getContent();
        document.getElementById("bb2").innerHTML = u;
    }
}