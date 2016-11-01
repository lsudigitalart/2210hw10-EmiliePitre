var sparkles = [];

function setup(){
 createCanvas(1920, 1080);
 background(0);

 for(var i = 0; i < 600; i++) {
   var x = random (-width, width/2);
   var y = random (-height, 0);
   var sizespeed = random(0, 5);
   var red = random(0, 55);
   var green = random(0, 55);
   var blue = random(0, 55);
   sparkles[i] = new Sparkle(x, y, sizespeed, red, green, blue, sizespeed);
 }

}

function draw(){

  background(10, 10, 50);

  for(var i = 0; i < sparkles.length; i++) {
    sparkles[i].move();
    sparkles[i].display();
  }

}

function Sparkle(tempX, tempY, tempSize, tempR, tempG, tempB, tempSpeed){
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;
  this.r = tempR;
  this.g = tempG;
  this.b = tempB;
  this.speed = tempSpeed;

  this.move = function(){
    this.y = this.y + (this.speed/4);
    this.x = this.x + (this.speed/4);
  };

  this.display = function(){
    noStroke();
    fill(200 + this.r, 200 + this.g, 200 + this.b);
    ellipse(this.x, this.y, this.size * 6, this.size * 1);
    ellipse(this.x, this.y, this.size * 1, this.size * 9);
    fill(200 + this.r, 200 + this.g, 200 + this.b, 50);
    ellipse(this.x, this.y, this.size * 10);
  };

}
