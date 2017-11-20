'use strict';

const extend = (obj, ...mixins) => {
  mixins.forEach(mixinArr => {

    mixinArr.forEach(mixin => {

      Object.keys(mixin).forEach((key, i) => {

        if(i) {
          if(!obj[key]) {
            obj[key] = mixin[key];
          } else {
            if(mixin.override) {
              obj[key] = mixin[key];
            }
          }
        }

      })
    });
  });
  return obj;
};

const mix2 = [
  {
    override: true,
    toString() {
      return `${this.name} - ${this.city} - ${this.born}`;
    }
  },
  {
    override: false,
    age() {
      const year = new Date().getFullYear();
      const born = new Date(this.born).getFullYear();
      return year - born;
    }
  }
];

const mix1 = [
  {
    override: false,
    city: 'Pisa'
  }
];

const obj1 = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: '121-04-26'
};

extend(obj1, mix1, mix2);

console.log(obj1);