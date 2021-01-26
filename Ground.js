class Ground
{
constructor(x,y,width,height){
    var Option={isStatic:true}
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,Option);
    World.add(world,this.body)
}
display(){
    var pose=this.body.position;
    rectMode(CENTER);
    rect(pose.x,pose.y,this.width,this.height);
}
}