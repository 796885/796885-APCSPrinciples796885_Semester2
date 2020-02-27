class Paddle {
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w=w;
    this.h= h;
    this.clr = color(random(255), random(255), random(255));
    this.w=25
  }//constructor

  run(){
    this.update();
    this.render();
}//run

  update(){
var mouseLoc= createVector (50,mouseY);
this.loc = p5.Vector.lerp(this.loc,mouseLoc, 0.09);

}//update

  render(){

    fill(this.clr);
    rect(this.loc.x, this.loc.y,this.w,this.h);
  }//render



}//class
