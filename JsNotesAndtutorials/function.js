// function add(num1,num2){
//     return num1 +num2
   


// }
// const result = add(90 ,70);
// console.log("the result is " ,result);

 
//  const add =( num1 ,num2)=>{
//     return num1 + num2;
//   }
//   const result= add(80,60);
//   console.log(result);
  

// const greet=(name)=>{
//  console.log("hello "+ name +" welcome to my new javascript course which is best ever course inthe world.");
 
// }
// greet("Ganesh");


// write a function to reverse a given string without using the built in reverse function
// const isReverse=(str)=>{
//     let reverse="";
//     for( let char =str.length -1; char >=0; char--){
//         // console.log(str[char]);
//        reverse +=str[char];

        
//     }
//     return reverse;
// }
// console.log( isReverse("GANESH PATHAK"));


// 

// declare the function if the given string is palendrome or not 

// const isPalendrome  = (string) => {
//     let palindrome="";
//     for ( let char =string.length-1;char>=0; char--){
//         palindrome+= string[char];
//     }
//     if(string ===palindrome) {
//         console.log(" thhe word is palindrome");
        
//     }
//     else{
//         console.log(" the word is not palindrome.");
        
//     }
// };
// isPalendrome("level");


// const name =[];
// console.log(typeof name);
// console.log(Array.name);
// Array("ganesh");



//! arrofunction  and this 

// const studentInfo={
//     username:"ram bahadur",
//     section:"A21",
//     greeting:function(){
//         console.log(` Hello ${this.username},Welcome to you in our college.`);
       
        
        
//     }

    
// }
// studentInfo.greeting();

// studentInfo.username="Ganesh Raj";
// const result =studentInfo.greeting();


// const  result =()=>{
//     const name =" ganesh rajpathak";
//     console.log(`hello ${name}`);
//     console.log(this);   //* this ue garda just yek empty arrray dinx 
    
    

// }
// result();


//! if arrow function lai yek line ma run garnu lai implicit return bhaninxa ra yo ma no need to return the return key word  feri parenthesis use garda hamile curly braces use na garda ni hunxa so yo chai react ma dherai kam lagxa object lai return garda pani parenthesis use garinxa

// for eg .
const objReturn=()=>({name:"Ganesh",isMarried:false});

console.log(objReturn());

//? here we can return our objects inside out arrow function 


 
const arr =[1,2,3,5,7,9];
 const result=arr.forEach((num)=>{
    console.log(num);
    
 });



//  ! immediately invoked  function 
// ?function lai parenthesis ma  wrap garne ra feri aarko parwnthesis use 
const coffe=(()=>{
    console.log("lets have some coffee during the works");
    
})();
// or 

// ? when having parameters
(function increment(value){
     console.log(value +2);
     
})(12);


//? when have to return the values 
const value2 = (function (x) {
  return x * 2;
})(5);

console.log(value2); // 10

