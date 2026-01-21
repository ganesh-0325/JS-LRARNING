// const array =["ganesh","hari",true ,false,200,1000,{
//     name:"virat",
//     caste:"kohli",
//     address:"dehli",
//     occupation:"crickter"
// }]


// removing the first elements
// array.shift();

// console.log(array

// );
// add elements at the first
// array.unshift("ram ","bahadur")
// console.log(array);

// concat method
// const newarray =["sumit","chaudhary",12];

// const mergearray =array.concat(newarray);
// console.log(mergearray);

// using slice methods

// console.log(array.slice(0,4));

// console.log(array.splice(1,4, "ganesh"));// removes elements from index 1 to 4 and adds "ganesh" at index 1
// console.log(array);


// using indexof method 
// const myName =["ganesh","hari","ram","dhyam","shyam","krishna"];
// console.log(myName.indexOf("krishna"));// returns the index of the element


// // using includes method/
// console.log(myName.includes("ganesh"));

// // changin the elements

// myName[2]="sumit";
// console.log(myName);

// const cities =["kathmandu","biratnagar","dhangadhi","pokhrara","butwal"];
// cities.splice(2,2,"laltipur","bhaktapur");
// console.log(cities)

// concatination of arrays 
// const array =[1,2,3,45];
//  const array2=["A","B","C","D"];
// const mergearray=array.concat(array2);
// console.log(mergearray);

// Slicing of  the array
// const array =[1,2,3,45]; 
// const newarray=array.slice(1,3);
// console.log(newarray);

// spslice of the array

// const array =[1,2,3,45]; 
// array.splice(2,2,"Ganesh","Pathak");
// console.log(array);


// includes method in array

// const array =[1,2,3,45];
// console.log(array.includes(2));
// console.log(array.includes(5));


// const array =[1,3,2,4,5,6];
// map()=>Creates a new array by applying a function to every element of the original array.
// const squareArray =array.map((data)=>data*2);
// console.log(squareArray);

// filter() =>Creates a new array containing only the elements that pass the condition.
// const evenNumbers =array.filter((data)=> data %2==0);
// console.log(evenNumbers);

// find =>find first elements that first element is matching condition
// const firstEven =array.find ((data)=>data %2 ==0);
// console.log(firstEven);

// array.some =>check isf any element is matching the condition 
// const hasEven =array.some ((data)=>data %2==0);
// console.log(hasEven);

// array.every=> checks if all elements are matching the condition 
// const allEven =array.every((data)=> data %2==0);
// console.log(allEven);

// forEach =>transfor data individually and return as a you with 
// const array=[1,2,3,4,5];
// const newArray=[];
// array.forEach((data,index)=>{
//     newArray.push(data*index);
// })
// console.log(newArray);





//  ######################################
//  MORE  ARRAY PRACTICE 
// #######################################
// SUNDAY TASK DAY TWO HOURS DAILY 



// Create an array of numbers from 1 to 10
// console.log(numbers);

// Use map() to create a new array where each number is doubled
const doubleNum=numbers.map((curElement)=>curElement*2)
console.log(doubleNum);

// / Use map() to create an array of strings like "Number: 1", "Number: 2", etc.
//  const numToString= numbers.map((curElem)=>{
   //    return `Number: ${curElem}`
   
   //  })
   
   //  console.log(numToString);
   
   // Use filter() to return only even numbers
   const evenNumber= numbers.filter((curElem)=> curElem %2==0)
   console.log(evenNumber);
   
   
   // Use filter() to return numbers greater than 5
   const graterThan =numbers.filter((curElem)=> curElem>5)
   console.log(graterThan);
   
   // Use find() to get the first number greater than 3
   
   const greaterThanThree =numbers.find((curElem)=>curElem>3)
   
   console.log(greaterThanThree);
   
   // Use find() to get the first number divisible by 4
   const divisiblByFour =numbers.find((curElem)=>curElem %4==0)
   console.log(divisiblByFour);
   
   // Use some() to check if there is any number less than 0
   const lessThanZero =numbers.some((curElem)=>curElem<0)
   console.log(lessThanZero);
   
   // Use some() to check if any number is greater than 8
   const greaterThanEight =numbers.some((curElem)=>curElem>8)
   console.log(greaterThanEight);
   
   // Use every() to check if all numbers are less than or equal to 10
   const equalToTen=numbers.every((curElem)=>curElem>=10)
   console.log(equalToTen);
   
   // Use every() to check if all numbers are positive
   const allPositive=numbers.every((curElem)=>curElem>0)
   console.log(allPositive);
   
   // Use forEach() to log each number multiplied by its index
   // const arr=[];
   // numbers.forEach((curElem,index)=>{
      //   arr.push(curElem*index)
      // })
      // console.log(arr);
      
      // Use reduce() to calculate the sum of all numbers
      
      const sum=numbers.reduce((prev, curr)=>prev+curr ,0)
      console.log(sum);
      
      // Use reduce() to find the maximum value in the array
      
      const numbers =[1,2,3,4,5,6,7,8,9,10];
      console.log(maximum);
      const maximum =numbers.reduce((prev,curr)=>prev > curr ? prev:curr,numbers[0])
      
      
      
      
      
      
      
      
      
      
      
      




// array.reduce =>reduces the arary into one 

// const array=[1,2,3,4,5]; 
// const INITIAL_VALUE=0;
// const reduceValue =array.reduce((preVal,currentValue)=>preVal+currentValue,INITIAL_VALUE);
// console.log(reduceValue);


// SEARCHING IN ARRAY

// for search we have indexOf lastindexOf and inculdes
// let myNumber=[1,2,3,4,5,6,7,8];
// // lest try indexof
// console.log(myNumber.indexOf(7,1));
// //   then lets try lastindexOf
// console.log(myNumber.lastIndexOf(7));
// // lets try includees
// console.log(myNumber.includes(8,5)); // (indexnumber,startingfrom)


// Lets example a user want to delete  the value 6 from the array
// const value=6;
// const numbres=[1,2,3,6,4,5,6,7,8];
// const updatedVal=numbres.filter((curVal)=>{
//     return curVal !==value;
// });
// console.log(updatedVal);

//  find the unique values from the data 

// const values=[1,2,3,4,5,6,7,6,8,9];
// const uniqueVal=values.filter((currEle,index,arr)=>{
//     return arr.indexOf(currEle) ==index;

// })
// console.log(uniqueVal);


// how to sort and compare an array

// let fruits=["apple","banana","grapes","cabbage","tomato"];
// console.log(fruits.sort());


//   to sort the number compare call back function
// COMPARE CALLBACK FUNCTION

//  const values=[1,2,3,4,5,6,7,6,8,9];
//  values.sort((a,b)=>{
//     if(a>b) return 1;
//     if (b>a) return -1;
//  })
//  console.log(values);
 



// using the map method write a funxtion that takes an arrray of the string and returns a new array where each steing is capitalized

// const words=["apple","banana","mango","jackfruit","cucumber"];
// const result=words.map((currElement)=>{
//     return currElement.toUpperCase();

// })
// console.log(result);


// qn square the number only those who are even numbers
// const data =[1,2,3,4,5,6,8,7,9,10];
// const evenSquare=data.map((currElement)=>{
//     if(currElement %2 ==0){
//          return currElement*currElement
//     }
// }).filter((currElement)=>currElement!=undefined)
// console.log(evenSquare);

 // REDUCE METHOD 

//  const productPrice =[399,9679,979,685,868,5867];
//  const totalPrice =productPrice.reduce((accum,currElement)=>{
//     return accum +currElement;

//  },0)
//  console.log(totalPrice);
