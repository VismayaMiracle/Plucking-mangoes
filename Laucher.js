class launcher{
  constructor(bodyA, pointB)
  {
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.004,
length:5


}

this.bodyA=bodyA;
this.pointB=pointB;
this.thrower = Constraint.create(options);
World.add(world,this.thrower);

}
fly(){
    this.thrower.bodyA = null;
}

display(){
    if(this.thrower.bodyA){
var pointA=this.thrower.bodyA.position;
var pointB= this.pointB;
strokeWeight(1);
stroke("black")
line(pointA.x,pointA.y,pointB.x,pointB.y+20);



    }


}


}