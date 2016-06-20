var NR_TREE=0;

function alloc_treeid(){
	NR_TREE++;
	return NR_TREE
}

function makeST(string){
	var st={
		string:string,
		root:makeNode(0,0,null),
		nr_node:1,
		tree_id:alloc_treeid()
	};
	st['active']=makeSuffix(st.root,0,-1);
	for(var i=0;i<st.string.length;i++){
		add(st,i);
	}
	return st
}

function append(st,string){
	var old_len=st.string.length;
	st.string+=string;
	for(var i=old_len;i<st.string.length;i++)
		add(st,i)
}

function add(st,current){
	var last_parent=null,
		last_char=st.string.charAt(current),
		active=st.active,
		parent,
		edge,
		new_node,
		new_edge;
	while(true){
		parent=active.src;
		if(is_explicit(active)){
			if(last_char in active.src._children)
				break;
		}
		else{
			edge=active.src._children[st.string.charAt(active.begin)];
			if(st.string.charAt(edge.begin+len(active))==last_char)
				break;
			parent=split(edge,active,st,current);
		}
		new_node=makeNode(alloc_node(st),current);
		new_edge=makeEdge(current,Infinity,parent,new_node);
		insert_edge(st,new_edge);
		if(last_parent!=null && last_parent.node_id!=0)
			last_parent.suffix_link=parent;
		last_parent=parent;
		if(active.src.node_id==0)
			active.begin++;
		else
			active.src=active.src.suffix_link;
		canonize(active,st);
	}
	if(last_parent!=null && last_parent.node_id!=0)
		last_parent.suffix_link=parent;
	active.end++;
	canonize(active,st);
	st.root.gen=current
}

function insert_edge(st,edge){
					console.log("hahaha");
	edge.src._children[st.string.charAt(edge.begin)]=edge
}

function alloc_node(st){
	st.nr_node++;
	return st.nr_node-1;
}