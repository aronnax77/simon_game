function getSequence(num) {
  var result = [];
  var x = 0;
  var temp;
  while( x < num ) {
    temp = Math.floor((Math.random() * 4)) + 1;
    result.push(temp);
    x++;
  }
return result;
}

console.log(getSequence(20));
