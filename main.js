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
        a = '<pre class="brush: java highlight:['+linenum+']">\n' + b + "\n</pre>";
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


//var st=makeST(Object);
var st;
var subObjs=[];

var linenum="";
function new_test(){
    var hashObjs1=splitFile(1);
    var hashObjs2=splitFile(2);
    var dammyObj=makeHashObj(-1,-1);
    var init=[];
    init.push(hashObjs1[0]);
    for(i=0;i<hashObjs1.length;i++){
        if(i==0)
            st=makeST(init);
        else{
            append(st,hashObjs1[i])
        }
    }
    append(st,dammyObj);
    for(i=0;i<hashObjs2.length;i++)
        append(st,hashObjs2[i]);
    tellme(st.root,hashObjs1.length);
    substrgen(st);
    for(var i=0;i<subObjs.length;i++){
    console.log(subObjs[i]+", ");
}
for(i=0;i<subObjs[0].length;i++){
linenum+=(subObjs[0][i].line+",");
}
}


