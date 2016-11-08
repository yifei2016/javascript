function Circle(centerX, centerY, radius){
	this.centerX = centerX; 
	this.centerY = centerY; 
	this.radius = radius; 
	this.area = function(){
		return 	Math.PI * this.radius * this.radius;
	};
	this.move = function(dx,dy){
		this.centerX = 	this.centerX + dx;
		this.centerY = 	this.centerY + dy;
	};
	this.points = function(){
		return [{x:this.centerX, y:this.centerY}];
	};
	this.distanceTo = function(otherCircle){
		let x1 = this.centerX;
		let x2 = otherCircle.centerX;
		let y1 = this.centerY;
		let y2 = otherCircle.centerY;
		let d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
		let distance = d - this.radius - otherCircle.radius;
		if(distance <= 0){
			return 0;
		}
		return distance;
	};
}

let circle = new Circle(2.0,1.0,4.0);
let otherCircle = new Circle(40,50,3);
//circle.distanceTo(otherCircle);

function Rectangle(x1, y1, x2, y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.area = function(){
		let area = (this.y2 - this.y1) * (this.x2 - this.x1) / 2;
		return area;
	};
	this.move = function(dx,dy){
		this.x1 = this.x1 + dx;
		this.y1 = this.y1 + dy;
		this.x2 = this.x2 + dx;
		this.y2 = this.y2 + dy;
	};
	this.points = function(){
		let points = [
			{x: this.x1, y: this.y1},
			{x: this.x2, y: this.y2},
			{x: this.x2, y: this.y1},
			{x: this.x1, y: this.y2}
		];
		return points;
	};
	this.distanceTo = function(otherRectangle){
		if(otherRectangle.x1 <= this.x2 ){
			return 0;
		}
		let mx1 = (this.x2 - this.x1)/2 + this.x1;
		let my1 = (this.y2 - this.y1)/2 + this.y2;
		let mx2 = (otherRectangle.x2 - otherRectangle.x1)/2 + otherRectangle.x1;
		let my2 = (otherRectangle.y2 - otherRectangle.y1)/2 + otherRectangle.y2;
		let distance = Math.sqrt((mx2-mx1)*(mx2-mx1) + (my2-my1)*(my2-my1));
	
		return distance;
	}
}

let rectangle =  new Rectangle(2,3,5,6);
let otherRectangle = new Rectangle(30,40,70,80);
rectangle.area();
rectangle.distanceTo(otherRectangle);

otherRectangle.distanceTo(rectangle);


