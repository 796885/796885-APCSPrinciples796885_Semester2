//  Natalie Hallmann
// 	Lab 9/11
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
loadBalls(1);
loadCircles(3);
loadTriangles(3);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runObjects();
}
function loadObjects(n){
  paddle= new Paddle(50,400,95,95);
  for(var i=0; i< n; i++){
    balls[i] =new Ball(random(width),random(height), random(-5,5),random(-5,5));
    circles[i]=new Circles(random(width), random(height), random (-1,1), random(-1,1), i);
    triangles[i]=new Triangles(random(width), random(height), random (-1,1), random(-1,1), i);
  }
}
function runObjects(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
    Circles[i].run();
    Triangles[i].run();

  }
}
