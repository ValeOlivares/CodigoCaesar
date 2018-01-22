function cipher() {
  var text = document.getElementById('text').value;
	if (text.length <= 0) {
    alert("Favor ingresa un texto válido");
  }else{
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      var ascii = char.charCodeAt(i); //charCodeAt pasa a código ASCII
      console.log(ascii);
    }
  }
}
cipher();

function decipher() {
  var text = document.getElementById('text').value;
  if (text.length <= 0) {
    alert("Favor ingresa un texto válido");
  }
}
decipher();
