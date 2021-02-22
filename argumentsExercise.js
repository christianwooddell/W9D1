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

const spots = new Cat("Spots");
const fido = new Dog("Fido");

// Function.prototype.myBind = function (ctx, ...args) {
//     const that = this;
   
//     return function(){
   
//         that.apply(ctx, args)
//     }
// }
// spots.says.myBind(fido, "meow", "Christian")();


// Function.prototype.myBind = function (ctx) {
//     const that = this;
   
//     return function(){
//         const callTimeArgs = Array.from(arguments)
//         that.apply(ctx, callTimeArgs)
//     }
// }
// spots.says.myBind(fido)("meow","Christian")


// Function.prototype.myBind = function (ctx) {
//     const that = this;
//     const bindTimeArgs = Array.from(arguments).slice(1)
//     return function(){
//         const callTimeArgs = Array.from(arguments)
//         const allTimeArgs = bindTimeArgs.concat(callTimeArgs)
//         that.apply(ctx, allTimeArgs)
//     }
// }

// spots.says.myBind(fido, "meow")("Yohan");

// let notSpotSays = spots.says.myBind(fido, "meow");
// notSpotSays("Rich");
// notSpotSays("Dane");

function curriedSum(numArgs) {
    const numbers = [];
   
    function _curriedSum(num) {
        numbers.push(num);
        let total = 0;
        if (numbers.length === numArgs) {
            numbers.forEach((num) => { total += num });
            return total;
        } else {
            return _curriedSum
        }
    };
    return _curriedSum; 
}

console.log(curriedSum(3)(1)(2)(5));
// curry definition =  
// (logFunc).curry
Function.prototype.curry = function(numArgs) {
    const args = [];
    const that = this; 

    function _curry(ele) {
        args.push(ele);

        if (args.length === numArgs) {
            that.apply(that, args)
//          (logFunc).apply(that,args)<-- all the passed in arguments gets invoked once args reachs numArgs
        } else {
            return _curry
        }
    }
    return _curry
    
}

let logFunc = function(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
};
  
