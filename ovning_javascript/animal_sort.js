let giraff = {
	namn: 'giraff',
	antalBen: 4
};
let apa = { namn: 'babian', antalBen: 4 };
let fagel = { namn: 'stork', antalBen: 2 };
let insekt = { namn: 'myra', antalBen: 6 };
let djur = [giraff, apa, fagel, insekt]; // array of objects

/*djur = [
	{ namn: 'giraff', antalBen: 4 },
	{ namn: 'babian', antalBen: 4 },
	{ namn: 'stork', antalBen: 2 },
	{ namn: 'myra', antalBen: 6 }
]*/


// skapa en funktion
// byta plats på element tills listan är sorterad?
// för varje element ska vi gå igenom listan 1 gång
// för varje element-par ska vi kontrollera om de är i rätt ordning. Om inte så byter vi plats på dem
// returnera listan

function bubblesort(lista) {
	for( let i = lista.length - 1; i >= 0; i-- ) {
		for( let j=0; j<i; j++ ) {
			if( lista[j].antalBen < lista[j+1].antalBen ) {	  // jämföra j med j+1
				let temp = lista[j];
				lista[j] = lista[j+1];
				lista[j+1] = temp;
			}
		}
	}
	return lista;
}
bubblesort(djur);

