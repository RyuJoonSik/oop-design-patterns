"use strict";
class FlyingStrategy {
    move() {
        console.log("I can fly.");
    }
}
class WalkingStrategy {
    move() {
        console.log("I can walk.");
    }
}
class MissileStrategy {
    attack() {
        console.log("I have Missile and can attack with it.");
    }
}
class PunchStrategy {
    attack() {
        console.log("I have strong punch and can attack with it.");
    }
}
class Robot {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    attack() {
        this.attackStrategy.attack();
    }
    move() {
        this.movingStrategy.move();
    }
    setMovingStrategy(movingStrategy) {
        this.movingStrategy = movingStrategy;
    }
    setAttackStrategy(attackStrategy) {
        this.attackStrategy = attackStrategy;
    }
}
class TaekwonV extends Robot {
}
class Atom extends Robot {
}
const TAEKWON_V = new TaekwonV("TaekwonV");
const ATOM = new Atom("Atom");
TAEKWON_V.setMovingStrategy(new WalkingStrategy());
TAEKWON_V.setAttackStrategy(new MissileStrategy());
ATOM.setMovingStrategy(new FlyingStrategy());
ATOM.setAttackStrategy(new PunchStrategy());
console.log(`My name is ${TAEKWON_V.getName()}`);
TAEKWON_V.move();
TAEKWON_V.attack();
console.log(`My name is ${ATOM.getName()}`);
ATOM.move();
ATOM.attack();
//# sourceMappingURL=solution.js.map