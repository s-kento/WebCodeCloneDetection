function splitFile(num) {
	var input_text = document.getElementById('source' + num).value;
	arr = input_text.split(/\r\n|\r|\n/);
	for (i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(/\s+/g, "");
		// console.log(arr[i])
	}
	var harr = hash(arr);
	var hashObjs = [];
	for (i = 0; i < harr.length; i++) {
		if (harr[i] != CybozuLabs.MD5.calc(""))
			hashObjs.push(makeHashObj(harr[i], i + 1));
	}
	return hashObjs
}

function hash(arr) {
	var harr = [];
	for (i = 0; i < arr.length; i++) {
		harr.push(CybozuLabs.MD5.calc(arr[i]));
	}
	return harr
}

function makeHashObj(value, line) {
	var hashObj = {
		value : value,
		line : line
	}
	return hashObj
}