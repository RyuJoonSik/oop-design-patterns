"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class TaekwonV extends Robot {
    attack() {
        console.log("I have Missile and can attack with it.");
    }
    move() {
        console.log("I can only walk.");
    }
}
class Atom extends Robot {
    attack() {
        console.log("I have strong punch and can attack with it.");
    }
    move() {
        console.log("I can fly.");
    }
}
const TAEKWON_V = new TaekwonV("TaekwonV");
const ATOM = new Atom("Atom");
console.log(`My name is ${TAEKWON_V.getName()}`);
TAEKWON_V.move();
TAEKWON_V.attack();
console.log(`My name is ${ATOM.getName()}`);
ATOM.move();
ATOM.attack();
//# sourceMappingURL=strategy.js.map