class Calculator{
    constructor(){ 
        this.value = 0
    }
    
    add(num){
          this.value+= num;
          return this
    }
    sub(num){
           this.value-=num;
           return this
    }
    print(){
        console.log(this.value)
    }
}

class ScientificCalculator extends Calculator{

    square(){
         this.value*= this.value
         return this
    }

}

const s = new ScientificCalculator();
s.add(100).sub(98).square().print()
