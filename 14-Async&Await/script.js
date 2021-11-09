//Noraml Function
function greet(){
    console.log('Hello World')
}
greet()

//Async
async function greetAsync(){
    return  Promise.resolve('hello world')
}
greetAsync().then(
    (value)=>{
        console.log(value)
    }
)

//Await 
async function greetAsyncAwait(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Hello Workd ')
        },2000)
    })

    let value = await promise
    console.log(value)
}
greetAsyncAwait()