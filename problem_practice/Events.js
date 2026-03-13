
/**
let button = document.querySelector("button");
button.onclick = (e) =>{
    console.log("Hi There..!");
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
}

let para = document.querySelector("p");
para.onmouseover = (evt) =>{
    console.log("Hi , I am Nandini");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);   
}
    **/

let btn = document.querySelector("button");
let bo = document.querySelector("body");
let mode = "light";
btn.addEventListener("click", () => {
    if(mode === "light"){
        bo.style.backgroundColor = "black";
        mode = "dark";
        console.log("mode = dark");
    }
    else{
        bo.style.backgroundColor = "white";
        console.log("mode = light");
        mode = "light";
    }
    
})