'use strict';

const fs = require('fs');

const square = {
  x: 10,
  y: 20,
  side: 50,
  toString() {
    return `[${square.x}, ${square.y}, ${square.side}]`;
  },
  move(dx, dy) {
    square.x += dx;
    square.y += dy;
  }
};

const logable = (obj) => {
  Object.keys(obj).forEach(key => {
    if(typeof(obj[key]) === 'function') {
      obj[key] = logger(obj[key]);
    };
  });
};

const logger = (f) => {
  return (...args) => {
    let name = f.name;
    let argum = args.length > 0 ? args : 'not arguments' ;
    let res = f(...args) || 'not return';
    let time = new Date();

    writeFile('Method name : ' + name +
                '\narguments : ' + argum +
                '\nresult : ' + res +
                '\ntime : ' + time);
    return res;
  };
};

// Write in file

const log = fs.createWriteStream('log.txt');

const writeFile = (str) => {
  log.write(str + '\n\n');
};

// Usage

logable(square);

console.log(square.toString());

square.move(20, 30);

console.log(square.toString());

