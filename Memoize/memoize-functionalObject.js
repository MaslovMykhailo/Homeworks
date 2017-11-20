'use strict';

const generateKey = args => {
  return args.map(arg => arg + ':' + typeof(arg)).join('|');
};

const memoize = func => {
  const cache = new Map();

  const methods = {
    clear() {
      cache.clear();
    },
    add(key, value) {
      cache.set(key, value);
    },
    del(key) {
      cache.delete(key);
    },
    get(key) {
      if(cache.has(key)) {
        return cache.get(key);
      } else {
        return 'Key is not defined';
      };
    },
    maxCount(count) {
      this.count = count;
      while(cache.size >= count) {
        let first = cache.keys().next().value;
        cache.delete(first);
      };
    },
    count: undefined,
  };

  const eventEmmiter = {
    events: {},
    on(name, fn) {
      const event = this.event[name] || [];
      this.event[name] = event;
      event.push(fn);
    },
    emit(name, ...data) {
      const event = this.events[name];
      if (event) event.forEach(fn => fn(...data));
    }
  };

  const result = (...args) => {
    const key = generateKey(args);
    if(cache.has(key)) return cache.get(key);

    const res = func(...args);

    if(result.count) {
      let count  = result.count;
      while(cache.size >= count) {
        let first = cache.keys().next().value;
        cache.delete(first);
      };
    };
    cache.set(key, res);
    console.dir(cache);
    return res;
  };

  Object.assign(result, methods, eventEmmiter);

  return result;
};

// Usage

const sum = (a, b) => a + b;

const sumMemo = memoize(sum);

sumMemo(1, 2);
sumMemo(3, 4);

sumMemo.clear();

sumMemo(5, 6);

sumMemo.add('myKey', 0);

console.log(sumMemo.get('myKey'));
console.log(sumMemo.get('yourKey'));

sumMemo(7, 8);

sumMemo.maxCount(2);

sumMemo(1, 2);
