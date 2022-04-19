const people = ([10, 0], [5, 3], [12, 1], [1, 3], [0, 3], [1, 7])
const bus = (arr) =>{
    result = arr.reduce((a, [wentOn, wentOff]) => {
        return a + wentOn - wentOff;
    });
}

// Secound solution
const numberOfPeople = (busStops) => {
    let x = 0;
    busStops.forEach(a => x = x + a[0] - a[1]);
    return x
}

//Third 
let number = function(busStops){
    let peopleIn = 0;
    let peopleOut = 0;
      for (let i=0; i<busStops.length; i++) {
        peopleIn += busStops[i][0];
        peopleOut += busStops[i][1];
    }
    return peopleIn - peopleOut;
  }



  const peopleOnTheBus = (busStop) => {
      let inBus = 0;
      let offBus = 0
       for(let i = 0; i<busStop.length; i++){
        inBus += busStop[i][0];
        offBus += busStop[i][1];
        console.log('inbus', inBus);
       }
       return inBus - offBus
       
  }

  peopleOnTheBus()


