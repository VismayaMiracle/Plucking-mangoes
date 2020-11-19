class tree{
   constructor(x,y)
   {
this.x=x;
this.y=y;
this.BBwidth=500; //Bottom body width
this.SBheight=400; // Side wall
this.angle=0;  // height of bottom body and width of side walls


this.image = loadImage("images/tree.png")


this.BB=Bodies.rectangle(this.x,this.y,this.BBwidth/16,this.Bthick,{isStatic:true})

World.add(world,this.BB)

   }
   display(){

      var posBottom=this.BB.position;

      fill("red")
      rectMode(CENTER)
      rect(posBottom.x, posBottom.y,this.BBwidth/16 , this.Bthick)
      


      imageMode(CENTER)
      image(this.image,posBottom.x,posBottom.y-80,this.BBwidth , this.SBheight*1.5)
   }


}