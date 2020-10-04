var paper;
class Paper {
	constructor(x,y,radius) {
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
		this.radius = radius;
		this.body = Matter.Bodies.circle(x, y, radius, options);
		World.add(world,this.body);
		//paper.loadImage(paperImage);
	}
	display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
	}
}