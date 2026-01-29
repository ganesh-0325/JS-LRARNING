// const array =[1,"Hari",{
//     Name :"ganesh",
//     address :"kathmandu"
// }];
 // console.log(array.pop());//! pop removes the last element 

 // console.log(array.push("iam intrested in music","pathak","america",100,true,false));
 // console.log(array);
 // console.log(array.pop());
// console.log(array);
//  !push adds elements at the end of the array

//! we can findout the length of the arrayusing the length/ property
// console.log(array.length);
// console.log(typeof(array));

// console.log(array[1]);
// const newarray=["ganesh","hari",[9,8,7,6],{
//     name:"Rajesh",
//     age:23,
//     address:"dhangadhi",
//     bloodGroup:"B+"
// },
// true,false
//     ];
// ! adding new elements 
//     console.log(array.push("raj","javascript","react"));
//     console.log(array);

// ! removing last elements
//     console.log(array.pop());
//     console.log(array);

//  ! length of the array
//     console.log(array.length);

//   ! console all array
//     console.log(array);
    

    
//     console.log();,
//     const girlName={
//         name :"sita",
//         address:"kathmandu",
//         age:12,
//         gender:"female"

//     };
// const myNames=["ganeah","ram","hari","shyam","krishna"];
//  myNames.splice(-1,0,girlName);
// console.log(myNames);

// here we can add a dictionary in a arraya using splice


// date =>learn yourself
// map=>learn yourself
// set=> Learn Yourself 


// create an array and print array elements randomly
const array = ['apple', 'banana', 'orange', 'mango', 'grape'];

const shuffled = [...array].sort(() => 0.5 - Math.random());

console.log(shuffled);



console.log(Math.floor(Math.random() * 5));

// check the result 
console.log(Math.floor(Math.random() * (5 - 1)) + 1);



// const arr = ['a', 'b', 'c', 'd'];
// const result = arr.slice(1, 3);

// console.log(result);
// console.log(arr);


const arr = ['a', 'b', 'c', 'd'];
const result = arr.splice(1, 3);

console.log(result);
console.log(arr);   //output :[ 'b', 'c', 'd' ] ,,,,  [ 'a' ]
                            

//     Create an array and print all its elements in random order.
const arry = ["apple", "banana", "orange", "mango"];

const randomOrder = [...arry].sort(() => 0.5 - Math.random());
console.log(randomOrder);


// Create an array and print any three random elements without repetition.
const array2 = ["apple", "banana", "orange", "mango", "grape"];

const result2 = [...array2].sort(() => 0.5 - Math.random()).slice(0, 3);
console.log(result);

/* 
1. Create an array with duplicate values and remove all duplicate elements.
*/
let a1 = [1,2,3,2,4,1];
console.log([...new Set(a1)]);

/*
2. Create an array and display only the duplicate elements.
*/
let a2 = [1,2,3,2,4,1];
let dup = a2.filter((v,i)=>a2.indexOf(v)!==i);
console.log([...new Set(dup)]);

/*
3. Create an array and count the frequency of each element.
*/
let a3 = ["a","b","a","c","b"];
let freq = {};
for(let x of a3){ freq[x]=(freq[x]||0)+1; }
console.log(freq);

/*
4. Create an array and reverse its elements without using reverse().
*/
let a4 = [1,2,3,4];
let rev = [];
for(let i=a4.length-1;i>=0;i--){ rev.push(a4[i]); }
console.log(rev);

/*
5. Create an array and find the largest and smallest elements.
*/
let a5 = [10,4,25,2,8];
let max=a5[0], min=a5[0];
for(let x of a5){ if(x>max)max=x; if(x<min)min=x; }
console.log("Max:",max,"Min:",min);

/*
6. Create an array and shuffle all elements randomly.
*/
let a6 = [1,2,3,4,5];
a6.sort(()=>Math.random()-0.5);
console.log(a6);

/*
7. Create an array and check whether all elements are unique.
*/
let a7 = [1,2,3,4];
console.log(new Set(a7).size===a7.length);

/*
8. Create an array and remove a specified element.
*/
let a8 = [1,2,3,4];
let rem = 3;
console.log(a8.filter(x=>x!==rem));

/*
9. Create an array and find the second largest element.
*/
let a9 = [10,5,20,8];
let u = [...new Set(a9)].sort((a,b)=>b-a);
console.log(u[1]);

/*
10. Create two arrays, merge them, and remove duplicate elements.
*/
let a10=[1,2,3], b10=[2,3,4];
console.log([...new Set([...a10,...b10])]);

/*
11. Create an array and rotate its elements by k positions.
*/
let a11=[1,2,3,4,5], k=2;
k%=a11.length;
console.log(a11.slice(-k).concat(a11.slice(0,-k)));

/*
12. Create an array and check whether two arrays are equal.
*/
let x=[1,2,3], y=[1,2,3];
console.log(x.length===y.length && x.every((v,i)=>v===y[i]));

/*
13. Create an array and print elements using random indexes.
*/
let a13=["A","B","C","D"];
for(let i=0;i<a13.length;i++){
  console.log(a13[Math.floor(Math.random()*a13.length)]);
}


    
    
    









