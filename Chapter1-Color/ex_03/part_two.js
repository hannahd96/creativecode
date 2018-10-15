
'use strict';

var segmentCount = 360;
var radius = 300;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
	// sets color to HSB and the limits of color range
  colorMode(HSB, 360, width, height);
  
  // background color
  background(360, 0, height);

  var angleStep = 360 / segmentCount;
	// beginShape() = create more complex shapes
	// here it starts recording vertices (vertex plural) 
  beginShape(TRIANGLE_FAN);
  // sets vertex coordinates
  vertex(width / 2, height / 2);

  // for loop using cos and sin
  // sin() returns sine value of a number; returns a value between -1 and 1, which represents the sine of the parameter x
  // cos() returns cosine value of a number; returns a numeric value between -1 and 1, which represents the cosine of the angle.
  for (var angle = 0; angle <= 360; angle += angleStep) {
	  // radians() converts a degree measurement (or in this case an angle measurement) to it's coresponding value in radians.
	  // radians + degrees are 2 ways of measuring the same thing; there are 360 deg in a circle and 2*PI radians in a circle.
	  // All trigonometric methods in JS require their parameters to be specified in radians.
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
	// All shapes are constructed by connecting a series of vertices; vertex() is used to specify the vertex coordinates for 
	// points, lines, triangles, quads, and polygons and is used exclusively within the beginShape() and endShape() function. 
    vertex(vx, vy);
	// fills the current drawing (path).
    fill(angle, mouseX, mouseY);
  }
	// stops recording vertices (vertex plural)
  endShape();
}
