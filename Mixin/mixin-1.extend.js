'use strict';

const extend = (obj, ...mixins) => {
  mixins.forEach(mixin => {
    Object.keys(mixin).forEach(key => {
      if(!obj[key]) {
        obj[key] = mixin[key];
      }
    });
  });
  return obj;
};


const square = {
  x: 20,
  y: 10,
  side: 15,
  sqr: 225
};

const mixin1 = {
  sqr: 'sqr mixin1',
  p() {return this.side * 2;},
  toStr() {return `[${this.x} , ${this.y}]`;}
};

const mixin2 = {
  toStr() {return 'I am a second mixin';},
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  },
  side: 20
};

extend(square, mixin1, mixin2);


console.log(square.sqr);

console.log(square.p());

console.log(square.toStr());

square.move(5, 15);

console.log(square.toStr());


