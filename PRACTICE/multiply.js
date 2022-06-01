// a function that multiplies the first n elements of any arr
function myMultiple(array,n){
let product = 1;
for(var i = 0;i < n; i++){
product *= array[i];

console.log(product)
}

}
myMultiple([1,2,3,4,5,6,7,8,9,10],10)