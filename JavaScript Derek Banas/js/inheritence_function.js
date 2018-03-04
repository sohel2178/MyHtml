// document.write("Hello");

function Animal(){
	this.name ="Animal";

	this.toString = function(){
		return "My Name is "+this.name;
	}
}

function extend(Child,Parent){
	var Temp = function(){};

	Temp.prototype = Parent.prototype;

	Child.prototype = new Temp();

	Child.prototype.constructor = Child;
}


function Deer(){
	this.name = "Deer";
}

extend(Deer,Animal);


var myDeer = new Deer();

document.write(myDeer.name+"<br>");
document.write(myDeer.toString()+"<br>");