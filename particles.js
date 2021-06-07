class Particles{
	constructor(x,y,r){
		var options={
			'restitution':0,
			'friction':5,
			'density':0.1,
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display(){
		var pos=this.body.position;		
		push()
		translate(pos.x, pos.y);
		// rectMode(CENTER)
		ellipse(0,0,this.r, this.r);
		pop()
	}

}