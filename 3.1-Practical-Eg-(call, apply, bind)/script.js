//-----------------CALL-----------------------//
//Converting arguments into array
let argsToArray = function(){
   
    console.log( [].slice.call(arguments))
}
argsToArray(1,3,4,5)


//Converting objects into array
let listObj = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
   // length: 3
  };
console.log('Converting objects into array')
let  listObjResult = Object.keys(listObj).map((key)=> [key, listObj[key]])
console.log(listObjResult)

var obj2 = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj2).map((key) => [Number(key), obj2[key]]);
//console.log(result)
//console.log([].slice.call(listObj))

//Constructor function
let mamals = function(legs){
    this.legs = legs;
}

let cat = function(legs, isDomesticated){
    mamals.call(this,legs)
    this.isDomesticated = isDomesticated
}

let lion = new cat(4, false)
console.log(lion)


//-----------------APPLY-----------------------//
// find min
let numArray = [1,2,3,4,5]
console.log(Math.min.apply(null,numArray))

//-----------------BIND-----------------------//
let obj = {
    name: 'Akheel2',
    fullName(){
       function callName(){
            console.log(this.name)
        }
        callName.bind(this)()
    
    }
}

obj.fullName()

