// function myFunction(val){
// if(val == 3){
// return `WELL THIS IS NUMBER 3`
// }
// return "ITS IMPOSSIBLE"
// }
// myFunction(5)
// // console.log(3)
// SOLUTION USING A SWITCH KEYWORD
/*var num;
num = 11;
if(num < 5){
    console.log("Tinny")
}else if(num < 10){
console.log("Small")
}else if(num < 20){
console.log("Large");

}else{
    console.log(`thse arer the rest of the useless numbers`)
}*/
// How to use the checkOwnProperty
var myObject = {
name: "NSUBUGA MUHAMMAD",
age : 22,
wife: "ASINGWIRE SHAKIRA",
muko : 'SUDAIS',
life : "Happy"
}
console.log(myObject.hasOwnProperty("muko"))
console.log(myObject)
console.log(JSON.stringify(myObject))