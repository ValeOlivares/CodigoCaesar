function cipher() {
  var text = document.getElementById('text').value;
  var newMsje = '' ;
  for (var i = 0; i < text.length; i++) {
    var char = (text.charCodeAt(i) - 65 + 33) % 26 + 65; // pasar letras a código ASCII
    console.log(newMsje);
    newMsje += String.fromCharCode(char); // pasamos el ASCII a letras nuevamente
  }
  document.getElementById('cipherText').innerHTML = (newMsje); //modificando HTML para ingresar cifrado
}
cipher();

function decipher() {
    var text = document.getElementById('text').value;
  var newMsjeDec = '' ;
  for (var j = 0; j < text.length; j++) {
    var charDec = (text.charCodeAt(j) - 65 + 33) % 26 + 65; // pasar letras a código ASCII
    console.log(newMsjeDec);
    newMsjeDec += String.fromCharCode(charDec); // pasamos el ASCII a letras nuevamente
  }
  document.getElementById('decipherText').innerHTML = (newMsjeDec); //modificando HTML para ingresar cifrado
}
decipher();
