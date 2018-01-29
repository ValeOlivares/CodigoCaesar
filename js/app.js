function cipher() {
  var text = document.getElementById('text').value;
  var newMsje = '' ;
  for (var i = 0; i < text.length; i++) {
    var char = (text.charCodeAt(i));
    if (char >= 97 && char <= 122) {
      newMsje += String.fromCharCode(((char - 97 + 33) % 26) + 97);
    } else if (char >= 65 && char <= 90) { 
      newMsje += String.fromCharCode(((char - 65 + 33) % 26) + 65);
    } else if (char === 32) {
      newMsje += String.fromCharCode(char);
    }
  }
  document.getElementById('cipherText').innerHTML = (newMsje);
}
cipher();

function decipher() {
  var textD = document.getElementById('text').value;
  var newMsjeD = '' ;
  for (var i = 0; i < textD.length; i++) {
    var charD = (textD.charCodeAt(i)); 
    if (charD >= 97 && charD <= 122) { 
      newMsjeD += String.fromCharCode(((charD - 97 + 19) % 26) + 97);
    } else if (charD >= 65 && charD <= 90) { 
      newMsjeD += String.fromCharCode(((charD - 65 + 19) % 26) + 65);
    } else if (charD === 32) {
      newMsjeD += String.fromCharCode(charD);
    }
  }
  document.getElementById('decipherText').innerHTML = (newMsjeD); 
}
decipher();