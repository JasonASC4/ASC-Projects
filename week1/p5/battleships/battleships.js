//2-D array

var grid = [[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
[0, 1, 2, 3, 4, 5, 6, 7],
]

function setup() {
    createCanvas(480, 480);
    background('blue');
    fill("white");
    strokeWeight(8);
    rect(480,480,480,480);

}

function draw() {
    rectMode(CORNER);
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            rect(x * 60, y * 60, 60, 60);

        }
    }

}
