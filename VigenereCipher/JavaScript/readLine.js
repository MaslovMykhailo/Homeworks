'use strict';

const readline = require('readline');
const question = require('./question.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getMessageAndKey = (type) => {
  
  question.change(type);
  
  return new Promise((resolve, reject) => {
    rl.question(question.message, (input) => {
      const message = input.split('').map(char => char.toLowerCase());
      
      rl.question(question.key, (input) => {
        const key = input.split('').map(char => char.toLowerCase());
        rl.close();
        
        if (key.length > 0 && message.length > 0) {
          resolve({message, key});
        } else {
          reject();
        }
      });
    });
  });
};

module.exports = getMessageAndKey;
