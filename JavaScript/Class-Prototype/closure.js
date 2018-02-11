'use strict';

const line = (coord1, coord2) => {

    const l = {};

    l.move = (dx, dy) => {
        coord1[0] += dx;
        coord1[1] += dy;
        coord2[0] += dx;
        coord2[1] += dy;
    }

    l.toString = () => {
        return `[[${coord1}], [${coord2}]]`;
    }

    return l;
}

// const l1 = line([1, 2], [3, 4]);
// l1.move(2, 1);
// console.log(l1.toString());

const polygon = (...points) => {

    const p = {};

    p.move = (dx, dy) => {

        points.forEach(point => {
            point[0] += dx;
            point[1] += dy;
        })
    }

    p.toString = () => {
        let str = '[';
        points.forEach(point => {
            str = str + '[' + point + '], ';
        })
        return str.slice(0, -2) + ']';
    }

    return p;
}

// const polygon1 = polygon([1, 2], [3, 4], [5, 6]);
// polygon1.move(2, 1);
// console.log(polygon1.toString());

// test

const testLine = {};
const testPolygon = {};
console.time('closure');

for (let i = 1 ; i < 10001 ; i++) {
    testLine[`line${i}`] = line([1, 2], [3, 4]);
    testLine[`line${i}`].move(20, 25);

    testPolygon[`polygon${i}`] = polygon([1, 2], [3, 4], [5, 6]);
    testPolygon[`polygon${i}`].move(10, 15);
}

console.timeEnd('closure');