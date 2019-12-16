// 1. Copy and paste your prototype in here and refactor into class syntax.

class CM {
    constructor(l, w, h) {
        this.l = l;
        this.w = w;
        this.h = h;
    }
    volume() {
        return this.l * this.w * this.h;
    }
    surfaceArea() {
        return 2 * (this.l * this.w + this.l * this.h + this.w * this.h);
    }
}

let cuboidC = new CM(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidC.volume()); // 100
console.log(cuboidC.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CM {
    constructor(l, w, h) {
        super(l, w, h);
    }
    cubeVol () {
        return this.l * this.w * this.h;
    }
    cubeSA() {
        return 6 * (this.l * this.w * this.h);
    }
}

let cubeC = new CubeMaker(5, 5, 5);

console.log(cubeC.cubeVol());
console.log(cubeC.cubeSA());
