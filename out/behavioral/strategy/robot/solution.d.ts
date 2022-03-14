interface MovingStrategy {
    move(): void;
}
declare class FlyingStrategy implements MovingStrategy {
    move(): void;
}
declare class WalkingStrategy implements MovingStrategy {
    move(): void;
}
interface AttackStrategy {
    attack(): void;
}
declare class MissileStrategy implements AttackStrategy {
    attack(): void;
}
declare class PunchStrategy implements AttackStrategy {
    attack(): void;
}
declare abstract class Robot {
    private name;
    private attackStrategy;
    private movingStrategy;
    constructor(name: string);
    getName(): string;
    attack(): void;
    move(): void;
    setMovingStrategy(movingStrategy: MovingStrategy): void;
    setAttackStrategy(attackStrategy: AttackStrategy): void;
}
declare class TaekwonV extends Robot {
}
declare class Atom extends Robot {
}
declare const TAEKWON_V: Robot;
declare const ATOM: Robot;
