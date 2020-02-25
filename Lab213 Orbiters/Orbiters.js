class Orbiters{
  constructor(x, y, dx, dy, id){
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
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height -2;
    }

  }
  update(){
    var distToBoid;
    if(this.id >= 0){
     distToBoid = this.loc.dist(mainBall.loc);
     if(distToBoid < 250){
       //add attraction
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);
     }
     if(distToBoid < 150){
       this.acc = p5.Vector.sub(this.loc,mainBall.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }
    }
     this.vel.add(this.acc);
   this.loc.add(this.vel);
   this.loc.limit(5);


this.acc=p5.Vector.sub(mainball.loc,this.loc);
this.acc.normalize();
this.acc.mult(0.5);

  }

  render(){
    fill(this.clr);
<<<<<<< HEAD
    if (this.id == -1){
      ellipse (this.loc.x, this.loc.y, 40, 40);
    }else {
    ellipse(this.loc.x, this.loc.y, 15, 15);
  }
=======
    ellipse(this.loc.x, this.loc.y,11,11);

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
>>>>>>> f9a4314af59dc43886bfd2124d1337999348b816
  }
}//  +++++++++++++++++++++++++++++++++++  End Orbiters Class
