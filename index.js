// document.getElementById(count-el).innerText = 2;
let count=0;
let countEl = document.getElementById("count-el")
function increment(){
    count+=1
    countEl.innerText=count
}

function decrement(){
    count-=1
    countEl.innerText=count
}

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + " - "
    saveEl.textContent +=countStr
    countEl.textContent =0 // we set the only text content to 0 not he js count element
    count = 0 // here we set the js element also to 0;
}


