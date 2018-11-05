'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20);
      brightnessValues[i] = 100;
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
    // creates parts array
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        // returns random number from 2 to 20
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        // for loop
        for (var iii = 0; iii < fragments; iii++) {
          // push() method adds new items to the end of an array, and returns the new length
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
      // if the random number is less than 0.45, then..
      if (random() < 0.45) {
        // map() re-maps a number from one range to another
        var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var y = rowHeight * i;
        var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
        var h = rowHeight * 1.5;

        var index = counter % colorCount;
        var col1 = color(0);
        // color uses HSB (Hue, Saturation, Brightness) followed by alpha (opacity / transparency)
        var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
      }

      counter++;
    }
  }
}
