class ground{
constructor(x, y, width, height) {
    var options = {
        isStatic:true,
        'friction':1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var rock =this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(rock.x, rock.y, this.width, this.height);
    pop();
  }
};
