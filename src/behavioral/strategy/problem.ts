/* 
  스트래티지 패턴: 같은 문제를 해결하는 여러 알고리즘이 클래스별로 캡슐화되어 있고 이들이 필요할 때
  교체할 수 있도록 함으로써 동일한 문제를 다른 알고리즘으로 해결할 수 있게 하는 디자인 패턴
*/

abstract class Robot {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  abstract attack(): void;
  abstract move(): void;
}

export {};

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

const TAEKWON_V: Robot = new TaekwonV("TaekwonV");
const ATOM: Robot = new Atom("Atom");

console.log(`My name is ${TAEKWON_V.getName()}`);
TAEKWON_V.move();
TAEKWON_V.attack();

console.log(`My name is ${ATOM.getName()}`);
ATOM.move();
ATOM.attack();
