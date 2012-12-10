$(document).ready(function(){
  'use strict';

  var Flower = (function(){
    function Flower(range){
      this.range = range;

      this.createCanvas();
      this.drawLines();
    }

    Flower.prototype.createCanvas = function()
    {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle="#000";
    }

    Flower.prototype.drawLines = function()
    {
      var coords = [
       [500 ,500],
       [500 ,400], 
       [500 ,600], 
       [412 ,450], 
       [588, 450],
       [412, 550],
       [588, 550]
      ];

      var that = this;
      coords.forEach(function(el, indx){
        that.ctx.beginPath();
        that.ctx.arc(el[0], el[1], that.range, 0, Math.PI*2, true); 
        that.ctx.closePath();
        that.ctx.stroke();
      });

    }

    return Flower;
  })();

  new Flower(100);
  var i = 0;

  function animationLoop () {           
    setTimeout(function () {    
      new Flower(i);
      i = i + 5;               
      if (i < 100) {
        animationLoop();  
      }
      setTimeout();
    }, 50)
  }

  animationLoop(); 

  // Available under MIT License http://opensource.org/licenses/MIT
});
