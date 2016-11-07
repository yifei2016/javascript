let df = function(){
	function print_name(person){
		console.log(person.age);
		console.log(person.name);
	}
	var p = {name:"yifei"};
	p.age = 18;
	p.name = "chuansu";
	print_name(p);

}

df()

var f = function (){
	function print_name(person){
		console.log(person.age);
		console.log(person.name);
	}
	return print_name;
	
}()
var p = {name:"yifei",age:12};

f(p)





