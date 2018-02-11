'use strict';

const square = require('./createSquare.js');
const getVigenereCipher = require('./getCipher.js');
const getMessageAndKey = require('./readLine.js');
const question = require('./question.js');

getMessageAndKey('encrypt')
  .then(input => console.log(
    question.answer + getVigenereCipher(input.message, input.key, square
    )))
  .catch(() => console.log('Incorrect data!'));