'use strict';

const Polygon = class {
  constructor (x, y, ...sides) {
    this.x = x;
    this.y = y;

    sides.forEach((side, i) => {
      this[`side${i+1}`] = side;
    });
  }

  toString() {
    let str = `[ ${this.x}, ${this.y}`;
    let i = 1;
    while(this[`side${i}`]) {
      str += `, ${this[`side${i}`]}`;
      i++;
    };
    str += ']';
    return str;
  }
};

const equilateral = (Category, countSides) => class extends Category {
  constructor(x, y, side) {
    const sides = [];
    for(let i = 1 ; i <= countSides ; i++) {
      sides.push(side);
    };
    super(x, y, ...sides);
  };
};

const Square = equilateral(Polygon, 4);

const square1 = new Square(1, 1, 10);

console.log(square1.toString());

const Triangle = equilateral(Polygon, 3);

const triangle1 = new Triangle(15, 20, 50);

console.log(triangle1.toString());