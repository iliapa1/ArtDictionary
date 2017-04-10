var radius = 5;
var white;
var black;
var green;
var yellow;
var red;
var pink;
var orange;
var blue;
var purple;
var cyan;
var grey;
var brown;
var charteuse;


// setup screen and colors
function setup() {
    var html_can = document.getElementById('canvas');
    var canvas = createCanvas(1170, 850);
    canvas.parent(html_can);
    canvas.background(255,255,255);
    white = color(255,255,255);
    black = color(0,0,0);
    green = color(50,205,50);
    yellow = color(255,255,0);
    red = color(255,0,0);
    pink = color(255,20,147);
    orange = color(255,69,0);
    blue = color(0,0,255);
    purple = color(160,32,240);
    cyan = color(0,255,255);
    grey = color(128,128,128);
    brown = color(210,105,30);
    charteuse = color(127,255,0);
    stroke(black);


}
// draw function
function draw()
{
    update_size();

    if(mouseIsPressed && mouseX > 1) {
        strokeWeight(radius);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }


}


// function for changing bruh size
function update_size() {
    radius = document.getElementById('slider').value;
}


// function for clearing canvas
function clear1() {
    background(255,255,255);
}


// function for saving canvas as image
function save_canvas() {
    word = document.getElementById("input1").value;
    saveCanvas(canvas, word, "png");
}


// function for changing colors of brush
function update_color(a) {


    if(a == 'black') {
        stroke(black)
    }
    else if(a == 'white') {
        stroke(white)
        console.log(color);
    }
    else if(a == 'green') {
        stroke(green)
        console.log(green);
    }
    else if(a == 'yellow') {
        stroke(yellow)
        console.log(color);
    }
    else if(a == 'pink') {
        stroke(pink)
        console.log(color);
    }
    else if(a == 'orange') {
        stroke(orange)
        console.log(color);
    }
    else if(a == 'blue') {
        stroke(blue)
        console.log(color);
    }
    else if(a == 'red') {
        stroke(red)
        console.log(color);
    }
    else if(a == 'purple') {
        stroke(purple)
        console.log(color);
    }
    else if(a == 'cyan') {
        stroke(cyan)
        console.log(color);
    }
    else if(a == 'grey') {
        stroke(grey)
        console.log(color);
    }
    else if(a == 'brown') {
        stroke(brown)
        console.log(color);
    }
    else if(a == 'charteuse') {
        stroke(charteuse)
        console.log(color);
    }


}
