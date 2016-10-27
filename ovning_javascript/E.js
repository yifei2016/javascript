/*Skriv ett program som låter användaren skriva in en sträng och skriver ut vad strängen blir baklänges. 
Om användaren skriver 'Student' ska programmet skriva ut 'tnedutS' på konsolen. 
Använd while eller for.*/


var user_input=prompt("please write a string");
var input_user=" ";
for(i = user_input.length - 1;i>=0;i--){
    input_user=input_user.concat(user_input.charAt(i));
	
}
console.log(input_user);
