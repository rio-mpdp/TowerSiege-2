class Parent{
    constructor(x,y,w,h){
        this.w=w
        this.h=h
    this.body=Matter.Bodies.rectangle(x,y,this.w,this.h)
    Matter.World.add(myworld,this.body)
    this.img=loadImage("blue.jpg")
    }
    display(){
    push()
    imageMode(CENTER) 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.img,0,0,this.w,this.h) 
    pop()
    }
    }