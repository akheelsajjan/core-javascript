function Person(name){
    this.name = name
}

Person.prototype.sayName = function(){
    console.log("My name is " + this.name)
}

Person.prototype.eat = function(){
    console.log(this.name + " is eating ")
}

const akheel = new Person('Akheel')
akheel.sayName()
akheel.eat()
console.log(Object.getPrototypeOf(akheel))
console.log(Object.getPrototypeOf(akheel).constructor)

// for(person in Person.prototype){
//     console.log(person)
// }

//-------------Prototypal Inheritance-----------//

function Programmer(name,language){
    Person.call(this, name)
    this.language = language
}

Programmer.prototype = Object.create(Person.prototype);

Programmer.prototype.code = function(){
    console.log(`${this.name} code's in ${this.language}`)
}

Programmer.prototype.constructor = Programmer

const newAkheel = new Programmer('Ak','Javascript')

newAkheel.sayName()
newAkheel.eat()
newAkheel.code()
console.log(Object.getPrototypeOf(newAkheel).constructor)