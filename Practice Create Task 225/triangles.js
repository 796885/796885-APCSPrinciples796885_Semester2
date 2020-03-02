class Triangles{
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
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y,12,12);
  }
  }
