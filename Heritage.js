class Animal {
    constructor(name,age,kg) {
        this.name = name;
        this.age = age;
        this.kg = kg;
    }

    walk() {
        console.log("walking");
    }
    run() {
        console.log("Running");
    }
}

class Bird extends Animal{
    constructor(name,age,kg,flySpeed) {
        super(name,age,kg)
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log("Flying");
    }

}

var bird = new Bird("Bily",5,1,5.2);
bird.walk();
bird.run();
bird.fly();
var {name,age,kg,flySpeed} = bird;
console.log(`
velocity: ${flySpeed}

`)