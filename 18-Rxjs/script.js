let obs = Rx.Observable
            .interval(1000)
            .take(3)
            .map(value=> value * 3)

obs.subscribe(value=> console.log(value))
