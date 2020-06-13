class Rect {
    constructor(x, y, width, height) {
      var options = {
           isStatic: true,
          'restitution':0.3,
          'friction':0.3,
          'density':1.2
      }
      this.body = Matter.Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x,pos.y,this.width,this.height);
    }
  };