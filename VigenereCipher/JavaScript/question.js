'use strict';

const question = {
  message: '',
  key: 'Your key: ',
  answer: '',
  change(type) {
    switch(type) {
      case 'encrypt': {
        this.message = 'Your message: ';
        this.answer = 'Cipher: ';
        break;
      }
      case 'decipher': {
        this.message = 'Your cipher: ';
        this.answer = 'Message: ';
        break;
      }
    }
  }
};

module.exports = question;

