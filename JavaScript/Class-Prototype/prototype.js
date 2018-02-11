'use strict';

function Line(coord1, coord2) {
    this.x1 = coord1[0];
    this.y1 = coord1[1];
    this.x2 = coord2[0];
    this.y2 = coord2[1];
}

Line.prototype.move = function(dx, dy) {
    this.x1 += dx;
    this.y1 += dy;
    this.x2 += dx;
    this.y2 += dy;
}

Line.prototype.toString = function() {
    return `[[${this.x1},${this.y1}],[${this.x2},${this.y2}]]`;
}

// const line1 = new Line([1, 2], [3, 4]);
// line1.move(1,1);
// console.log(line1.toString());

// next prototype

function Polygon(...args) {
    let length = args.length;
    for(let i = 0 ; i < length ; i++) {
        this[`point${i + 1}`] = args[i];
    }
}

Polygon.prototype.move = function(dx, dy) {
    Object.keys(this).forEach(point => {
        this[point][0] += dx;
        this[point][1] += dy;
    });
}

Polygon.prototype.toString = function() {
    let str = '[';
    Object.keys(this).forEach(point => {
        str = str + '[' + (this[point]) + '], ';
    })
    return str.slice(0, -2) + ']';
}

// const polygon1 = new Polygon([1, 2], [3, 4], [5, 6]);
// polygon1.move(2,1);
// console.log(polygon1.toString());

//test

const testLine = {};
const testPolygon = {};
console.time('prototype');

for (let i = 1 ; i < 10001 ; i++) {
    testLine[`line${i}`] = new Line([1, 2], [3, 4]);
    testLine[`line${i}`].move(20, 25);

    testPolygon[`polygon${i}`] = new Polygon([1, 2], [3, 4], [5, 6]);
    testPolygon[`polygon${i}`].move(10, 15);
}

console.timeEnd('prototype');