
class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log("My name is " + this.name)
    }
    eat(){
        console.log(this.name + " is eating ")
    }
}

const akheel = new Person('Akheel')
akheel.sayName()
akheel.eat()

class Programmer extends Person{
    constructor(name, language){
        super(name)
        this.language = language
    }
    code(){
        console.log(this.name + ` code's in ${this.language}`)
    }
}
const newAkheel = new Programmer('AK','Javascript')
newAkheel.sayName()
newAkheel.eat()
newAkheel.code()
console.log(Object.getPrototypeOf(newAkheel).constructor)