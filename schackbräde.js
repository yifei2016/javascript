var line = '';
for( var b=0; b<8; b++ ) {
  var rowIsEven = (b % 2) === 0;
  for( var a=0; a<8; a++ ) {
    var columnIsEven = (a % 2) === 0;
    if( columnIsEven && rowIsEven ||
       !columnIsEven && !rowIsEven ) {
      line = line + ' ';
    } else {
      line = line + '#';
    }	
  }
  line = line + '\n';
}
console.log(line);