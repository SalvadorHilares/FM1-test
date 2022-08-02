'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numero = 0;
  for(let i=0; i<num.length; i++)
    numero = numero + Math.pow(2,i) * parseInt(num[num.length-i-1]);
  return numero;
}

function DecimalABinario(num) {
  // tu codigo aca
  var numero = "";
  while(num!=0){
    numero = (num%2).toString() + numero;
    num = Math.floor(num/2);
  }
  return numero;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}