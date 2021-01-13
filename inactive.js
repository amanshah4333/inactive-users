const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(lastActivity){
    const inactiveFirstStage();
    const inactiveSecondStage();
    const inactiveThirdStage();
    const latestTime = new Date().getTime();
    if ( latestTime -  lastActivity < 120000){
        return inactiveFirstStage;}
        else if (latestTime -  lastActivity < 240000){
            return inactiveSecondStage;}
             else if (latestTime -  lastActivity < 360000){
            return inactiveThirdStage;}
    
}, 1000);
