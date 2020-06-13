class Ball {
    constructor(x, y) {
      var options = {
           isStatic: false,
          'restitution':0.3,
          'friction':0.3,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.x = 200;
      this.y = 600;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,0,0);
      ellipse(0,0,20,20);
      pop();
    }
  };