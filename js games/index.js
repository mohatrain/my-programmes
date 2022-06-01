window.alert("If you want to see behind the curtains press okay")
//  document.getElementByid("count-el").innerText = 5;
let countEl = document.getElementById("count-el")
console.log(countEl)

// let saveEl = document.getElmentById("save")



let count  = 0;
function increment(){
    count = count + 1;
    countEl.innerText = count;

}

// function saveNow(){
//     console.log(count)
// }




