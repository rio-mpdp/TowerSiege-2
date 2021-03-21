class Thread{
    constructor(a,b){
      this.thread=Matter.Constraint.create({
          bodyA:a,
          pointB:b,
          stiffness:0.2,
          length:20
          })
          Matter.World.add(myworld,this.thread)
    } 
    display(){
        if(this.thread.bodyA!=null){ 
    var a=this.thread.bodyA.position
    var b=this.thread.pointB
   
    line(a.x,a.y,b.x,b.y) 
   
  }  
    }
    fly(){
    this.thread.bodyA=null  
  
    }
    attach(b){
  this.thread.bodyA=b
    }
  }