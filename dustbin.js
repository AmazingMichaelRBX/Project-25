class dustbin {
constructor(x,y,width,height){
    var options ={
        isStatic:true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.body);
}
display(){
    var dustbinpos = this.body.position
    rectMode(CENTER)
    fill("purple")
    image(this.image,1200,550,this.width,this.height)
    //rect(dustbinpos.x,dustbinpos.y,this.width,this.height)
    
}
}