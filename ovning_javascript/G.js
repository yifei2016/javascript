/* Skriv ett program som frågar användaren om ett tal och kontrollerar om det är ett primtal. 
 Ett primtal är ett heltal som bara är delbart med sig självt och 1. De första primtalen är 2, 3, 5, 7. 
 Men 8 är inget primtal eftersom 8 / 2 == 4.
Obs! 
Det går att hitta färdiga lösningar på internet. 
Men om du plockar en färdig lösning så lär du dig mindre än om du försöker göra en själv.

 */



var input=prompt("please write a number");
for(var i = 2; i<input;i++) {
	if(input % i === 0) {
		console.log("This is not a prime, this can also be divided by " + i);
		break;
	}else{
		console.log("this is a prime.");
	}
}
	



var input = prompt("please input a number"); //input

// Logic 
// Initial State
var isPrime = true;
var i;

// In process 
for( i= 2; i<input;i++) {
	if(input % i === 0){
		isPrime = false;
	
		break; // Used to break out of for/while loop
	}
}

// Output  => isPrime or not
if(isPrime){
	console.log("This is a prime."); //output
}else{
	console.log("This can be divided by " + i);  //output
}