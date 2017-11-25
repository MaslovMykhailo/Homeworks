'use strict';

class SetOnArr {
  constructor() {
   this.list = new Array();
  }
  add(key) {
    this.list.push(key);
  }
  delete(key) {
    this.list.splice(this.list.indexOf(key), 1);
  }
  has(key) {
    return this.list.includes(key);
  }
  keys() {
    return this.list;
  }
  values() {
    return this.list;
  }
  clear() {
    this.list = new Array();
  }
};

const cities = new SetOnArr();

cities.add('Beijing');

['Kiev', 'London', 'Baghdad'].forEach(city => cities.add(city));

cities.delete('Baghdad');

console.dir({ cities });

if (cities.has('Kiev')) {
  console.log('cities contains Kiev');
}

console.dir({ keys: cities.keys() });
console.dir({ values: cities.values() });

cities.clear();