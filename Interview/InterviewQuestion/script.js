

// function cuntPair(input_array){
//     const map = new Map()
//     input_array.forEach(element => {
//         if(map.has(element)){
//             map.set(element, map.get(element)+1)
//         }else{
//             map.set(element, 1)
//         }
//     });
//     let pairs = 0
//     for(let [key, value] of map){
//       if(value > 1){
//         pairs = pairs + value
//       }
//     }
//     if(pairs > 1){
//         pairs = pairs/2
//         pairs = Math.floor(pairs)
//         return pairs
//     }else{
//         return pairs
//     }
// }

// let a =  [1, 2,3,4] // 1 -> 3, 3 -> 1 // 1 + 1
// console.log(cuntPair(a))



function mapFunc(n){
    let returnArray= []
    let map = new Map()
    map.set(2,['a','b','c'])
    map.set(3,['d','e','f'])
    map.set(4,['g','h','i'])
    map.set(5,['j','k','l'])
    map.set(6,['m','n','o'])
    map.set(7,['p','q','r','s'])
    map.set(8,['t','u','v'])
    map.set(9,['w','x','y','z'])

    let array = [] 
 

    
    let length = n.split('').length
    let indices = new Array(n);
    let arr = n.split('')
    console.log(arr)
    for(let i =0; i< length; i++){
        array.push(map.get(parseInt(arr[i])))
    }
    
    for(let i = 0; i < length; i++){
        indices[i] = 0;
    }
    while (true){

        let str = ''
        for(let i = 0; i < length; i++){
           // subArray.push()
           // subArray.push(array[i][indices[i]])
            //console.log(array[i][indices[i]] + ' ')
            str = str + array[i][indices[i]]
        }
          returnArray.push(str)

        let next = length - 1;
        while (next >= 0 && (indices[next] + 1 >=array[next].length)){
            next --
        }
        if (next < 0){
            return returnArray;
        }
        indices[next]++;
        for(let i = next + 1; i < length; i++){
            indices[i] = 0;
        }
        
    }
     

}

const a = mapFunc('239')
// console.log(a)


function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function bin2Dec(num){
    return parseInt(num, 2);;
}

function compliment(dec) {
    let arr = dec.toString().split('')
    let str = ''
    for(let i =0;i< dec.toString().length; i++ ){
         str +=   (arr[i] === '0')? '1': '0';
    }
   return str
 
}


function king(n){
    const a_binary = dec2bin(n)
    const b_binary = compliment(a_binary)
    const a_decimal = bin2Dec(a_binary)
    const b_decimal = bin2Dec(b_binary)
    const result = a_decimal - b_decimal
    return result
}

king(0)