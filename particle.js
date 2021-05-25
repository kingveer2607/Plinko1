class Particle {
    constructor(x, y,r) {
        var options = {
            restitution: 0,
            friction: 0,
            isStatic:false
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};