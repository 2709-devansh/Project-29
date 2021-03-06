class box{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            frictionAir: 0.00004,
            friction: 0.2,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        rect(0,0,this.width,this.height);
        pop();
    }
}