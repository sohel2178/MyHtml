// document.write("Hello Inheritence");

function Animal(){
	this.name ="Animal";

	this.toString = function(){
		return "My Name is "+this.name;
	}
}


function Wolf(){
	this.name = "Wolf";
}

function Cow(){
	this.name = "Cow";
}

Cow.prototype = new Animal();
Wolf.prototype = new Cow();

Cow.prototype.constructor = Cow;
Wolf.prototype.constructor = Wolf;


var cow = new Cow();
var wolf = new Wolf();

document.write(cow.toString()+"<br>");
document.write(wolf.toString()+"<br>");
document.write("<br>");
document.write("Wolf is Instance of Animal "+(wolf instanceof Animal)+"<br>");
document.write("Cow is Instance of Animal "+(cow instanceof Animal)+"<br>");

// Add sound in Animal Prototype

Animal.prototype.sound="Grrr";
Animal.prototype.getSound = function(){
	return this.name +" says "+this.sound;
}

Wolf.prototype.sound ="Vew Vew";
Cow.prototype.sound ="Hamba";

document.write(cow.getSound()+"<br>");
document.write(wolf.getSound()+"<br>");


function Roten(){
	this.name = "Roten";
}

function Rat(){
	this.name = "Rat";
}

Roten.prototype = new Animal();
Rat.prototype = Roten.prototype;

Roten.prototype.constructor = Roten;
Rat.prototype.constructor = Rat;

var myRat = new Rat();

document.write(myRat.toString()+"<br>");