Function.prototype.inherits = function Surrogate() {};
Surrogate.prototype = MovingObject.prototype;
Ship.prototype = new Surrogate();
Ship.prototype.constructor = Ship;

function MovingObject(name) { 
    this.name = name;
}

function Ship(name) {
    MovingObject.call(this, name)
}
Ship.inherits(MovingObject);

function Asteroid(name) { 
    MovingObject.call(this, name)
}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function() {
    console.log(this.name + " is moving!");
};



Asteroid.prototype.isRock = function() {
    console.log(this.name + " is a rock")
}

// Ship.prototype = MovingObject.prototype

Ship.prototype.hasPilot = function() {
    console.log(this.name + " has a pilot!")
}

// function Surrogate () {};
// Surrogate.prototype = MovingObject.prototype;
// Ship.prototype = new Surrogate();
// Ship.prototype.constructor = Ship;
// Asteroid.prototype = new Surrogate();
// Asteroid.prototype.constructor = Asteroid;


Ship.prototype.turbo = function(){
    console.log("super speed!!!!")
}


const boaty = new Ship("Boaty"); 
boaty.move();
boaty.hasPilot();
boaty.turbo();

const mysteriousobject = new MovingObject("Mystery");
mysteriousobject.move();