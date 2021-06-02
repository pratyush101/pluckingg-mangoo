class body{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        };
        this.pointB= pointB;
        this.body = Constraint.create(options);
        this.image = loadImage("boy.png");
        World.add(world, this.body);
    }

	fly(){

		this.body.bodyA = null;

	}

    launch(bodyA){
        this.body.bodyA = bodyA;
    }

	display()
	{

        image(this.image, 200, 350, 350, 300);

		if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }	
	}

    }