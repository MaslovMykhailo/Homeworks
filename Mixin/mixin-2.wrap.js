'use strict';

const image = {
  x: 100,
  y: 150,
  height: 10,
  width: 25,
  increase(procent) {
    image.height *= (1 + procent/100);
    image.width *= (1 + procent/100);
  },
  decrease(procent) {
    image.height *= Math.abs(1 - procent/100);
    image.width *= Math.abs(1 - procent/100);
  },
  move(dx, dy) {
    image.x += dx;
    image.y += dy;
  },
  toString() {
    return `[${image.x}, ${image.y}, ${image.height}, ${image.width}]`
  }
};
//////////////////////////////////////////////////////////////////////
const wrap = (func) => {
  let limit = 0;
  let counter = 0;
  let timer = null;
  let fn = func;

  const wrapper = (...args) => {
    if (!fn) return;
    if (limit && counter === limit) {
      limit = 0;
      counter = 0;
      wrapper.cancel();
      return;
    }
    const res = fn(...args);
    counter++
    return res;
  };

  const methods = {
    cancel() {
      fn = null;
      return this;
    },
    resume() {
      if (!fn) {
        fn = func;
        if (limit) {
          limit = 0;
          counter = 0;
        }
      }
      return this;
    },
    timeout(msec) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => this.cancel(), msec);
      return this;
    },
    limit(count) {
      limit = count;
      counter = 0;
      return this;
    }
  };

  return Object.assign(wrapper, methods);
};
///////////////////////////////////////////////////////////////////////////////
const wrapMixin = (obj, ...funcs) => {
  funcs.forEach(func => {
    if(obj[func]) {
      obj[func] = wrap(obj[func]);
    };
  });
  return obj;
};

// Usage

wrapMixin(image, 'increase', 'decrease', 'move');

console.log(image.toString());

image.move.limit(1);

image.move(10, 10);
console.log(image.toString());

image.move(10, 10);
console.log(image.toString());




