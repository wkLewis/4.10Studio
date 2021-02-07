// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";


// Write code to generate the LC04 report here:
console.log("------------------------------\n> LC04 - LAUNCH CHECKLIST\n------------------------------");
console.log("Date: " + date);
console.log("Time: " + time + "\n\n------------------------------");
console.log("> ASTRONAUT INFO\n------------------------------\n");
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus + "\n\n------------------------------");
console.log("> FUEL DATA\n------------------------------");
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel + "\n\n------------------------------");
console.log("> MASS DATA\n------------------------------\n")
console.log("* Crew mass: " + crewMassKg + " kg\n* Fuel mass: " + fuelMassKg + " kg\n* Shuttle mass: " + shuttleMassKg + " kg\n* Total mass: " + totalMassKg + " kg\n\n------------------------------");
console.log("> FLIGHT PLAN\n------------------------------");
console.log("* weather: " + weatherStatus + "\n\n------------------------------");
console.log("> OVERALL STATUS\n------------------------------");
console.log("* Clear for takeoff: YES");



// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.