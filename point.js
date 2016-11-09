// Represent Point/Coordinate Class
function Point(x,y){
	this.x = x; // property
	this.y = y; // property

 	// Object Behavior = method
	this.distanceTo = function(point) {
		let d = Math.sqrt( 
			// (10 -2)
			(this.x - point.x) *(this.x - point.x) + (this.y - point.y) * (this.y - point.y) 
		);
		return d;
	};
}

let p1 = new Point(2,4);
let p2 = new Point(10,20);
let distance = p2.distanceTo(p1)
console.log(distance);