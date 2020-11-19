class mango{
  constructor(x,y,r){
 var options={

        isStatic:true,
        restitution:0,
        friction:1

 }

 this.x=x;
 this.y=y;
 this.r=r/2;

 this.body=Bodies.circle(this.x,this.y,this.r/2,options)
 this.image = loadImage("images/mango.png")
 World.add(world,this.body)

  }
display()
{

var paperpos=this.body.position;
imageMode(CENTER)
image(this.image,paperpos.x,paperpos.y+40,this.r*5,this.r*5);

}

}