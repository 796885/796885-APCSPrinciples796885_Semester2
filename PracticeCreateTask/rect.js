class Rect{
constructor(x, y, dx, dy){
 this.loc = createVector(x, y);
 this.vel = createVector(dx, dy);
 this.acc = createVector(0,0);
 this.clr = color(random(255), random(255), random(255));
}

run(){
  this.checkedges();
  this.update();
  this.render();
}


checkedges(){
  if(this.loc.x < 0)this.loc.x=width;
  if(this.loc.x > width)this.loc.x=0;
  if(this.loc.y < 0)this.loc.x=0;
  if(this.loc.y > height)this.loc.x=height;
}

update(){
var disttoMainBall;
disttoMainBall=this.loc.dist(mainBall.loc);
if(disttoMainBall<250){
this.acc=p5.Vector.sub(mainBall.loc,this.loc);
this.acc.normalize();
this.acc.mult(.1);
}
if(disttoMainBall<150){
this.acc=p5.Vector.sub(this.loc,mainBall.loc);
this.acc.normalize();
this.acc.mult(.1);
}
this.vel.limit(5);
this.vel.add(this.acc);
this.loc.add(this.vel)
}

render(){
  fill(this.clr);
  translate(this.loc.x,this.loc.y);
  rect(30, 20, 55, 55, 20, 15, 10, 5);

}

}//  +++++++++++++++++++++++++++  End rect Class
