var shape;
var morph = 0;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  colorMode(HSB)
  background(270, 40, 50);
  noStroke();
  if (shape === 'flexor') {
    flexor();
  } else if (shape === 'extensor') {
    extensor();
  }
  fill(180, 50, 75);
  triangle(200 - morph, 150, 250, 240, 150, 240);
  triangle(200 + morph, 150, 249, 240, 148.4, 240 - morph * 1.76);
  fill(237, 34, 93);
  noStroke();
  beginShape();
  vertex(200, 205);
  vertex(235+morph/2, 170);
  vertex(200, 135+morph);
  vertex(165-morph/2, 170);
  endShape();
}

function mouseWheel(event) {
  print(event.delta);
  morph += event.delta;
  //this mousewheel event is to shift the triangle into a square
  if (morph >= 0) {
    morph = morph;
  } else {
    morph = 0;
  }
  if (morph <= 51) {
    morph = morph;
  } else {
    morph = 51;
  //The ifs are to restrain how far the variable can grow
  //so it doesnt destroy the transformation
  //from triangle to square and back
  }
}

function mouseClicked() {
	//this mousclick function is to have a changing background
	//shape that can correspond with the tranformation
  if (shape === 'flexor') {
    shape = 'extensor';
  } else {
    shape = 'flexor';
  }
}

function flexor() {
  fill(218,32,73);
  ellipse(200, 200, 200, 200);
}

function extensor() {
  rectMode(CENTER)
  fill(0);
  square(200, 200, 200, 20);
}