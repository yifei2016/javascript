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
	this.boundingBox = function(){
		let x1 = this.centerX - this.radius;
		let y1 = this.centerY + this.radius;
		let x2 = this.centerX + this.radius;
		let y2 = this.centerY - this.radius;
		let rectangle = new Rectangle(x1,y1,x2,y2);
		return rectangle;
	};
	this.toString = function(){
		return "Jag är en cirkel med mittpunkt (" + this.centerX + "," + this.centerY + ") och radie" + this.radius + ".";
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
		let area = (this.y2 - this.y1) * (this.x2 - this.x1);
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
		
		if(otherRectangle.x1 < this.x2 && otherRectangle.x2 > this.x1 &&
		otherRectangle.y1 < this.y2 && otherRectangle.y2 > this.y1){
			return 0;
		}
		let mx1 = 0.5 * (this.x2 + this.x1) ;
		let my1 = 0.5 * (this.y2 + this.y1) ;
		let mx2 = 0.5 * (otherRectangle.x2 + otherRectangle.x1) ;
		let my2 = 0.5 * (otherRectangle.y2 + otherRectangle.y1) ;
		let distance = Math.sqrt((mx2-mx1)*(mx2-mx1) + (my2-my1)*(my2-my1));
	
		return distance;
	};
}

function Triangle(x1, y1, x2, y2, x3, y3){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;
	this.area = function(){
		let area = (1/2)*(this.x1 * this.y2 + this.x2 * this.y3 + this.x3*this.y1-this.x1*this.y3-this.x2*this.y1-this.x3*this.y2);
		return area;
	};
	this.move = function(dx, dy){
		this.x1 = this.x1 + dx;
		this.y1 = this.y1 + dy;
		this.x2 = this.x2 + dx;
		this.y2 = this.y2 + dy;
		this.x3 = this.x3 + dx;
		this.y3 = this.y3 + dy;
	};
	this.points = function(){
		let points = [{x: this.x1, y:this.y1},{x: this.x2, y:this.y2},{x: this.x3, y:this.y3}];
		return points;
	};
	this.boundingBox = function(){
		let minX = Math.min(this.x1,this.x2,this.x3);
		let maxY = Math.max(this.y1,this.y2,this.y3);
		let maxX = Math.max(this.x1,this.x2,this.x3);
		let minY = Math.min(this.y1,this.y2,this.y3);
		let rectangle = new Rectangle(minX,maxY,maxX,minY);
	    return rectangle;
	};
}


function Polygon(points){
	this.ps = points;
	this.points = function(){
		return this.ps;
	};
	this.move = function(dx,dy){
		this.ps = this.ps.map(point => {
			let newPointX = point.x + dx;
			let newPointY = point.y + dy;
			let  object = {x:newPointX, y:newPointY};
			return object;
		});
	};
}

let polygon = new Polygon([{x:3, y:4},{x:6, y:4},{x:9, y:4}]);
polygon.move(4,5);
polygon.points();

let rectangle =  new Rectangle(2,3,5,6);
let otherRectangle = new Rectangle(30,40,70,80);

//rectangle.distanceTo(otherRectangle);

//otherRectangle.distanceTo(rectangle);



