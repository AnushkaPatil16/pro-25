class dustbin{
    constructor(x,y,w,h){

        var ops = {
            isStatic:true
        }

        this.dust = Bodies.rectangle(x,y,w,h,ops);
        this.width = w;
        this.height = h;
        World.add(world,this.dust); 
    }

    display(){
        
        push() 
        translate(this.dust.position.x,this.dust.position.y); 
        rectMode(CENTER); 
        rotate(this.dust.angle)
        stroke("black");
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop() 
    }
}