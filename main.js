function init() { changeCheckLoopFunc() }
var cache_source = "",
    cache_select = -1;

function changeCheckFunc() {
    var a = document.getElementById("source1").value;
        //b = document.getElementById("brushes").selectedIndex;
    //if (a != cache_source || b != cache_select) cache_source = a, cache_select = b, generatePreHTML() }
    if (a != cache_source) cache_source = a, generatePreHTML(1), generatePreHTML(2) }

function changeCheckLoopFunc() { changeCheckFunc();
    setTimeout("changeCheckLoopFunc()", 1E3) }

function generatePreHTML(num) {
    var //a = document.getElementById("brushes"),
        //a = a.options[a.selectedIndex].value,
        b = document.getElementById("source"+num).value,
        b = escapeHTML(b),
        a = '<pre class="brush: java">\n' + b + "\n</pre>";
        //document.getElementById("output_html").value = a;
	    document.getElementById("preview"+num).innerHTML = a;
    LoadMinimumSyntaxHighlighter.load() }

function allSelect(a) { a = document.getElementById(a);
    a.focus();
    a.select() }

function escapeHTML(a) {
    var b = document.createElement("div");
    b.appendChild(document.createTextNode(a));
    return b.innerHTML };


var st=makeST("");

function test(){
    st=makeST("");
var string1=document.getElementById("source3").value;
var string2=document.getElementById("source4").value;
var string=string1+"#"+string2;
for(var i=0;i<string.length;i++){
    append(st,string.charAt(i));
}
tellme(st.root,string1.length);
substrgen(st)
}


