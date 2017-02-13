function setup() {
 createCanvas(1000, 1000); 
}

function draw() {
  background (0);  
  //for loop
  for (var i = 0; i < 10000; i += 1){
    //this code will execute every time the for loop loops
    noFill();
    stroke(random(255), random (255), random(255));
    ellipse (random(width), random(height), 20, 20);
  }
  //noLoop ();
}




  
