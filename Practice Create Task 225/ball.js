class Ball {
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255));
    // this.w=25
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
    this.Bounce();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x= -this.vel.x
    }
    if(this.loc.x> width){
      this.vel.x= -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y= -this.vel.y
    }
    if(this.loc.y> height){
      this.vel.y= -this.vel.y
    }
  }
  update(){
    // this.vel.loc(this.acc);
    this.loc.add(this.vel);
  }

  render(){

    fill(this.clr);
    ellipse(this.loc.x, this.loc.y,12,12);
  }


  IsColliding(){
    if(this.loc.x > paddle.loc.x &&
      this.loc.x < paddle.loc.x + paddle.w &&
      this.loc.y > paddle.loc.y &&
      this.loc.y < paddle.loc.y + paddle.h){
        return true;
      } else{
        return false;
      }
    }


    Bounce(){
      if (this.IsColliding()=== true){
        this.vel.x = -this.vel.x;
        this.vel.y= - this.vel.y;
      }
    }


}//  +++++++++++++++++++++++++++++++++++  End Ball Class
