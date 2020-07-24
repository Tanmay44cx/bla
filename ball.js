class Ball {
    constructor(x,y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(200,100,20,options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  