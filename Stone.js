class stone{
    constructor(x,y,r){
var options={

        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2

}
      this.x=x;
      this.y=y;
      this.r=r
      this.image = loadImage("images/stone.png")
      this.body=Bodies.circle(this.x,this.y,this.r,options)
      World.add(world, this.body);

    }
display()
{
 var paperpos=this.body.position;

imageMode(CENTER)
image(this.image,paperpos.x,paperpos.y+10,this.r,this.r)

}


}