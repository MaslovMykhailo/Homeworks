'use strict';

const messageInKey = require('./messageInKey.js');

const decipherVigenere = (cipher, key, sq) => {
  const keyMessage = messageInKey(cipher, key);
  
  const message = [];
  
  for(let i = 0 ; i < cipher.length ; i++) {
    if(cipher[i].charCodeAt(0) > 96 && cipher[i].charCodeAt(0) < 123) {
      let indexOfLine = sq[0].indexOf(keyMessage[i]);
      let indexOfColumn = sq[indexOfLine].indexOf(cipher[i]);
  
      message.push(sq[0][indexOfColumn]);
    } else {
      message.push(cipher[i]);
    }
  }
  
  return message.join('');
};

module.exports = decipherVigenere;