
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r=map(mouseX,0,1200,0,255)
  // change the value of Green based on the mouse movement about the X axis
  g=map(mouseX,10,600,50,100)
  // change the value of Blue based on the mouse movement about the X axis
  b=map(mouseX,50,470,40,200)
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
    background(r,g,b)
  // Create an ellipse that will move around with you mouse about the X axis.
  fill("white")
  ellipse(mouseX,200,25,25);
  // Remember to fill the ellipse with white paint before creating the ellipse.
}