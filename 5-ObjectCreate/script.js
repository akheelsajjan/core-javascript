const personMethod = {
    sayName(){
        console.log(this.name)
    },
    eat(){
        console.log(this.name + " is eating ")
    }
}

function Person(name){
   let person = Object.create(personMethod);
   person.name = name
    return person;
}

const akheel = Person('Akheel')
akheel.sayName()
akheel.eat()