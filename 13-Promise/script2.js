//-----------------Types Static Promises-----------//
//-----------ALL--------------//
// 1) Promise.all()

const promise1 = Promise.resolve('resolve 1');
const promise2 = 'resolve 2'
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve 3')
    },2000)
})

// Promise.all([promise1, promise2, promise3]).then(
//     (values)=>{
//         console.log(values)
//     }
// )







//---------ALL SEATLED-----------
// 2) Promise.allsettled()

const promise11 = Promise.reject('resolve 11');
const promise12 = 'resolve 12'
const promise13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve 13')
    },2000)
})

// Promise.allSettled([promise11, promise12, promise13]).then(
//     (values)=>{
//         console.log(values)
//     }
// )





//===========RACE============
/// 3) Promise.race()

const promise111 = Promise.resolve('resolve 111');
const promise112 = 'resolve 112'
const promise113 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('resolve 113')
    },2000)
})

// Promise.race([promise111, promise112, promise113]).then(
//     (values)=>{
//         console.log(values)
//     }
// )








//===========ANY============
/// 3) Promise.any()

//const promise1111 = Promise.reject('resolve 1111');
const promise1112 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('resolve 1113')
    },1000)
})
const promise1113 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('resolve 1113')
    },2000)
})

Promise.any([ promise1112, promise1113]).then(
    (values)=>{
        console.log(values)
    }
)