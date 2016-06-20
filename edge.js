function makeEdge(begin,end,src,dst){
	var edge={
		begin:begin,
		end:end,
		src:src,
		dst:dst
	};
	return edge
}
function len(edge){
	return (edge.end - edge.begin +1)
}

function split(edge,suffix,suffix_tree,gen){
	new_node=makeNode(alloc_node(suffix_tree),gen,null);
	new_edge=makeEdge(edge.begin+len(suffix),
		edge.end,new_node,edge.dst);
	insert_edge(suffix_tree,new_edge);
	edge.end=edge.begin + len(suffix)-1;
	edge.dst=new_node;
	edge.gen=gen;
	return new_node
}