class Box extends Parent{
    constructor(x,y){
 super(x,y,50,50)
       this.img=loadImage("b.png")
       this.t=255
    }
    display(){  

    if(this.body.speed<5){
      super.display()
  } else {
      push()
    Matter.World.remove(myworld,this.body)  
    tint(255,this.t)
    image(this.img,this.body.position.x,this.body.position.y,60,60)
    this.t-=10
    pop()
  }

  
}}



    
    
    