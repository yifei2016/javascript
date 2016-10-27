/*Skriv ett program som låter användaren skriva in en sträng och 
skriver ut hur många vokaler det finns i strängen. 
(Det räcker med engelska vokaler: a, e, i, o, u, y)*/



var input=prompt("please write a string");
var count=0;  //yifei
for(x=0; x<input.length;x++){

	switch (input.charAt(x)){
		case "a":
		count++;
		break;
		case "e":
		 count++;
		 break;
        case "o":
		 count++;
		 break;
		case "u":
		 count++;
		 break;
		case "y":
		 count++;
		 break;
		case "i":
	    count++;
	    break;
	    default:
	    break;
	}
}
 console.log(count);