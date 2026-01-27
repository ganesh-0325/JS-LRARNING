// var myBestName ="Mr and Mrs yod.";
// myBestName="Mikasha";
// console.log(myBestName); // can reassign the value of variable by using var.

// const { Profiler } = require("react");

// const myBestName ="Mr and Mrs yod.";
// console.log(myBestName); // we can not reassigning the value of constant variable while using const keyword.

// var name =" game of thrones";
//  if (true){
//     var name ="avengers";
//     console.log(name);
    
//  } 
//  name =" friends";
//  console.log(name); // var is function scoped.\

// let keywords
//  let name="ganesh";
//  if (true){
//    let name ="janak";
//    console.log(name);
   
//  }
//  name ="krishna";
//  console.log(name);
 
// template strings
// let firstName="ganesh";
//  let lastName ="pathak";

//  let fullName =`${firstName } ${lastName}`;
//  console.log(fullName);
 

// let age =23;
// let myAge=`My name is ganesh and iam ${age} years old`;
// console.log(myAge);



// let about =function(name ,age ){
//    return`my name is ${name} and my age is ${age} years old`;

// }
// let myInfo=about("ganesh",23);
// console.log(myInfo);

//  function addition (a=12 ,b=12){
//    return a+b;

//  }
//  console.log(addition(12 ,13)); // if we pass any argument it will consider a default value.
//    console.log(addition()); // if we do not pass any argument it will consider default value.
 

// fat arrow function 
//  let add =(a,b)=>{

//   let result=`the total sum of ${a} and ${b} if ${a+b}.`;
//   console.log(result);
  

//  }
//  add(12,34);

//  if there is only one parameter we can remove parenthesis also

// let  square =x=> `the square  of ${x} is ${x*x}`;
// console.log(square(6));

// if the function body cody consists of a single expression then we can remove curly braces and return keyword also

// let product=(p,q)=> ` the product of ${p} and ${q} is ${p*q}`;
// console.log(product(12,12));


// if there are no parameters we can use empty parenthesis
//  let myName =()=>`My name is ganesh raj pathak and iam from dhangadhi kailali. `;
//  console.log(myName());

//  question 
// create a calculator using three arguments num1,num2 and operators(+,-,*)

// 

// let  calculator= (num1,num2,operator)=>{
//     switch(operator){
//         case '+':
//         return num1 +num2;

//         case '-':
//         return num1 -num2;
            
//         case '*':
//          return num1 * num2;
               
//         default:
//                 return "invalid number";


//     }
    
// }

// console.log(calculator(12,12,'+'));
// console.log(calculator(4234,456,'+'));







// ###########################
// NON CREDIT ECMASCRIPT
// ###########################

// Backtick
// const myName ="Ganesh";
// console.log(`my name is ${myName}`);


// array destructuring 
// const array=[1,2,3,4,5];
// const {value1, value2, value3, value4,value5}=array;
// console.log(array);
// Create a variable named city = "Kathmandu" & city2 = "Bhaktapur"
// Log: "Welcome to Kathmandu & Bhaktapur" using backticks and variable

const city1 ="Kathmandu";
const city2="Bhaktapur";
console.log(`${city1} and ${city2}`);




// object destructuring
// const obj ={name:"Ganesh",Location:"KTM"}
// const{name,Location}=obj;
// console.log(name,location);



// assign parameter values in  function
// function myName(name="Ganesh"){
//     console.log(name);
// }
// myName();
// myName("ram");

// spread operator
// const array1=[1,2,3,4];
// const array2=[...array1,"a","b","c"];
// console.log(array2);





// Rest parameter in function
// function numbers(...num){
//     console.log(num);
    

// }
// numbers(1,2,3,4,5);


// optional chaining
// const obj1={profile:{name:"ganesh"}};
// console.log(obj1.profile?.name);


// 1. Create a user object with no profile property
// 2. Safely access user.profile.name using optional chaining
