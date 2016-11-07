
function Address(street,zipcode, city){
	this.street = street;
	this.zipcode = zipcode;
	this.city = city;
}

function Person(name,age,phonenumber,address){
	this.name = name;
	this.age = age;	
	this.phonenumber = phonenumber;
	this.address = address;
	this.birthYear = function(){ 
		return (2016 - this.age);
	};
	this.homeAddress = function(){
		return this.address.street + ' ' + this.address.zipcode + ' ' + this.address.city;
	};
	this.contactInfo = function() {
		return {
			name: this.name,
			phone: this.phonenumber,
			address: this.homeAddress()
		};
	}
}

var address = new Address('Kabbeleksgatan 5A','41718','Gothenburg');
var chuan = new Person('chuan',27,'0704123689',address);

var birthYear = chuan.birthYear();
var homeAddress = chuan.homeAddress();
console.log("Chuan borned at " + birthYear);
console.log("Chuan lives in " + homeAddress);
console.log("\n");
console.log("---- Contanct Info ------")
var contactInfo = chuan.contactInfo();
console.log(contactInfo.name);
console.log(contactInfo.phone);
console.log(contactInfo.address);
