let countryStatistics = [
	{
		name: 'Sweden',
		continent: 'Europe', 
		population: 9890000,
		pFemale: 0.502        // 50,2% of population is female
	},
	{
		name: 'Norway',
		continent: 'Europe',
		population: 5300180,
		pFemale: 0.499
	},
	{
		name: 'Denmark',
		continent: 'Europe',
		population: 5701870,
		pFemale: 0.504
	},
	{
		name: 'Japan',
		continent: 'Asia',
		population: 126408645,
		pFemale: 0.513
	},
	{
		name: 'Thailand',
		continent: 'Asia',
		population: 68314053,
		pFemale: 0.509
	},
	{
		name: 'Chile',
		continent: 'South America',
		population: 18206356,
		pFemale: 0.506
	},
	{
		name: 'Morocco',
		continent: 'Africa',
		population: 35010005,
		pFemale: 0.510
	},
	{
		name: 'Nigeria',
		continent: 'Africa',
		population: 188688090,
		pFemale: 0.494
	},
	{
		name: 'Zimbabwe',
		continent: 'Africa',
		population: 16051510,
		pFemale: 0.507
	},
	{
		name: 'China',
		continent: 'Asia',
		population: 1381321335,
		pFemale: 0.488
	}


];

function name (countryStatistics){
	countryStatistics.forEach(x =>console.log( x.name));
}

function population (array){

	return array.reduce((a,b) => a+b.population,0);
}

function europe (array){
	return array.reduce((a,b) => { 
		if(b.continent === 'Europe'){
			return a+b.population;
		}
		return a;
	},0);
}

function smalletPopulationLand (array){
	let min =array[0].population;
	array.forEach(x => {
		if(x.population<min){
			min = x.population;
		}
	});
	return min;
}

function smalletPopulationInAsia(array){	
	let asienArray =  array.filter(x => {
			return (x.continent === 'Asia');
		}
	);
	
	let minInAsien =asienArray[0].population;
	
	asienArray.forEach(x => {
		if(x.population < minInAsien){
			minInAsien = x.population;
		}
	});
	return minInAsien;
}

function average (array){
	let sum = array.reduce((a,b) => { 
		if(b.continent === 'Africa'){
			return a+b.population;
		}
		return a;
	},0);
   
	let averageSum = 0;
	array.forEach(x => {
		if (x.continent === 'Africa') 
			averageSum++;
	});
	
	return sum/averageSum;
}
//average(countryStatistics);

function maxContinent (array){
	let continentArray = [];
	array.forEach(o => {
		let existedContinentObject = continentArray.find(x => x.continent === o.continent);
		if(existedContinentObject === undefined){
			continentArray.push({continent: o.continent, population: o.population});
		}else{
		  	existedContinentObject.population = o.population + existedContinentObject.population;
		}
	});
	let maxContinentObject = continentArray[0];
	continentArray.forEach(o => {
		if(o.population > maxContinent.population){
			maxContinentObject = o;
		}
	});
	return maxContinentObject;
	
}
//maxContinent(countryStatistics)
function moreResidentsCountry (array){
	let moreResidentsCountry = [];
	array.forEach(o => {
		if(o.population > 50000000 ){
			moreResidentsCountry.push(o);
		}
	});
	return moreResidentsCountry;
}
function countryInEurope (array){
	let lessPopulationCountry = array.find(x => x.population < 1234567 && x.continent === 'Europe');
		if(lessPopulationCountry !== undefined){
			return lessPopulationCountry;
		}else{
			return false;
		}
}
function betweenCountry (array){
	let betweenCountry = array.filter(o => (o.population > 8000000 && o.population < 15000000));
	return betweenCountry;
}
function maxContinentWithMaxCountry (array){
	let newArray = array.filter(o => o.population > 50000000);
    //console.log(newArray)
	let continentArray = [];
	newArray.forEach(o => {
		let existedContinentObject = continentArray.find(x => x.continent === o.continent);
		if(existedContinentObject === undefined){
			continentArray.push({continent: o.continent, count: 1});
		}else{
		  	existedContinentObject.count ++;
		}
	});
  //console.log(continentArray)
	let maxContinentObject = continentArray[0];
	continentArray.forEach(o => {
		if(o.count > maxContinent.count){
			maxContinentObject = o;
		}
	});
	return maxContinentObject;
	
}
//maxContinentWithMaxCountry(countryStatistics)

function last (array) {
	let countryArray = [];
	
	array.forEach(o => {
		let i = countryArray.findIndex(x => x.continent === o.continent);
		if(i === -1){ // not found
			countryArray.push(o);
		}else {
			if(countryArray[i].population > o.population){
				countryArray[i] = o;
			}
		}
	});
	console.log(countryArray);
	let max = countryArray[0];
	countryArray.forEach(o => {
		if(o.population > max.population){
			max = o;
		}
	});
	return max;
}
last(countryStatistics);