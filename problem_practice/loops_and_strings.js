// for loop
/*
for(let i=1; i<5; i++){
    console.log("i =", i);
}

//While loop
let i=2;
while(i<6){
    console.log("i = ",i);
    i++;
}

//do...While loop

let i=2;
do{
    console.log("i = ",i);
    i++;
}while(i<6);
*/
/*
//for of loop   --->    for strings and arrays 

let str = "Javascript";

for(let i of str){
    console.log("i = ", i);
}

//for in loop    --->     for objects

const students = {
    Name : "Ritik",
    roll_no : 34 ,
    marks : 56 ,
}

for(let x in students){
    console.log("x = ",x);
}
*/
/*
//Q1 - Print all even numbers from 0 to 100.
console.log("These numbers are even:");
for(let i=1; i<=100 ; i++){
    if(i%2===0){
        console.log(i);   
    }  
}
    

//Game

let num1=25;
let num2 = prompt("Enter the number:");

while (num2 != num1){
    num2=prompt("Wrong answer..! Answer again..!");
}

console.log("Correct Answer...");
*/

//STRINGS

//Q1

fullName = prompt("Enter the fullname :");
fullNameLength = fullName.length ;
userName = "@" + fullName + fullNameLength ;
console.log(userName);