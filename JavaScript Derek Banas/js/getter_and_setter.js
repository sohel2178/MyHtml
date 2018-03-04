
//Getter and Setter Example 
var address = {
	street:"124 Kali Road",
	city:"Dhaka",
	state:"Bangladesh",

	get getAddress(){
		return this.street+", "+this.city+", "+this.state;
	},

	set setAddress(address){
		var parts = address.toString().split(", ");

		this.street = parts[0] || "";
		this.city = parts[1] || "";
		this.state = parts[2] || "";
	}
}


document.write(address.getAddress+"<br>");


address.setAddress = "Queen Road, Dhaka, Bangladesh";  // Look Getter and Setter is not Function rather they are Property

document.write(address.getAddress+"<br>");


// Deprecated Way of Creating Getter and Setters 

function Coordinate(){
	this.latitude = 0;
	this.longitude = 0;
}

// Now Create the Getter
Object.__defineGetter__.call(Coordinate.prototype,"getCoordinates",
	function(){
		return "Lat: "+this.latitude+", Long: "+this.longitude;
	});

// Now Crete Setter
Object.__defineSetter__.call(Coordinate.prototype,"setCoordinates",
	function(coords){
		var parts = coords.toString().split(", ");

		this.latitude = parts[0] || 0;
		this.longitude = parts[1] || 0;

	})


// Now Test it

var testCoords = new Coordinate();

document.write(testCoords.getCoordinates+"<br>");

testCoords.setCoordinates = "23.009, 90.788";

document.write(testCoords.getCoordinates+"<br>");


// Set Getter and Setter Using Define Property

function Point(){
	this.xPos=0;
	this.yPos=0;
}

// Now Create the Getter and Setter

Object.defineProperty(Point.prototype,"pointPos",{

	get: function(){
		return "X: "+this.xPos+" Y: "+this.yPos;
	},
	set: function(point){

		var parts = point.toString().split(", ");

		this.xPos = parts[0] || 0;
		this.yPos = parts[1] || 0;

	}

});




// Now Test It

var myPoint = new Point();
document.write(myPoint.pointPos+"<br>");
myPoint.pointPos = "23.788, 90.7855";
document.write(myPoint.pointPos+"<br>");


// UptoDate Way to Creting Getter and Setter

function Circle(radius){
	this._radius = radius;
}

Circle.prototype = {
	set radius(radius) {
		this._radius = radius;
	},
	get radius() {
		return this._radius;
	},
	get area() {
		return Math.PI*this._radius*this._radius;
	}
};

// Now Test It

var myCircle = new Circle(10);

document.write("Radius of the Circle is "+myCircle.radius+"<br>");
document.write("Area of the Circle is "+myCircle.area+"<br>");

myCircle.radius = 18;
document.write("Radius of the Circle is "+myCircle.radius+"<br>");
document.write("Area of the Circle is "+myCircle.area+"<br>");



