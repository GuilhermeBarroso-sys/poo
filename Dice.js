class Dice {
    constructor(diceFace) {
        this.diceFace = diceFace;
    }

    roll() { // Math.floor retira o ponto flutuante
        return Math.floor(Math.random() * this.diceFace + 1);
        // Math.random retorna um valor 0 (exclusivo) até 1 (não exclusivo)
        // http://devfuria.com.br/javascript/numeros-aleatorios/
    }
}

var dice6 = new Dice(6);
var dice100 = new Dice(100);
console.log(dice100.roll());
console.log(dice6.roll());