$(document).ready(function(){
  'use strict';

  var Ascend = (function(){
    function Ascend(){
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");

      var itr = 1;

      var that = this;
      function animationLoop () {           
        setTimeout(function () {    
          that.createCanvas(itr.toString());
          that.drawLines();
          itr = itr + 10;               
          if (itr < 1000) {
            animationLoop();  
          }
          setTimeout();
        }, 25)
      }

      animationLoop(); 

    }

    Ascend.prototype.createCanvas = function(range)
    {
      this.range = range;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle="#000";
      this.ctx.strokeStyle="#fff";
      this.ctx.fillRect(0,0,1000,1000);
    }

    Ascend.prototype.drawLines = function()
    {
      var minX = 0;
      var maxX = 1000;
      var minY = 0;
      var maxY = 1000;

      this.ctx.moveTo(0,this.range);

      for(var i = this.range; i <= 1000; i = i + this.range)
      {
        minX = minX + parseInt(this.range,10);
        this.ctx.lineTo(minX,maxY);
        maxY = maxY - parseInt(this.range,10);
        this.ctx.lineTo(maxX,maxY);
        maxX = maxX - parseInt(this.range,10);
        this.ctx.lineTo(maxX,minY);
        minY = minY + parseInt(this.range,10);
        this.ctx.lineTo(0,minY);
      }

      this.ctx.stroke();
    }

    return Ascend;
  })();

  var ascend = new Ascend();

});
