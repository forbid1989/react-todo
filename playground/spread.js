// function add(a, b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Blue', 'Charry'];
// var groupB = ['Vianca'];
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

function returnSentence(a, b){
  return 'Hi '+ a + ',you are ' + b;
}

console.log(returnSentence(...person));
console.log(returnSentence(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Andrew'];
// Hi Andrew

for (var i = 0, len = [final,...names].length; i < len; i++) {
  console.log('Hi ' + [final,...names][i]);
}
