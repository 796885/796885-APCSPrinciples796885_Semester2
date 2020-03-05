class Ship{


  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
   this.angle=0
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
  this.heading =this.vel.heading();
fill(this.clr);
this.angle=this.angle+1;
push();
translate(this.loc.x,this.loc.y);
rotate(this.heading+1)
triangle(-5,8,5,8,0,-8);
pop();
}

}//  +++++++++++++++++++++++++++  End Ship Class
