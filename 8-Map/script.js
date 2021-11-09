let three = function (){}

const map = new Map()
map.set('first','1')
map.set('second',2)
map.set(three, '3')

console.log(map)
console.log(map.size)
console.log(map.get('first'))

//Iteration
//key values
for(let[key, value] of map){
    console.log(key + ' ' + value)
}

//key
for(let key of map.keys()){
    console.log(key)
}

//values
for(let values of map.values()){
    console.log(values)
}

const arr = Array.from(map)
console.log(arr)

const newMap = new Map(arr)
console.log(newMap)

