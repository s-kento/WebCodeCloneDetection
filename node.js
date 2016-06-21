function makeNode(node_id,gen,suffix_link){
	var node={_children:{},
		node_id:node_id,
		gen:gen,
		suffix_link:suffix_link,
		passed:false,
		stat:null
	};
	return node
}

function is_leaf(node){
	return (node.suffix_link==null && node.node_id!=0)
}

