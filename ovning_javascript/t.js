
/*var result = function(str,character){ 
	var count = 0;
	for(var x=0;x<str.length;x++){
		if(str.charAt(x) == character){

			count++;	
		}	
	}  
	console.log(count);
}

function sum(base){
	var c = result("yifei","i");
	console.log(c + base);
}
sum(100);*/


/*function name (str,character){
	var count=0;
	var newString='';
	for(x=0; x<str.length;x++){
		if(str.charAt(x)==character){
		    count++;
		    newString = newString + "s";
		} else {
			newString = newString + str.charAt(x);
		}
	}
	return [count, newString];

	
}
var c=name("yifei","i");
console.log(c);*/

/*function isEven(x) {
	// Your code here
	if(x>=0&&x%2===0){
	return 2===0;
	}
	else{
	return 2===0;
	}
}

console.log( 'is 50 even? ' + isEven(50) );*/



/*var x = 5;
var y = 10;
function magic() {
	var x = 10;  // lokala variabeln x skymmer globala variabeln x
	y = 20;     //  skriver över den globala variabeln
}
magic();
console.log( 'x == ' + x + ', y == ' + y );*/

/*function capitalize(string) {
	// Your code here
	/*var newString = string.charAt(0).toUpperCase() + string.slice(1,string.length);*/
	
	/*var newString="";
	var isSpace = true;
	
	for(x=0;x<string.length;x++){
		var c = string.charAt(x);
		
		if (isSpace === true) {
			 newString = newString + c.toUpperCase();
			 isSpace = false;
		}
		else{
			newString = newString + c.toLowerCase();}
		
		if (c == " "){
			isSpace = true;
		 }
		
	}
	console.log(newString);
		
}

capitalize("one TWO three");*/

var sideEffectsAreOftenUnexpected = function(x) {
	variable = x * 2;
	return variable;
}
var variable = 5;
console.log( sideEffectsAreOftenUnexpected(10) );
variable += 2;
console.log( '5 + 2 == ' + variable );







