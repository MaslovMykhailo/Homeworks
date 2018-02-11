'use strict';

const messageInKey = require('./messageInKey.js');

const getVigenereCipher = (mes, key, sq) => {
  const keyMessage = messageInKey(mes, key);
  
  const cipher = [];
  
  for(let i = 0 ; i < mes.length ; i++) {
    if(mes[i].charCodeAt(0) > 96 && mes[i].charCodeAt(0) < 123) {
      let gorizontalIndex = sq[0].indexOf(mes[i]);
      let verticalIndex = sq[0].indexOf(keyMessage[i]);
  
      cipher.push(sq[verticalIndex][gorizontalIndex]);
    } else {
      cipher.push(mes[i]);
    }
  }
  
  return cipher.join('');
};

module.exports = getVigenereCipher;