declare abstract class Robot {
    private name;
    constructor(name: string);
    getName(): string;
    abstract attack(): void;
    abstract move(): void;
}
declare class TaekwonV extends Robot {
    attack(): void;
    move(): void;
}
declare class Atom extends Robot {
    attack(): void;
    move(): void;
}
declare const TAEKWON_V: Robot;
declare const ATOM: Robot;
