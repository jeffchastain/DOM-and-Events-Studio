// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
const moveUp = document.getElementById("up");
const moveDown = document.getElementById("down");
const moveRight = document.getElementById("right");
const moveLeft = document.getElementById("left");
const takeOff = document.getElementById("takeoff");
const landing = document.getElementById("landing");
const missionAbort = document.getElementById("missionAbort");
let flightStatus = document.getElementById("flightStatus");
let flightDisplay = document.getElementById("flightDisplay");
let shuttleBackground = document.getElementById("shuttleBackground");
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

takeOff.addEventListener("click", function(event){
    if (window.confirm("Confirm the shuttle is ready for takoff.")) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = "10000";
    }
});

landing.addEventListener("click", function(event){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = "0";
});

missionAbort.addEventListener("click", function(event) {
if (window.confirm("Confirm that you want to abort the mission.")) {
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = "0";
}
});

moveUp.addEventListener("click", function(event) {
let newHeight = parseInt(spaceShuttleHeight);
console.log(typeof(newHeight));
console.log(newHeight);
newHeight += 10000;
console.log(newHeight);
spaceShuttleHeight.innerHTML = newHeight;
});

moveDown.addEventListener("click",function(event){
parseInt(spaceShuttleHeight);
spaceShuttleHeight.innerHTML += 10000;
});

moveRight.addEventListener("click", function(event){

});

moveLeft.addEventListener("click", function(event){

});

};

window.addEventListener("load", init);
