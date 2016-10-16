/*global console, Modernizr*/

(function () {
  "use strict";
  var Debugger = function () {};

  Debugger.log = function (message) {
    try {
      console.log(message);
    } catch (exception) {
      return;
    }
  };
  
  function canvasSupport() {
    return Modernizr.canvas;
  }
  
  function canvasApp() {
    if (!canvasSupport()) {
      return;
    }

    var canvasOne,
      context,
      helloWorldImage;

    canvasOne = document.getElementById("canvas-one");
    context = canvasOne.getContext("2d");
    
    Debugger.log("Drawing canvas on: #canvas-one");
    
    function drawScreen() {
      // Draw the background
      context.fillStyle = "#ffffaa";
      context.fillRect(0, 0, 500, 300);
      
      // Generate the text
      context.fillStyle = "#000000";
      context.font = "20px Sans-Serif";
      context.textBaseline = "top";
      context.fillText("Hello World!", 195, 80);
      
    }
    
    drawScreen();

  }
  
  function eventWindowLoaded() {
    canvasApp();
  }

  window.addEventListener("load", eventWindowLoaded, false);
}());