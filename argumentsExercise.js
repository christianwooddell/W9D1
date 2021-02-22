function continuousAdd() {
    let args = [];
    return function _curriedAdd(num) {
            args.push(num);
            console.log(args.reduce((acc, sum) => {
            return acc + sum;
        }));
    return _curriedAdd;
    }
}
// continuousAdd()(1)(2)(3)(4);

function continuousAdd2(...args) {
    console.log(args.reduce((acc, sum) => {
        return acc + sum;
    }));
}

// continuousAdd2(1,2,3,7)

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}
Function.prototype.myBind = function (ctx) {
    const that = this;
    const bindTimeArgs = Array.from(arguments).slice(1)
    console.log(bindTimeArgs)
    return function(){
        const callTimeArgs = Array.from(arguments)
        console.log(callTimeArgs)
        const allArgs = bindTimeArgs.concat(callTimeArgs)
        console.log(allArgs)
        that.apply(ctx, allArgs)
    }
}

const spots = new Cat("Spots");
const fido = new Dog("Fido");

// spots.says("meow", "Rich");
let notSpotSays = spots.says.myBind(fido, "meow");
notSpotSays("Rich");
notSpotSays("Yohan");


function Surrogate() {};
Surrogate.prototype = Dog.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat;
