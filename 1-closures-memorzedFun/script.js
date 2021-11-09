// // General Closure 

// function memorized(callback){
//     let cache = {}
//     return function optimized(...args){
//         const key = args.toString()
//         if(key in cache){
//             console.log(cache)
//             console.log('returned from cache')
//             return cache[key]
//         }else{
//             const result = callback(...args)
//             cache[key] = result
//             return result
//         }
//     }
// }

// function add(a,b){
//     return a + b
// }

// const addition = memorized(add)
// console.log(addition(2,3))
// console.log(addition(1,3))
// console.log(addition(4,3))
// console.log(addition(1,3))
// console.log(addition(1,3))
// console.log(addition(1,3))


let base = {
    'a': 1,
    'b': 2
}

let newBase = Object.create(base)
newBase['c'] = 3
for(let prop in newBase){
    if(newBase.hasOwnProperty(prop)){
        console.log(prop)
    }
    
}
