/*var n = 2;
var y = 10;
while(n<y){
	console.log("i love apple" + n);
	n++;
}*/






/*Skriv ett program som ber användaren om ett tal mellan 1 och 10. 
Om talet inte är mellan 1 och 10 ska ett felmeddelande skrivas ut på konsolen.*/
var secret =5;
if(tal==secret){
	console.log("you have guessed the secret number");
}


/*skapa en variabel som du ger ett hemligt värde mellan 1 och 10. Skriv ut om användaren lyckades 
skriva det hemliga talet eller inte. Prova programmet på en klasskamrat.*/
var tal = prompt("please write a number");
if(tal>1 || tal<10){
	console.log(tal + " is not between 1 and 10");
}



//använd switch för att skriva ut olika saker beroende på vilket värde användaren skriver in.
switch(tal){
	case "1": console.log("ett");
	break;
	case "2": console.log("tva");
	break;
	default:console.log("större än tva");
	break;
}