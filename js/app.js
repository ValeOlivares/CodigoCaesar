function cipher() {
  var text = document.getElementById('text').value;
  var newMsje = [] ;
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    var ascii = char.charCodeAt(0); 
    var move = (((ascii - 65 + 33) % 26) + 65);
    var cipherMsje = String.fromCharCode(move); // pasamos el ASCII a letras nuevamente
    newMsje.push(cipherMsje);
    var joinMsje = newMsje.join('');
    var nContenedor = document.createElement('div');
    var nCaja = document.getElementById('caja3');
    var parrafo = document.createElement('p');
    var nodoText = document.createTextNode(joinMsje);
    parrafo.appendChild(nodoText);
    nContenedor.appendChild(parrafo);
    nCaja.appendChild(nContenedor);
  }
}
cipher();

function decipher() {
  
}
decipher();
