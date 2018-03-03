var customer ={
	name: "Sohel Ahmed",
	speak: function(){
		return "My name is "+this.name;
	},

	address:{
		street:"1213 Dhanmondi",
		city:'Dhaka',
		state:'PA'
	}
}


document.write(customer.speak()+"<br>");
document.write("Street: "+customer.address.street+"<br>");
document.write("City: "+customer.address.city+"<br>");
document.write("State: "+customer.address.state+"<br>");


// Constructor function

function Person(name,address){
	this.name = name;
	this.address = address;

	this.info = function(){
		return "My Name is "+this.name+". I Lived in "+this.address+"<br>";
	}
}


function changeName(person){

	person.name= "Lee Halua";

}


var person = new Person("Sohel Ahmed","Rangpur");

changeName(person);

document.write(person.info());


// protypying

function getSum(num1,num2){
	return (num2+num1);
}


document.write("Number of Argument in getSum Function is "+getSum.length+"<br>");


function Mammal(name){
	this.name = name;
	this.getInfo= function(){
		return "The Mammal name is "+this.name+"<br>";
	}
}

Mammal.prototype.sound="Grrr";


var mammal = new Mammal("Hool");

document.write(mammal.getInfo());
document.write(mammal.sound)+"<br><br>";


// Printing All the Property

document.write("Printing All Property of Mammal Object<br>");



for(var x in mammal){
	document.write(x+": "+mammal[x]+"<br>");
}


// Check Name and Sound is Own property of the Mammal or Nor

document.write("name property of mammal is "+mammal.hasOwnProperty("name")+"<br>");
document.write("sound property of mammal is "+mammal.hasOwnProperty("sound")+"<br>");


// Add Additional Function in an Object

Array.prototype.inArray = function inArray(value){

	for(var i=0;i<this.length;i++){
		if(this[i]===value){
			return true;
		}
	}

	return false;
}


var sampleArr = [1,2,3,4,5];

document.write("3 in sample Array "+sampleArr.inArray(3)+"<br>");

//Privave and Protectted in JavaScript

function SecretCode(){
	var secterNumber =78;

	this.guessNumber=function(number){
		if(number<secterNumber){
			document.write("Less <br>");
		}else if(number>secterNumber){
			document.write("Higher <br>");
		}else{
			document.write("You Guess It <br>");
		}
	}
}


var secretCode = new SecretCode();

document.write("Secret Code is "+secretCode.guessNumber(70)+"<br>");
