var radius;

var xPos;

var slider;

function setup(){
  createCanvas(500, 500);
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);
  
}


 function draw(){
  background(0);
  
 
  
  //circle code
  var amplitude = 50;
  var speed = .0010;
  var baseline = 150;
  

  
  fill(slider.value(), 255, 255, 127);
  
  
  radius = amplitude * sin( speed * millis() ) + baseline;
  
  //fill(255, 0, 0);
  ellipse(width/2, height/2, radius * 2, radius * 2);
  
  
   //fill(255);
  ellipse(width/2, height/2, 10, 10);
  
  
  push();
  
  stroke(255);
  strokeWeight(5);
  
  
  pop();
  
  
  
  
  
}