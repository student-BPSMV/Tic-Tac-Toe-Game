a = "5";
b = 5;

//AIRTHEMETIC OPERATORS
// includes +,-,*,/,%,**
 
//UNARY OP
//includes ++,--

//ASSIGNMENT OPERATORS
// includes +=,-=,*=,/=,%=,**=,!=,==,!==,===

console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a === b", a === b);
console.log("a !== b", a !== b);

let mode = "dark";
let color;                     //if conditional operators

if (mode == "dark"){
    color = "light";
}

if (mode == "light"){
    color = "dark";
}

console.log(color);

let num = 24;
 
if (num % 2 === 0){
    console.log("The", num ,"is even.")
} else {
    console.log("The", num ,"is odd.")
}

// Check if a number is divisible by 5 or not.
/*
let number = prompt("Enter a number :") ;

if(number % 5 === 0){
    console.log("The number is a multiple of 5.");
}
else{
    console.log("The number is not a multiple of 5."); 
}

*/

// Write a code which can give grades to students according to their scores .

let marks = prompt("Enter the marks:");

if(marks>80 && marks<100){
    console.log("Grades = A");
}
else if(marks>70 && marks<79){
    console.log("Grades = B");
}
else if(marks>60 && marks<69){
    console.log("Grades = C");
}

else if(marks>50 && marks<59){
    console.log("Grades = A");
}
else if(marks>40 && marks<49){
    console.log("Grades = A");
}
else{
    console.log("Improve Yourself...");
}

