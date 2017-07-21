var Mewtwo = {
    "name": "Mewtwo",
    'type': "psychic",
    "HP": 106,
    "def": 90,
    "atk": 110,
    "legend": true
};

var Electabuzz = {
    "name": "Electabuzz",
    'type': "electric",
    "HP": 65,
    "def": 57,
    "atk": 83,
    "legend": false
};

var Magmar = {
    "name": "Magmar",
    'type': "Fire",
    "HP": 106,
    "def": 90,
    "atk": 110,
    "legend": true
};

var Swampert = {
    "name": "Swampert",
    'type': "Water",
    "HP": 100,
    "def": 90,
    "atk": 110,
    "legend": false
};

var Celebi = {
    "name": "Celebi",
    'type': "Physchic, Grass",
    "HP": 100,
    "def": 100,
    "atk": 100,
    "legend": true
};

var Rayquaza = {
    "name": "Rayquaza",
    'type': "dragon",
    "HP": 105,
    "def": 90,
    "atk": 150,
    "legend": true
};

var pokemons = [Mewtwo, Electabuzz, Magmar, Swampert, Celebi, Rayquaza];

function setup() {
    createCanvas(500, 500);
    background('#7a7a7a');
}

function draw() {
    fill('#c7c7c7');
    ellipse(width - 400, height - 130, 150, 50); //shadow
    noFill();
    ellipse(width - 400, height - 185, 125, 125); //pokemon
    fill('#c7c7c7');
    ellipse(width - 100, height - 325, 150, 50); //shadow
    noFill();
    ellipse(width - 100, height - 380, 125, 125); //pokemon

    fill('#3cdc18');
    rect(10, 55, 250, 45); //hp top

    fill('#3cdc18');
    rect(170, 270, 250, 45); //hp bottom

    fill('#e6e6e6');
    rect(width - width, height - 90, 500, 500); // choices rec

    fill('black');
    textSize(32);
    text("Celebi", 15, 45); //Poke Name Top

    fill('black');
    textSize(32);
    text("Mewtwo", 180, 260); // PokeName Bottom

    fill('black');
    textSize(18);
    text("HP : " + (Celebi.HP), 265, 85); // hp bottom

    fill('black');
    textSize(18);
    text("HP : " + Mewtwo.HP, 425, 300); // hp bottom

}
var Celebiatk = [20, 25, 10, 30];
var Mewtwoatk = [30, 25, 15, 35];

function mouseClicked(Celebiatk) {
    Math.floor(Math.random() * Celebiatk);
    Mewtwo.HP = Mewtwo.HP - Celebiatk;
}

function mouseClicked(Mewtwoatk) {
    Math.floor(Math.random() * Mewtwoatk);
    Celebi.HP = Celebi.HP - Mewtwoatk;
}