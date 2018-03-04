document.write("Hello<br>");


// var doStaff ={

// 	sum: function(num1,num2){
// 		return num1+num2;
// 	}

// };


// var doStaff = {

// 	sum(num1,num2){
// 		return num1+num2;
// 	}

// };

// document.write(doStaff.sum(12,20));


class Point{
	constructor(xPos,yPos){
		this.xPos = xPos;
		this.yPos = yPos;
	}


	getPos(){
		return "X: "+this.xPos+" Y: "+this.yPos;
	}

	setPos(xPos,yPos){
		this.xPos = xPos;
		this.yPos = yPos;
	}
}


class Animal{
	constructor(name){
		this.name = name;
	}

	toString(){
		return "The Animal Name is "+this.name;
	}

	static getAnimal(){
		return new Animal("No Name");
	}
}


var myPoint = new Point(10,12);

document.write(myPoint.getPos()+"<br>");

var myAnimal = new Animal("Cat");

document.write(myAnimal.toString()+"<br>");
document.write(Animal.getAnimal().toString()+"<br>");


// Now Inhering Portion

class Dog extends Animal{
	constructor(name,owner){
		super(name);
		this.owner = owner;
	}

	getOwner(){
		return "The Owner of "+this.name+" is "+this.owner;
	}
}


var dog = new Dog("Mintu","Hitu");

document.write(dog.getOwner()+"<br>");

