function makeSuffix(src,begin,end){
	var suffix={
		src:src,
		begin:begin,
		end:end
	};
	return suffix
}

function is_explicit(suffix){
	return (suffix.begin > suffix.end)
}

function canonize(suffix,suffix_tree){
	var edge;
	while(true){
		if (is_explicit(suffix))
			break;
		edge=suffix.src._children[suffix_tree.hashObjs[suffix.begin].value];
		if (len(edge) > len(suffix))
			break;
		suffix.begin+=len(edge);
		suffix.src=edge.dst
	}
}