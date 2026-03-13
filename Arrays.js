/*arr1 = [34,56,78,98,65];

for (let i=0; i<arr1.length ; i++){
    console.log(arr1[i]);
}

for(let i of arr1){
    console.log(i);
}
    
//Q1: 
arr=[85,97,44,37,76,60];
let sum=0;
let count=0;
for (let i of arr){
    sum=sum+i;
    count++;
}
let avg=sum/count;
console.log("The avgerage of arr is: ",avg);

//Q2
array = [250,645,300,900,50];

for (let i=0; i<array.length ; i++){
    console.log("The price on each item will be: ",array[i]);
    array[i] = array[i] - 0.1*array[i] ;
    console.log("The discount on each item will be: ",array[i]);
}
console.log("The final price of item will be: ",array);


//Q3
Company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("The companies are:",Company);
//(a)
/*
removeCompany = Company.shift();
console.log("The new companies:",Company);

//(b)

Company.splice(2,1,"Ola");
console.log("The new companies:",Company);

//(c)
Company.push("Amazon");
console.log("The new companies:",Company);
*/