function pass(st, node, cnt) {
	var flag = false;// 子供に一個でも2がいるか
	for ( var key in node._children) {
		if (node._children[key].end != Infinity) {
			if (node._children[key].dst.stat == 2) {
				flag = true;
				var new_count = cnt
						+ (node._children[key].end - node._children[key].begin + 1);
				if (pass(st, node._children[key].dst, new_count)) {
					/*
					 * console.log(st.string.substring(node._children[key].end -
					 * new_count + 1, node._children[key].end + 1));
					 */
					subObjs.push(st.hashObjs.slice(node._children[key].end
							- new_count + 1, node._children[key].end + 1));
				}
			}
		}
	}
	if (flag) {
		return false;
	}
	return true;
}

/*
 * subObjsに行オブジェクトを格納していく * マークをたどっていく
 */
function substrgen(st) {
	for ( var key in st.root._children) {
		var new_count = st.root._children[key].end
				- st.root._children[key].begin + 1;
		if (st.root._children[key].dst.stat == 2
				&& pass(st, st.root._children[key].dst, new_count)) {
			/*
			 * console.log(st.string.substring(st.root._children[key].end -
			 * new_count + 1, st.root._children[key].end + 1));
			 */
			subObjs.push(st.hashObjs.slice(st.root._children[key].end
					- new_count + 1, st.root._children[key].end + 1));
		}
	}
}

/*
 * 頂点にマークをつける． * stat:2→マーク * stat:1→#つきの文字列しかない * stat:0→#なしの文字列しかない
 */
function tellme(node, length) {
	var child_stat, zerof = false, onef = false;
	for ( var key in node._children) {
		if (node._children[key].end == Infinity) {
			if (node._children[key].begin <= length)
				onef = true;
			else
				zerof = true;
		} else {
			child_stat = tellme(node._children[key].dst, length);
			if (child_stat == 2) {
				node.stat = 2;
				// console.log(node._children,node.stat);
				// return 2;
			} else if (child_stat == 0)
				zerof = true;
			else
				onef = true;
		}
	}
	if (node.stat == null && zerof && onef)
		node.stat = 2;
	else if (node.stat == null && zerof)
		node.stat = 0;
	else if (node.stat == null && onef)
		node.stat = 1;
	return node.stat
}
// subObjsを整理
// 最長部分列のみを残す
function select() {
	var th = 1;
	var new_subObjs = [];
	var end = subObjs[0][subObjs[0].length - 1].line;
	var length = subObjs[0].length;
	var maxIndex = 0;
	if (document.getElementById('th') != null)
		th = document.getElementById('th').value;
	for (i = 1; i < subObjs.length; i++) {
		if (end == subObjs[i][subObjs[i].length - 1].line) {
			if (subObjs[i].length > length) {
				length = subObjs[i].length;
				maxIndex = i;
			}
		} else {
			if (subObjs[maxIndex].length >= th)// クローンの長さが閾値以上ならば
				new_subObjs.push(subObjs[maxIndex]);
			end = subObjs[i][subObjs[i].length - 1].line;
			length = subObjs[i].length;
			maxIndex = i;
		}
	}
	if (subObjs[maxIndex].length >= th)// クローンの長さが閾値以上ならば
		new_subObjs.push(subObjs[maxIndex]);

	return new_subObjs
}

// 左側の部分列と一致する右側の行番号を調査する
function match() {
	var hashObjs2 = splitFile(2);
	var match = true;
	for (i = 0; i < subObjs.length; i++) {// 全ての部分列を調べる
		for (m = 0; m < hashObjs2.length; m++) {
			if (hashObjs2[m].value == subObjs[i][0].value) {// 部分列の最初が見つかったら
				match = true;
				for (j = 1; j < subObjs[i].length; j++) {
					if (m + j >= hashObjs2.length) {
						match = false;
						break;
					}
					if (hashObjs2[m + j].value != subObjs[i][j].value)
						match = false;
				}
				if (match == true) {// 部分列が完全に一致したら
					for (j = 0; j < subObjs[i].length; j++)
						linenum[1] += (hashObjs2[m + j].line + ",");
				}
			}
		}
	}
}