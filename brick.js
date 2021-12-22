class Brick{
    constructor(x,y,w,h,c){
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
}