// !1: for -of -loop => Also known as iterable

// * It is used to iterate over the value of an iterable object, such as arrays, or other iterable objects.

// const array =["ganesh","ram","hari","shyam","prakash","sita"];


// for (let names of array){
//     console.log(names);
    
// }

//! For in loop
// *it is used to iterate over the property of an object or index of an array it gives the index of the array

// const array =["ganesh","ram","hari","shyam","prakash","sita"];
// for (let items in array) {
//     console.log(items);

// }

//! for each loop
// *it is used to iterate over the elements of an array 

// const array =["ganesh","ram","hari","shyam","prakash","sita"];

//! syntax foech loop 
// array.forEach (function (currentValue,index,array){
// ! your logic will writen here 
// },thisvalue );

//  breakdown of each TextMetrics
//  array :the array on which the for each method is called 
//  callback : a function tha will be called once for each element in the array.
//  currentValue :
//  the current element being processed in the array.
//  index :optional the index of the current element being processed in the array.
//  array;:the array foreach was called upon
//  thisValue : a value to use as this when executing the callback function.

// syntax using fat arrow function 

// array.forEach((currentValue,indexnarray)=>{
//     //your logic should be written here 
// },thisValue);

//! example
// const array = ["ganesh", "ram", "hari", "shyam", "prakash", "sita"];

// array.forEach((currentValue, index) => {
//     console.log(`${currentValue} is at index of ${index}`);
// } );

// Map Functioff
// it is used to iterate over the elements of an array and creates a new array with the results of the provided function applied to each elements.


// *write a program to multiply current elements by 2
// *by two methods using foreach

// const numbers =[1,2,3,4,5,6,7];
// numbers.forEach((curElem)=>{
//     console.log(`the multiplication of the ${curElem} by 2 is ${curElem *2}`);
    
// })
// *using map function
// const numbers =[1,2,3,4,5,6,7];
// const multiplyby2=numbers.map((currElements)=>{
//     return currElements*2;
// })f
// console.log(multiplyby2);

// by  using this method we can create a new array without modifying the origional array 

// usecase 

//forEach:
//  used when you want to iterate over the array is element and perform an action on each element ,but you dont need to new array.

// map:
// used when you want to create a new array based on the transformation of each elements in the origional arraygit


