/*global console, Modernizr*/

(function () {
  "use strict";
  var Debugger = function () {};
  
  // Basic debugger
  Debugger.log = function (message) {
    try {
      console.log(message);
    } catch (exception) {
      return;
    }
  };
  
  function canvasSupport() {
    return Modernizr.canvas; // Determines if the user-agent is able to use html5 canvas
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
    
    Debugger.log("Drawing on canvas: #canvas-one");
    
    function drawScreen() {
      // Draw the background
      context.fillStyle = "#ffffaa"; // Fill color for the background
      context.fillRect(0, 0, 500, 300); // Dimensions for the rectangle (as well as starting coordinates)
      
      Debugger.log("Created rectangle background for: #canvas-one");
      
      // Generate the text
      context.fillStyle = "#000000";
      context.font = "20px Sans-Serif";
      context.textBaseline = "top";
      context.fillText("Hello World!", 195, 80); // Positioning of the text element
      
      Debugger.log("Generated text for: #canvas-one");
      
    }
    
    drawScreen();

  }
  
  function eventWindowLoaded() {
    Debugger.log("Loaded page");
    canvasApp();
  }
  
  window.addEventListener("load", eventWindowLoaded, false);
  
}());