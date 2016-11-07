function Movie(title, year, genre){
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.ratings = [];  
    this.rateMovie = function (rate){ 
        this.ratings.push(rate);
    };
    this.getAverage = function(){
        if(this.ratings .length===0){
            return [];
        } 
        let sum = this.ratings.reduce((sum,rate) =>{
            return sum+rate;
        }, 0);
            
        let averageRate = sum/this.ratings.length;
        return averageRate;
    };
}

/*
Movie.prototype.rateMovie = function(rate) { 
    this.ratings.push(rate);
};
*/
let movieObject1 = new Movie("The Force Awakens",2013,"Scifi");
let movieObject2 = new Movie("Borat",2007,"Comedy");
let movieObject3 = new Movie("Frozen",2013,"Familjfilm");
let movieObject4 = new Movie("The Legend of Tarzan",2016,"Action, äventyr");
let movieObject5 = new Movie("Legally Blonde",2001,"Comedy");




let Database = {
    movieList: [movieObject1,movieObject2, movieObject3,movieObject4,movieObject5 ],
    
    getBestMovie: function(){
        let best = this.movieList[0];
        this.movieList.forEach(x => {
            if(x.ratings.length > 0 && x.getAverage()> best.getAverage()){
                best = x;
            }
        });
        return best;
    },
    
    getWorstMovie: function(){
        let worst = this.movieList[0];
        this.movieList.forEach(x =>{
            if(x.ratings.length > 0 && x.getAverage() < worst.getAverage()){
                worst = x;
            }
        });
        return worst;
    },
    
    getMoviesThisYear: function(year){
    
        let premierMovieObject = this.movieList.filter(x =>{
            return x.year === year;
        });
        return premierMovieObject;
    },
    
    getMoviesByGenre: function(genre){
        let sameGenreMovieArray = this.movieList.filter(x => (x.genre === genre));
        
        return sameGenreMovieArray;
    }
};