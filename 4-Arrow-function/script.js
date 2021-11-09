function sum(a, b, c,d){
    console.log(a + b + c+d)
}

// function curry(fn){
//     return function curryfy(...args){
//         if(args.length >= fn.length){
//             return fn.apply(this, args)
//         }else{
//             return function(...newArgs){
//                 return curryfy.apply(this, args.concat(newArgs))
//             }
//         }
//     }
// }

// function curry(fn){
//     return function curryfy(...args){
//         return  args.length >= fn.length? fn.apply(this, args):curryfy.bind(this, ...args)
//     }
// }

curriedSum = curry(sum)
curriedSum(2)(3)(5)(0)
// curriedSum(2,3)(5)
// curriedSum(2,3,5)
// curriedSum(2)(3,5)

