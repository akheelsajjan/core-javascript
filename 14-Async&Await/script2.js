//---------Static ASYNC AWAIT------------//

function resolveHello(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('Hello')
        },3000)
    })
}

function resolveWorld(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('World')
        },1000)
    })
}
//========1--SEQUENTIAL--=========//

async function sequential(){
    const hello = await resolveHello()
    console.log(hello) // 2 seconds to log
    const world = await resolveWorld()
    console.log(world) // 1 second to log
} // Total 3 seconds to log Hellow world

//sequential()

//========2--CONCURENT--=========//

async function concurent(){
    const hello = resolveHello()
    const world = resolveWorld()
    console.log(await hello + " " + await world)
   // console.log(await world)
}
//concurent()

//========3--PARALLELL--=========//
function parallel(){
    Promise.all([
        (async ()=> console.log(await resolveHello()))(),
        (async ()=> console.log(await resolveWorld()))()
    ])
}
//parallel()


//-------------Interview-question-------------//
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(2000);
      
      console.log(i);
    }
  }
  
  //demo();

