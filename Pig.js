class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255
  }
  //vanishing the pigs
display(){
  console.log(this.body.speed)
  if(this.body.speed<3){
    super.display()
  }
  //making the pigs vanish gradually
  else{
      World .remove(world,this.body)
      push ()
      this.Visibility=this.Visibility-5
      tint(255,this.Visibility)
      pop ()
  }
}
}