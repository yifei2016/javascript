//function Object(){
//
//}
var by = function(){ return (2015 - this.age); };

// Create three objects and assign them to different variables
var bob = new Object(); // var bob = {age: 1, name: 'bob'};
var kalle = new Object(); // var kalle = {};
var yifei = new Object(); // var yifei = {};

// Set a property called "age"
bob.age = 12;

kalle.age = 20;

yifei.age = 26;

// add methods to the three objects
bob.birthYear = by; 
kalle.birthYear = by;
yifei.birthYear = by;

/*bob.birthYear = function(){return (2015 - bob.age)};
kalle.birthYear = function(){return (2015 - kalle.age)};
yifei.birthYear = function(){return (2015 - yifei.age)};*/



var bobsBirthYear = bob.birthYear();
console.log(bobBirthYear);

var kallesBirthYear = kalle.birthYear();
console.log(kallesBirthYear);

var yifeisBirthYear = yifei.birthYear();
console.log(yifeiBirthYear);





function Person(name,age,gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30, "female");
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington",275);

//console.log(bob.name);
console.log(bob.gender);

/*function getPersonsName(person){
    return person.name;
    };
function getPersonsBirthYear(person){
    return (2016 - person.age);
    };
console.log(getPersonsName(bob));
console.log(getPersonsName(susan));
console.log(getPersonsBirthYear(george));*/