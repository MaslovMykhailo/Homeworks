'use strict';

class Dictionary {
  constructor() {
    this.listKeys = new Array;
    this.listValues = new Array;
  }
  set(key, value) {
    this.listKeys.push(key);
    this.listValues.push(value);
  }
  get(key) {
    return this.listValues[this.listKeys.indexOf(key)];
  }
  has(key) {
    return this.listKeys.includes(key);
  }
  delete(key) {
    let delInd = this.listKeys.indexOf(key);
    this.listKeys.splice(delInd, 1);
    this.listValues.splice(delInd, 1);
  }
  get size() {
    return this.listKeys.length;
  }
  keys() {
    return this.listKeys;
  }
  clear() {
    this.listKeys = new Array;
    this.listValues = new Array;
  }
};

// Usage

const cityPopulation = new Dictionary();

cityPopulation.set('Shanghai', 24256800);
cityPopulation.set('Beijing',  21516000);
cityPopulation.set('Delhi',    16787941);
cityPopulation.set('Lagos',    16060303);

cityPopulation.delete('Shanghai');

if (cityPopulation.has('Beijing')) {
  console.log('Beijing:', cityPopulation.get('Beijing'));
}

if (!cityPopulation.has('Shanghai')) {
  console.log('no data for Shanghai');
}

console.log('size:', cityPopulation.size);
console.log('keys:', cityPopulation.keys());