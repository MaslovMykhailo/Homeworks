'use strict';

const generateKey = args => {
  return args.map(arg => arg + ':' + typeof(arg)).join('|');
};

const memoize = (func, min) => {
  const cache = new Object;
  const limitTime = min * 60000;

  return (...args) => {
    const key = generateKey(args);

    if (cache[key]) return cache[key][0];
    const res = func(...args);
    cache[key] = [res, Date.now()];

    Object.keys(cache).forEach(key => {
      let time = cache[key][1];
      if(Date.now() - time > limitTime) {
        delete cache[key];
      };
    });

    return res;
  };
};

const sum = (a, b) => a + b;

const sumMemo = memoize(sum, 0.002);

sumMemo(1,2);
sumMemo(2,3);
sumMemo(1,2);
sumMemo(3,4);

setTimeout(() => {sumMemo(10, 10)}, 2000);
