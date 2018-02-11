'use strict';

const a = 'a'.charCodeAt(0);
const z = 'z'.charCodeAt(0);

const alphabet = [];

for(let i = a ; i <= z ; i++) {
  alphabet.push(String.fromCharCode(i));
}

const square = [alphabet.slice()];
let newAlphabet = alphabet.slice();

for(let i = 1 ; i < newAlphabet.length ; i++) {
  
  const firstSymbol = alphabet.shift();
  newAlphabet.shift();
  
  newAlphabet.push(firstSymbol);
  
  square.push(newAlphabet.slice());
}

module.exports = square;