/** 

let heading = document.getElementById("heading");
console.dir(heading);

let header = document.getElementsByClassName("heading");
console.dir(header);

let tag = document.getElementsByTagName("p");
console.dir(tag);
**/
/** 
//Query_selector

let element = document.querySelector("p");
console.dir(element);

let elements = document.querySelectorAll("p");
console.dir(elements);
**/
/** 
let ele = document.querySelector("div");
console.log(ele.getAttribute("name"));

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));
console.log(para.getAttribute("class"));
**/
/** 
let el = document.createElement("button");
el.innerText = "Click Me";

let div = document.querySelector("div");
//div.append(el);

//div.prepend(el);
**/
/** 
let ele = document.querySelector("div");
let head = document.querySelector("h3");
head.remove();
**/

//Q1
/**
 let heading = document.createElement("h2");
heading.innerText = "Hello Javascript";
let div = document.querySelector("div");
div.prepend(heading);
div.append("from Apna College students");
 **/

//Q2
/** 
let divs = document.querySelectorAll("div");

for(let i of divs){
    divs[i].innerText = "This is box 'i'";
}
**/

//Q3
/**
let ele = document.createElement("button");
ele.innerText = "Click me";

ele.style.backgroundColor = "red";
ele.style.color = "white";

let divs = document.querySelector("div");
divs.prepend(ele);
 **/

//Q4
/** 
let para = document.querySelector("p");
console.log(para);

let para1 = document.createElement("p");

para1.classList = "foo";

console.log(para1);

para1.innerText = "Flowers are among the ecosystem’s most important and beautiful parts. They are used for making perfumes and for medicinal purposes. Many insects, birds, and animals get their food from flowers. Writing an essay on this topic will help kids develop a better understanding of flowers and learn to appreciate nature better. ";

para.append(para1);
**/



