// (function myAge () {
//     var myBornYear = 2000;
//     var myCurrentYear = 2022;
//     console.log(`my age from the age calculator is telling me that am  ${myCurrentYear - myBornYear} years old`)
// })()
// well am learning a scope in js
// var name = "NSUBUGA MUHAMMAD";
// console.log(name)
//  let myName = `NSUBUGA MUHAMMAD and my school's name is CEDAT`;
//  (function myFunc (){if (myName.length > 1) {
//     console.log(myName) 
//  }})()
//  console.log(myName.charAt(5))
//  console.log(myName.includes("MUHAMMAD"))
// Well am learning about maps anyway
var myMap = new Map();
myMap.set(1,"NSUBUGA");
myMap.set(2,"MUHAMMAD");
myMap.set(3,"MAHAD");
myMap.set(4,"HUZAIL");
myMap.set(5,"MAGALA");
console.log(myMap);
for(let[key,value] of myMap){
    console.log(`my key is: ${key} and therefore the value is :${value}`)
}