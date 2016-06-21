//頂点にマークをつける．passedをtrueにする
//length:string1の文字数
function pass(st,node,cnt){
var flag=false;//子供に一個でも2がいるか
for(var key in node._children){
	if(node._children[key].end!=Infinity){
		if(node._children[key].dst.stat==2){
			flag=true;
			var new_count=cnt+(node._children[key].end-node._children[key].begin+1);
			if(pass(st,node._children[key].dst,new_count))
				console.log(st.string.substring(node._children[key].end-new_count+1,node._children[key].end+1));
		}
	}
}
if(flag){
	return false;
}
return true;
}

function substrgen(st){
	for(var key in st.root._children){
			var new_count=st.root._children[key].end-st.root._children[key].begin+1;
			if(st.root._children[key].dst.stat==2 && pass(st,st.root._children[key].dst,new_count))
				console.log(st.string.substring(st.root._children[key].end-new_count+1,st.root._children[key].end+1));
	}
}

function tellme(node,length){
var child_stat,
	zerof=false,
	onef=false;
	for(var key in node._children){
		if(node._children[key].end==Infinity){
			if(node._children[key].begin<=length)
				onef=true;
			else
				zerof=true;
		}
		else{
			child_stat=tellme(node._children[key].dst,length);
			if(child_stat==2){
				node.stat=2;
					//console.log(node._children,node.stat);
				//return 2;
			}
			else if(child_stat==0)
				zerof=true;
			else
				onef=true;
		}
	}
	if(node.stat==null && zerof && onef)
		node.stat=2;
	else if(node.stat==null && zerof)
		node.stat=0;
	else if(node.stat==null && onef)
		node.stat=1;
	return node.stat
}