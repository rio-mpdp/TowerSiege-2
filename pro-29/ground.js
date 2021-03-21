class Ground{
constructor(x,y,w,h){

this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true})
Matter.World.add(myworld,this.body)
this.w=w
this.h=h
}
display(){
    push()
rectMode(CENTER) 
fill("brown")
rect(this.body.position.x,this.body.position.y,this.w,this.h) 
pop()
}
}