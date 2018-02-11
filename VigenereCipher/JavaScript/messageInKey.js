'use strict';

const messageInKey = (mes, key) => {
  let res = [];
  
  let j = 0;
  
  for(let i = 0 ; i < mes.length ; i++) {
    if(j === key.length) {
      j = 0;
    }
    
    if(mes[i].charCodeAt(0) > 96 && mes[i].charCodeAt(0) < 123) {
      res.push(key[j]);
      j++;
    } else {
      res.push(mes[i]);
    }
  }
  
  return res;
};

module.exports = messageInKey;