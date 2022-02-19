$(document).ready(function () {
    /*Store each show choice in a variable. Alphabet followed by double letters.*/

    var a = document.getElementById("clint");
    var b = document.getElementById("bluemtn");
    var c = document.getElementById("bridge");
    var d = document.getElementById("cops");
    var e = document.getElementById("dracula");
    var f = document.getElementById("friends");
    var g = document.getElementById("how");
    var h = document.getElementById("philly");
    var i = document.getElementById("married");
    var j = document.getElementById("naked");
    var k = document.getElementById("pawn");
    var l = document.getElementById("70s");
    var m = document.getElementById("2halfmen");
    var n = document.getElementById("mma");
    var o = document.getElementById("wipeout");


    /*Set each link on shows.html to create a cookie with the name of the XML file tvshow.html should pull for the corresponding TV Show. 
    The cookie lasts 12 seconds, but should be deleted upon loading tvshow.html*/
    a.onclick = function () { document.cookie = "filename=clint; max-age='+.2*60+';"; }
    b.onclick = function () { document.cookie = "filename=bluemtn; max-age='+.2*60+';"; }
    c.onclick = function () { document.cookie = "filename=bridge; max-age='+.2*60+';"; }
    d.onclick = function () { document.cookie = "filename=cops; max-age='+.2*60+';"; }
    e.onclick = function () { document.cookie = "filename=dracula; max-age='+.2*60+';"; }
    f.onclick = function () { document.cookie = "filename=friends; max-age='+.2*60+';"; }
    g.onclick = function () { document.cookie = "filename=how; max-age='+.2*60+';"; }
    h.onclick = function () { document.cookie = "filename=philly; max-age='+.2*60+';"; }
    i.onclick = function () { document.cookie = "filename=married; max-age='+.2*60+';"; }
    j.onclick = function () { document.cookie = "filename=naked; max-age='+.2*60+';"; }
    k.onclick = function () { document.cookie = "filename=pawn; max-age='+.2*60+';"; }
    l.onclick = function () { document.cookie = "filename=70s; max-age='+.2*60+';"; }
    m.onclick = function () { document.cookie = "filename=2halfmen; max-age='+.2*60+';"; }
    n.onclick = function () { document.cookie = "filename=mma; max-age='+.2*60+';"; }
    o.onclick = function () { document.cookie = "filename=wipeout; max-age='+.2*60+';"; }
})

