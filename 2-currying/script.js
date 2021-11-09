// // General Curry 

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

function sum(a,b,c){
    console.log(a+b+c)
}


const newSum = curry(sum)
newSum(2)(1)(3)
const addtwo = newSum(2)
const addEven = addtwo(4)
addEven(3)


function logger(date, message, priority){
    console.log(date + ' ' + message + ' ' + priority);
}

const newLog = curry(logger);
const today = newLog(new Date())
const todayErr = today('Error')
todayErr('HIGH')

