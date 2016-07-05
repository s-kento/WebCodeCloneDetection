function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type
				|| 'n/a', ') - ', f.size, ' bytes, last modified: ',
				f.lastModifiedDate.toLocaleDateString(), '</li>');
	}
	document.getElementById('list').innerHTML = '<ul>' + output.join('')
			+ '</ul>';
}

function readFile(evt) {
	var files = evt.target.files;
	var reader1 = new FileReader();
	var reader2 = new FileReader();
	reader1.readAsText(files[0]);
	reader1.onload = function(ev) {
		document.getElementById('source1').value = reader1.result;
	}
	reader2.readAsText(files[1]);
	reader2.onload = function(ev) {
		document.getElementById('source2').value = reader2.result;
	}
}