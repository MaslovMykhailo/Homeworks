'use strict';

const line = {
  x1: 10,
  y1: 20,
  x2: 15,
  y2: 25
};

const protoMixin = (obj, ...mixins) => {
  Object.setPrototypeOf(obj, {});
  mixins.forEach(mixin => {
    Object.assign(obj.__proto__, mixin);
  });
};

const mixin1 = {
  toString() {
    return `[${this.x1}, ${this.y1}], [${this.x2}, ${this.y2}]`;
  }
};

const mixin2 = {
  move(dx, dy) {
    this.x1 += dx;
    this.y1 += dy;
    this.x2 += dx;
    this.y2 += dy;
  },
  length() {
    return Math.round(Math.sqrt(Math.pow((this.x1 - this.x2), 2) + Math.pow((this.y1 - this.y2), 2)));
  }
};

protoMixin(line, mixin1, mixin2);

console.dir(line);

console.dir(line.__proto__);

console.log(line.length());
line.move(10, 5);
console.log(line.length());
console.log(line.toString());