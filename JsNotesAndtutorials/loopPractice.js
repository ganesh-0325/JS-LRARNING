for (i=1;i<=10;i++){
    console.log(i);   
}


for (i=10;i>0;i--){
    console.log(i);   
}


let i=1;
while(i<=10){
    if(i%2==0){
        console.log(i);
       
    }
    i++ 
}

// Create an object with 3 properties (e.g. name, age, country)
// Use for...in to log all keys and their values from the object

const newObject={
    myName:"Ganesh",
    age:19,
    country:"Nepal"
};

for( let values in newObject){
    console.log(values,newObject[values]);
    
}


// Create an array with 5 numbers
// Use for...of to print each number from the array

const array=[1,2,3,4,5];
for(let num of array){
    console.log(num); 
   
}

// Create a string "Hello"
// Use for...of to print each character from the string

const greet="Hello";
for(let char of greet){
    console.log(char);
}