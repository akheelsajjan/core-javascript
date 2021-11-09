// General Curry 

// const person = {
//     name : 'Akheel'
// }

// function sayMyName(lastName){
//     console.log('My name is '+ this.name +' '+ lastName)
// }

// const sayMyNameAkheel = sayMyName.bind(person)
// sayMyNameAkheel()

// Function.prototype.myBind = function (...args){
//      let obj = this
//      param1 = args.slice(1)
//      return function(...arg2){
//          obj.apply(args[0],[...param1,arg2])
//      }
// }

// Function.prototype.myBind = function (...args) {
//     let func = this;
//     param1 = args.slice(1)
//     // Accepting arguments passed to newFunc
//     return function (...newArgs) {
//       func.apply(args, [...param1, ...newArgs]);
//     };
//   };


// function mybind(fn, context){
//     return function(...arguments){
//         fn.apply(context,[...arguments])
//     }
// }


// const sayMyNameAkheel = mybind(sayMyName, person)
// sayMyNameAkheel('Sajjan')
