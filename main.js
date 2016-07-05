/** *******グローバル変数****************** */
var st;
var subObjs=[];
var linenum=["",""];// highlightする用の変数
var index=0;　// 「次へ」ボタンでのインデックスで使う
/** ************************************ */

function init() { changeCheckLoopFunc() }
var cache_source = "",
    cache_select = -1;

function changeCheckFunc() {
    var a = document.getElementById("source1").value;
    var b = document.getElementById("source2").value;
    if (a != cache_source || b != cache_source) cache_source = a,cache_source=b, generatePreHTML(1), generatePreHTML(2) }

function changeCheckLoopFunc() { changeCheckFunc();
    setTimeout("changeCheckLoopFunc()", 1E3) }

function generatePreHTML(num) {
    var b = document.getElementById("source"+num).value,
        b = escapeHTML(b),
        a = '<pre class="brush: java highlight:['+linenum[num-1]+']">\n' + b + "\n</pre>";
	    document.getElementById("preview"+num).innerHTML = a;
    LoadMinimumSyntaxHighlighter.load() }

function allSelect(a) { a = document.getElementById(a);
    a.focus();
    a.select() }

function escapeHTML(a) {
    var b = document.createElement("div");
    b.appendChild(document.createTextNode(a));
    return b.innerHTML };

function detect(){// 検出ボタンを押したときの処理
    linenum=["",""];
    subObjs=[];
    var hashObjs1=splitFile(1);// 左側のテキストボックス内の文字列を行ごとに分割，リスト化
    var hashObjs2=splitFile(2);
    var dammyObj=makeHashObj(-1,-1);// suffix treeに格納する#と同じ
    var init=[];
    init.push(hashObjs1[0]);
    for(i=0;i<hashObjs1.length;i++){// 一回目は初期化．その後順次ツリーに行を追加していく．
        if(i==0)
            st=makeST(init);
        else{
            append(st,hashObjs1[i])
        }
    }
    append(st,dammyObj);
    for(i=0;i<hashObjs2.length;i++)// 右側のテキストボックスも同じように追加
        append(st,hashObjs2[i]);
    tellme(st.root,hashObjs1.length);// 頂点にマークをつける
    substrgen(st);// マークをたどってsubObjsに格納
    subObjs=select();
    for(var i=0;i<subObjs.length;i++){
        var string="";
        for(var j=0;j<subObjs[i].length;j++){
            string+=subObjs[i][j].line+", "
        }
}
for(i=0;i<subObjs.length;i++){
	for(j=0;j<subObjs[i].length;j++)
		linenum[0]+=(subObjs[i][j].line+",");
	}
match();
}

function nextClone(){
	linenum=["",""];
	for(j=0;j<subObjs[index].length;j++){
		linenum[0]+=(subObjs[index][j].line+",");
	}
	index=(index+1)%subObjs.length;
}


