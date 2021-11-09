let count = 1

const promise = new Promise((resolve, reject )=>{
    if(count == 0){
        resolve('resolved')
    }else{
        reject('rejected')
    }
})

promise.then(success)
promise.catch(failure)


function success(resolved){
    console.log('Passed....or ' + resolved)
}

function failure(rejected){
    console.log('failed.... or ' + rejected)
}



