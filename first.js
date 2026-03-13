/*
console.log("Hello there..!");
console.log("Nandini Sharma");

fullName="tony Stark";
console.log("fullName");
console.log(fullName);

price=99.99;
x=null;            //khali value h -empty
y=undefined;       // pata hi nahi h value kya h.- undefined 
console.log(price);
console.log(x);
console.log(y);
*/
/*
var age=23;         // var has problem - variable can be re-declared and updated.
var age=78;        
var age=67;

console.log(age);


let age=34;

age=45;                 //let= variable cannot b redeclared but can be updated.
console.log(age);


const age=23;            //const = variable cannot be redeclared or upadated.
console.log(age);
*/

//DATATYPE

let age=34;                           //Number datatype
let Name="Nandini";                   //String 

let isFollow=true;                  //Boolean - true  or  false --> without inverted commas .  isFollow --> Camel's Case

let x;                              //Undefined
let y=null;                         //Null --> written as null without inverted commas
 
let z=BigInt("1245");                //BigInt

let g = Symbol("Hello");              //Symbol

 
console.log(age);
console.log(Name);
console.log(isFollow);
console.log(x);
console.log(z);
console.log(g);

console.log(typeof(isFollow));               // typeof --> gives the type of data

const Pen = {                                 // Q1
    Name : "Parker Ball Pen",
    Rating : 4 ,
    isDeal : true ,                         //Object --> Key-value pairs --> : separated
    offer : 5 ,
    Price : 33  
};

console.log(Pen);


const Profile = {
    username : "Nishika",
    isFollow : true ,
    Followers : 567 ,
    Following : 34 , 
} ;

console.log(Profile);



