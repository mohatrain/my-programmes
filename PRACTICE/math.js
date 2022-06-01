var myList = [1,2,3,4,5,6,8,6,7,55,6,7,6,7,78,9,9,9]
var myNumbers = Math.max(1,2,3,4,5,6,8,6,7,55,6,7,6,7,78,9,9,9);
function sumTwo(...args){
for(const arg of args){
sum += arg;
}
return sum;
}
console.log(sumTwo(1,2,3,4,5,6,8,6,7,55,6,7,6,7,78,9,9,9))