/*Skriv ett program som spelar ett spel med användaren. 
Programmet ska generera ett slumptal mellan 1 och 100. Sedan ska användaren gissa på ett tal. 
Om talet är större eller mindre än det hemliga så ska programmet skriva ut det. 
Om användaren gissar fel ska programmet fortsätta fråga efter gissningar, tills användaren gissar rätt. 
Då ska poängen skrivas ut, som är antalet gissningar.
Använd funktionen Math.random() som genererar ett slumptal mellan 0 och 1 samt 
funktionen Math.ceil(nummer) som avrundar ett tal uppåt till närmsta heltal.*/



var secret = Math.ceil(Math.random()*5);
var count=0;
var user_input = prompt("please guess a number");
count++;
while (user_input != secret){
	console.log(user_input);
	user_input = prompt("please continue to guess");
	count++;
}
console.log("Correct, you have guessed "+ count + " times.The correct number is " + secret);
