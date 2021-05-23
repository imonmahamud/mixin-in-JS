//mixin
function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk={
    walk:function(){
        console.log('I am can Walking...');
    }
}
var canEat={
    eat:function(){
        console.log('I can eating...');
    }
}
var canSwim={
    swim:function(){
        console.log("Swiming...");
    }
}


// var person=Object.assign({},canWalk,canEat)
// person.name = 'Twinkle cats'
function Person(name){
    this.name = name
}
mixin(Person.prototype, canWalk, canEat)
var person = new Person('HM Nayem')
console.log(person);

function Goldfish(name){
    this.name=name
}
mixin(Goldfish.prototype, canEat, canSwim)

var fish = new Goldfish('bla bla bla')
console.log(fish)
