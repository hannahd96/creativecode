'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  // don't loop
  noLoop();
  // black background
  background(0);
  // Sets the seed value for random() but returns 
  // the same pseudo-random numbers each time the software is run.
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  // for loop : loops through a block of code a number of times
  // uses colorCount as the condition in the for loop
  for (var i = 0; i < colorCount; i++) {
    // if the modulo of i / 2 is equal to 0, then..
    if (i % 2 == 0) {
      // set these attributes to these values
      hueValues[i] = random(180);
      saturationValues[i] = random(50);
      brightnessValues[i] = 100;
      // else set these attributes to these values
    } else {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];
    // nested for loop
    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          // push is a function that saves the current 
          // drawing style settings and transformations
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    // for loop - executes code block a number of times
    // ii = 0 : executed (once) before the execution of code block
    // ii < parts.length : defines the condition for executing the code block
    // ii++ : executed (every time) after the code block has been executed
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];
      // if the random function returns a number less than 0.45 then..
      if (random() < 0.45) {
        // returns the parts array
        var w = map(parts[ii], 0, sumPartsTotal, 0, width);
        var h = rowHeight * 1.5
        // map() re-maps a number from one range to another
        var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var px2 = px1 + w;
        var py1 = rowHeight * i;
        var py2 = py1 + h;
        // index is equal to the modulo of counter / colorCount
        var index = counter % colorCount;
        // color = HSB and alpha 
        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        // create complementary color
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
        
      }
      // increase counter
      counter++;
    }
  }
}