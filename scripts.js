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
let rocket = document.getElementById("rocket");

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
let newHeightUp = parseInt(spaceShuttleHeight.innerHTML);
console.log(typeof(newHeightUp));
console.log(newHeightUp);
newHeightUp += 10000;
console.log(newHeightUp);
spaceShuttleHeight.innerHTML = newHeightUp; 

let rocketUp= parseInt(rocket.style.top);
console.log(rocketUp);
let rocketUpTen = rocketUp - 10;
console.log(rocketUpTen);
//rocket.style.top += rocketUp + 10;
rocket.style.top = rocketUpTen + 'px';
});

moveDown.addEventListener("click",function(event){
let newHeightDown = parseInt(spaceShuttleHeight.innerHTML);
newHeightDown -= 10000;
spaceShuttleHeight.innerHTML = newHeightDown;

let rocketDown = parseInt(rocket.style.top);
let rocketDownTen = rocketDown + 10;
rocket.style.top = rocketDownTen + 'px';

});

moveRight.addEventListener("click", function(event){
     let rocketRight = parseInt(rocket.style.right);
    let rocketRightTen = rocketRight - 10;
    rocket.style.right = rocketRightTen + 'px';

});

moveLeft.addEventListener("click", function(event){
let rocketLeft = parseInt(rocket.style.right);
let  rocketLeftTen = rocketLeft + 10;
rocket.style.right = rocketLeftTen + 'px';
});

};

window.addEventListener("load", init);
