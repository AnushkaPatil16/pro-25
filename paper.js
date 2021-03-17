class PAPER{
    constructor(x,y){

        var options ={
            restitution : 0.3,
            friction :0.9,
            density : 1.2

        }

        this.paper = Bodies.circle(x,y,40,options);
        this.R = 40;
        
        this.image = loadImage("paper.png");
        World.add(world,this.paper); 
        
    }

    display(){
        var pos = this.paper.position
        push() 
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.R,this.R)
        pop() 
    }
}