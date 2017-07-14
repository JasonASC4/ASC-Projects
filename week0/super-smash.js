var prompt = require('prompt-sync')();
var mashArray = ["omega stage", "dream land", "pokemon stadium", "congo jungle"];
var firstQuestion = [1,2];
var secondQuestion = ["Mario", "Sonic"];

function roll(n){
    var roll = Math.floor(Math.random() * n);
    return roll;
}

function askuser(){
    var times = prompt("How many times will you strike?");
    var enemy = prompt("Who will you choose to fight?");
    firstQuestion.push(times)
    secondQuestion.push(enemy)
    console.log("I will strike " + enemy + times + " time(s).");
}

askuser();

function answer(){
    var stage = [mashArray()]
answer();