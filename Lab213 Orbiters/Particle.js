class Boid{
  constructor (x, y, dx, dy, clr){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 1);
    this.clr = color(random(205), random(155), random(153));
  } //end Boids constructor


  run(){
    this.render();
    this.checkEdges();
    this.update();
  } //end run function

  update(){
      this.vel.limit(0);
      this.loc.add(this.vel);
      this.vel.add(this.acc);
  }//end update

  checkEdges(){ // boids on screen
    if(this.loc.x<0){
      this.loc.x=width;
    }
    if(this.loc.x>width){
      this.loc.x=0;
    }
    if(this.loc.y<0){
       this.loc.y=height;
    }
    if(this.loc.y>height){
       this.loc.y=0;
    }
  }//end checkEdges
//  Either warp or bounce

  render(){
    fill(255)
    ellipse(this.loc.x, this.loc.y, 50,50)
    for (var i=boids.length-1; i >0; i--){ // traverse array
      if(this.loc.dist(boids[i].loc)<200){ //checks boids
      stroke(this.clr); //color
      line(this.loc.x, this.loc.y, boids[i].loc.x,boids[i].loc.y ); //draws line between two boids
    }
  }

  }//end render
//This method will draw a line between its location and the location of any other boid object within 200px.
}//++++++++++++++++++++++++++++++++++++End Boid Class +++++++++++++++++++++++++++++++++++
