class Hero {
    constructor(name,health,atk){
        this.name = name,
        this.health = health,
        this.atk = atk;
    }

    jump() {
        console.log("Jumping!");
    }
    hit() {
        console.log(`
            hit! Dmg: ${this.atk}
        `);
    }
    walk() {
        console.log("Walking!");
    }
}

var vision = new Hero();
var wanda = new Hero("Wanda", 5, 15);

console.log(wanda.atk);