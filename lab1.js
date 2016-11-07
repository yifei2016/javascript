function createMovieObject(title, year, genre){
    let object = {
        title: title,
        year: year,
        genre: genre,
        ratings: [],
        /*hasRatings: function(){
        	if(this.ratings.length > 0){
        		return true;
        	}else{
        		return false;
        	}
        },*/
        /*getAverageRate: function(){
        	if(this.ratings.length === 0){
        		return;
        	}
        	let sum = 0;
        	for(let n = 0; n < this.ratings.length; n++){
        		
        		sum = sum + this.ratings[n];
        	}
        	let averageRate = sum/this.ratings.length;
    		return averageRate;
        }*/
        toString: function(){
            let filmInfo =
            "<p>title: " + this.title + "</p>"+
            "<p>year: " + this.year + "</p>" +
            "<p>genre: " + this.genre + "</p>" +
            "<p>Average rating: " + getAverage(this.rating)+ "</p>";
            return filmInfo;
        }
    };
    return object;
}
function getAverage(ratingsArray){
	if(ratingsArray.length===0){
		ratingsArray=[];
		return ratingsArray;
	} 
	if(ratingsArray.length>0){
		let sum = 0;
    	for(let n = 0; n<ratingsArray.length;n++){
            sum = sum + ratingsArray[n];
    	}
    	let averageRate = sum/ratingsArray.length;
    	return averageRate;
	}
}

function getBestMovie(database){
    let best = database[0];
    
    for(let i = 1;i < database.length; i++){
    	
    	let movieToCompare = database[i];
    	if(movieToCompare.ratings.length > 0 && getAverage(movieToCompare.ratings) > getAverage(best.ratings))
        {
            best = movieToCompare;
        }
    }
    return best;
}
function getWorstMovie(database){
    let worst = database[0];
    for(let i = 1; i < database.length; i++){
    	let movieToCompare = database[i];
    	
    	if(movieToCompare.ratings.length > 0 && getAverage(movieToCompare.ratings) < getAverage(worst.ratings)){
                worst = movieToCompare;
    	}
    } 
    
    return worst;
}


function getMoviesThisYear(database,year){
    let premierMovieObject = [];
    for(let i = 0;i<database.length;i++){
        if(database[i].year==year){
            premierMovieObject.push(database[i]);
        }
        
    }
    return premierMovieObject;
}


function getMoviesByGenre(database,genre){
    let sameGenreMovieArray = [];
    for(let i = 0; i < database.length; i++){
        if(database[i].genre==genre){
        	let title = database[i].title;
            sameGenreMovieArray.push(database[i]);
        }
    }
    return sameGenreMovieArray;
}

function rateMovie(movieObject,rate){
    return movieObject.ratings.push(rate);
	
}



let movieObject1 = createMovieObject("The Force Awakens",2013,"Scifi");
let movieObject2 = createMovieObject("Borat",2007,"Comedy");
let movieObject3 = createMovieObject("Frozen",2013,"Familjfilm");
let movieObject4 = createMovieObject("The Legend of Tarzan",2016,"Action, äventyr");
let movieObject5 = createMovieObject("Legally Blonde",2001,"Comedy");

rateMovie(movieObject1,3);
rateMovie(movieObject1,5);
rateMovie(movieObject1,2);
rateMovie(movieObject1,3);
rateMovie(movieObject1,1);

/*rateMovie(movieObject2,3);
rateMovie(movieObject2,3);
rateMovie(movieObject2,5);
rateMovie(movieObject2,5);*/

rateMovie(movieObject3,1);
rateMovie(movieObject3,1);
rateMovie(movieObject3,5);
rateMovie(movieObject3,3);

rateMovie(movieObject4,5);
rateMovie(movieObject4,4);
rateMovie(movieObject4,4);
rateMovie(movieObject4,5);

rateMovie(movieObject5,1);
rateMovie(movieObject5,1);
rateMovie(movieObject5,1);
rateMovie(movieObject5,1);
rateMovie(movieObject5,1);
rateMovie(movieObject5,2);
rateMovie(movieObject5,2);
rateMovie(movieObject5,2);

let database = [];
database.push(movieObject1);
database.push(movieObject2);
database.push(movieObject3);
database.push(movieObject4);
database.push(movieObject5);

//getAverage(movieObject2.ratings);
//getMoviesByGenre(database,"Comedy");
getBestMovie(database);
//getWorstMovie(database);
//getMoviesThisYear(database,2016);
//console.log(movieObject1.toString());
//createMovieObject("The Force Awakens",2013,"Scifi");
