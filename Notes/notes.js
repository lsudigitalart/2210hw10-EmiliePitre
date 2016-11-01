var x = [];

var r;

function setup(){
  createCanvas(320, 240);

  for(var i = 0; i < 3000; i++){
    x[i] = random(-500, 500);
  }

  r = random(0, 5);

  console.log(x);
}

function draw(){
  background(0);

  for(var i = 0; i < x.length; i++){
    x[i]++;
    var y = i * r;
    ellipse(x[i], y, 10)
  }

}
