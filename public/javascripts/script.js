$(document).ready(function(){
  'use strict';

  var Ascend = (function(){
    function Ascend(range){
      this.range = range;
    }

    Ascend.prototype.createCanvas = function()
    {
      var canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        minX = minX + this.range;
        this.ctx.lineTo(minX,maxY);
        maxY = maxY - this.range;
        this.ctx.lineTo(maxX,maxY);
        maxX = maxX - this.range;
        this.ctx.lineTo(maxX,minY);
        minY = minY + this.range;
        this.ctx.lineTo(minX,minY);
      }

      this.ctx.stroke();
    }

    return Ascend;
  })();

  var ascend = new Ascend(5);
  console.log(10000);
  console.log('10000');
  ascend.createCanvas();
  ascend.drawLines();
  for(var itr = 1; itr < 1000; itr = itr + 5)
  {
    console.log(itr);
    var ascend = new Ascend(itr.toString());
    ascend.createCanvas();
    ascend.drawLines();
  }

});
