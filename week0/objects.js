var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

function Superhero(realName, power, sidekick, race, gender, hideout, nemesis, universe){
    this.realName = realName;
    this.power = power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis;
    this.universe = universe;

    this.talk = function(){
         console.log("Hi my name is " +  this.realName);
    }

}

var superman = new Superhero('Clark Kent', 'Heat vision', false, 
'Kryptonian', 'Male', 'Metropolis', 
'Lex Luthor', 'DC');

function Pizza(sauce, cheese, toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;

} 

var pizza = new Pizza('Tomato', 'mozerella', ['pineapples', 'ham', 'bacon'], 'XXL');
