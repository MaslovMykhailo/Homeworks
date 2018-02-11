'use strict';

const square = require('./createSquare.js');
const decipherVigenere = require('./decodeCipher.js');
const getMessageAndKey = require('./readLine.js');
const question = require('./question.js');

getMessageAndKey('decipher')
  .then(input => console.log(
    question.answer + decipherVigenere(input.message, input.key, square)
  ))
  .catch(() => console.log('Incorrect data!'));