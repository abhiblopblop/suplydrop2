class Log extends BaseClass{
  constructor(x,y,height,angle,isStatic){
    super(x,y,20,height,angle,isStatic);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    Matter.Body.setStatic(this.body, isStatic)
  }
}