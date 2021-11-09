let counter = 0
//-----------Throtle-----------//

function throtle(fn, duration){
    var throtle
    return function(){
        if(!throtle){
            fn.apply(this)
            throtle = true
            setTimeout(()=>{
                throtle = false
            },duration)
        }
    }
}

const logger = () =>{
    console.log(counter)
    counter++
}

const genrateThrotle = throtle(logger,800)
genrateThrotle(1)
genrateThrotle(2)


//----------------Debounce------------//

function debounce(fn, duration){
    let timer
    return function(){
        if(timer){
           clearTimeout(timer)      
        }
            timer = setTimeout(()=>{
                fn.apply(this)
            },duration)
        
    }

}

const debouncerLogger = debounce(logger, 300)
