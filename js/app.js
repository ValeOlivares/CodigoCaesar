function cipher() {
  var text = document.getElementById('text').value;
  var newMsje = '' ;
  for (var i = 0; i < text.length; i++) {
    var char = (text.charCodeAt(i)); // pasar letras a código ASCII
    if (char >= 97 && char <= 122){ //minúscula
      newMsje += String.fromCharCode(((char - 97 + 33) % 26) + 97);
    }else if (char >= 65 && char <= 90){ //mayúscula
      newMsje += String.fromCharCode(((char - 65 + 33) % 26) + 65);
    } else if (char === 32){
      newMsje += String.fromCharCode(char);
    }
  }
  document.getElementById('cipherText').innerHTML = (newMsje); //modificando HTML para ingresar cifrado
}
cipher();

function decipher() {
  var textD = document.getElementById('text').value;
  var newMsjeD = '' ;
  for (var i = 0; i < textD.length; i++) {
    var charD = (textD.charCodeAt(i)); // pasar letras a código ASCII
    if (charD >= 97 && charD <= 122){ //minúscula
      newMsjeD += String.fromCharCode(((charD - 97 + 19) % 26) + 97);
    }else if (charD >= 65 && charD <= 90){ //mayúscula
      newMsjeD += String.fromCharCode(((charD - 65 + 19) % 26) + 65);
    } else if (charD === 32){
      newMsjeD += String.fromCharCode(charD);
    }
  }
  document.getElementById('decipherText').innerHTML = (newMsjeD); //modificando HTML para ingresar cifrado
}
decipher();