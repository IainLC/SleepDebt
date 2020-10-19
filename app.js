const getSleepHours = (day) => {
    switch (day) {
        case "monday": 
      return 8;
      break;
        case "tuesday": 
      return 8;
      break;
        case "wednesday": 
      return 8;
      break;
        case "thursday": 
      return 5;
      break;
        case "friday": 
      return 8;
      break;
        case "saturday": 
      return 8;
      break;
          case "sunday": 
      return 8;
      break;
    }
    };
    
    console.log(getSleepHours("sunday".toLowerCase()));
    
    //this is an implicit return arrow function. not the lack of keywords and brackets.
    const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') +
    getSleepHours('friday') + getSleepHours('saturday') +
    getSleepHours('sunday');
    
    //This is essentially the longform way of writng the function
    // function sleepCalc(){
    // return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') +
    // getSleepHours('friday') + getSleepHours('saturday') +
    // getSleepHours('sunday');
    // };
    
    console.log(getActualSleepHours());
    // console.log(sleepCalc());
    
    const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;  
    };
    
    console.log(getIdealSleepHours());
    
    const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      return console.log("well done! you slept " +actualSleepHours+ " hours. The perfect amount of sleep");
    } if (actualSleepHours > idealSleepHours) {
      return console.log("wow you slept "+ actualSleepHours+ "hours! You overslept by " + (actualSleepHours - idealSleepHours) + " Hours. lazy bastard.");
      } if (actualSleepHours < idealSleepHours){
        return console.log("Jeez man only "+ actualSleepHours+ " hours not enough sleep by " +(idealSleepHours - actualSleepHours) + " hours. Bro less Youtube.");
      } else {
        return console.log("something is went wrong.")
      }
    };
    
    calculateSleepDebt();
    
    