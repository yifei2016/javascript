//skapa en funktion
//byta plats pa element tills listan ar sorterad
// for varje element ska vi ga igenom listan i gang
// for varje element par ska vi kontrollera om de ar i ratt ordning, om inte sa byta vi plats pa dem 
//retunera listan

let giraff = {
	namn: 'giraff',
	antalBen: 4
};
let apa = { namn: 'babian', antalBen: 4 };
let fagel = { namn: 'stork', antalBen: 2 };
let insekt = { namn: 'myra', antalBen: 6 };
let djur = [giraff, apa, fagel, insekt];

function bubblesort(lista){
	for(let i=lista.length-1; i>=0;i--){
		for(let j=0;j<lista.length;j++){
			//jamfor j med j+1

			if(lista[j].namn>lista[j+1].namn){
				let temp = lista[j];
				lista[j]=lista[j+1];
				lista[j+1]=temp;
			}
		}
	}
	console.log(lista);
	return lista;
}
bubblesort([9,32,5,84,1,-1,65]);