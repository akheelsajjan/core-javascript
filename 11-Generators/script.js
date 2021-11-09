function* generatorFunction(){
    yield 'Hello'
    yield 'World'
}

const obj  =  generatorFunction()

// for(let v of obj){
//     console.log(v)
// }

//-----------Examples-------------//
//========1=========//
function* generatorOneTofifty(){
    let i= 0;
    while(i <= 50){
        yield i
        i++
    }
}

const generate = generatorOneTofifty()
console.log([...generate])
for(let value of generate){
    console.log(value)
}

//========2=========//
function* range(start, end, interval){
    let i= start;
    while(i <= end){
        yield i
        i+=interval
    }
}

const rangePrint = range(10,20,2)
console.log([...rangePrint])