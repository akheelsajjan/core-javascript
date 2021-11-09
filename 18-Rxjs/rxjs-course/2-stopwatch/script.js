const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const millisecond = document.getElementById('milliseconds')

const start$ = Rx.Observable.fromEvent(startButton,'click')
const stop$ = Rx.Observable.fromEvent(stopButton,'click')
const reset$ = Rx.Observable.fromEvent(resetButton,'click')

const pad = (number) => number <=9 ? ('0' + number): number.toString()

const render = (time) =>{
    minutes.innerHTML = pad(time.minutes);
    seconds.innerHTML = pad(time.seconds);
    millisecond.innerHTML = pad(time.millisecond);
}


const toTime = (time) =>({
    millisecond: Math.floor(time % 100),
    seconds: Math.floor((time/100)%60),
    minutes: Math.floor(time/6000)
})

const stopOrReset$ =  Rx.Observable.merge(
    stop$,
    reset$
)

const init = 0
const interval$ = Rx.Observable.interval(10)
const pause$ = interval$.takeUntil(stopOrReset$)
const increment = acc => acc + 1;
const reset = acc => init

const intcrementOrRest$ = Rx.Observable.merge(
    pause$.mapTo(increment),
    reset$.mapTo(reset)
)

start$
.switchMapTo(intcrementOrRest$)
.startWith(init)
.scan((acc, currFunc)=> currFunc(acc))
.map(toTime)
.subscribe(val=>render(val))

