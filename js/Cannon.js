class Cannon {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.angle)
      fill("#676eba");
      rectMode(CENTER);
      rect(0, -0, this.width, this.height);
      pop();
      arc(this.x,this.y+60,150,180,PI,TWO_PI);
      //nofill();
    }
  }
  