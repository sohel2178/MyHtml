// var a =12;
// var b =24;

// document.write("Addition of a and b "+(a+b) + "<br>");
// document.write("Subtraction of a and b "+(a-b) + "<br>");
// document.write("Multiplication of a and b "+(a*b) + "<br>");
// document.write("Dividation of a and b "+(a/b) + "<br>");


// if(a>b){
// 	document.write("true");
// }else{
// 	document.write("false");
// }

// document.write("<br>");

// (a>b) ? document.write("true"):document.write("false");

// document.write("<br><br>");



// var counter =0;

// while(counter<10){
// 	counter++;
// 	document.write("Printing Via While Loop "+counter+"<br>");
// }

// for(var i=0;i<20;i++){
// 	document.write("Printing Via For Loop "+(i+1)+"<br>");
// }


// for(var i=0;i<10;i++){
// 	document.write(getArea(20,10)+"<br>")

// }


// function sayHello(){
// 	document.write("Hello");
// }

// function getArea(w,h){

// 	return w*h;

// }


function calc(){
	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	// var result = ;

	if(width!=null && height !=null){
		console.log(width*height);

	}
	return width*height;
}