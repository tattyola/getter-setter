class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get price() {
        return this.age * 2;
    }

    set _color(v) {
        this.color = v;
    }

    runs(s) {
        return `Speed ${s * this.age}`;
    }
}

const kitten = new Cat('Baby', 3)
kitten._color = 'brown';

console.log(kitten)
console.log(kitten.runs(3))
console.log(kitten.price)
console.log(kitten.color)

