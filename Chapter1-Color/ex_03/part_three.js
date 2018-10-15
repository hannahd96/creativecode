'use strict';

var segmentCount = 360;
var radius = 300;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0, height);

  var angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);

  for (var angle = 0; angle <= 360; angle += angleStep) {
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }

  endShape();
}

// method where certain keys do certain things
function keyPressed() {
	// press s / S to save canvas as PNG - names it with timestamp
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // like an if else loop; each case changes degree of circle (i.e. shape of circle)
  switch (key) {
	  // if 1 is pressed, circle degrees = 360
  case '1':
    segmentCount = 360;
    break;
	// if 2 is pressed, circle degrees = 45
  case '2':
    segmentCount = 45;
    break;
  case '3':
    segmentCount = 24;
    break;
  case '4':
    segmentCount = 12;
    break;
  case '5':
    segmentCount = 6;
    break;
  }
}
