const set = new Set()
set.add(2)
set.add(23)
set.add(24)
set.add(12)
set.add(22)
set.add(2)

console.log(set)
console.log(set.size)
console.log(set.has(2))
// set.clear()
// console.log(set)

for(let val of set){
    console.log(val)
}

const arr = [2,2,3,4,5,6,7,8,8,9,0,0,0,1]
let uniqueNumbers = new Set(arr)
console.log([...uniqueNumbers])
let newArr = Array.from(uniqueNumbers);
console.log(newArr)