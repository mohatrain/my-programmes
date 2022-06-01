/*var myString = "NSUBUGA MUHAMMAD";
const myWord = " is "
var myAge = "26"
let mySentence = myString + myWord + myAge;
console.log(mySentence.toLowerCase())
console.log(mySentence.length)*/
// strings are immmutable 
// this implie syou cat change a string when already defined.
function myWords(name,age,course,dstn,life){
var result;
result = `My ${name} is and am ${age} years old and am studying ${course} who wants to go to ${dstn} and am ${life}` 
console.log(result)
}
//myWords("NSUBUGA MUHAMMAD",22,"civl engineering","America","Happy")
// We have learnt that arrays are mutable 
function workingWithArrays(){
var myArray = new Array(1,2,3,4,5,6)
myArray.pop()
myArray.shift()
myArray.push([1,2,3,4,5,6,7,8])
myArray.unshift("Happy Learning Code");myArray.unshift("Cool learnign code")
// myArray[0]=[12,13,14,15,16,17]
console.log(myArray)
}
//well am passing an age calculator

function ageCalculator(base){
var yob = 2021;
var age = yob - base;
console.log(`Your Age is Actually ${age}`)
}
ageCalculator(2000)