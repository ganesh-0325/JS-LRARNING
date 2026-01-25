// const personDeatails ={
//     name :"Ganesh ",
//     age :20,
//     location :"kathmandu",
//     "user name":"ganesh raj",
//     height:"5.5 fit",
//     gender: male,
//     city :null,

// }

// const {name,age, height, lovation}= personDeatails;
// console.log(name1);

// console.log(personDeatails["name"]);
// console.log(personDeatails["age"]);
// console.log(personDeatails["height"]);
// console.log(personDeatails["gender"]);
// console.log(personDeatails["user name "]);

// personDeatails.gender="male";
// personDeatails.name="Ganesh raj pathak";
// console.log(personDeatails);

// extract list of keys and values inside objects
// const objkey =Object.keys(personDeatails);
// const objvalue =Object.value(personDeatails);

// console.log(objkey,objvalue);



//! Bracket notation is more flexible than dot notation because it allows you to use property names that aren't valid JavaScript identifiers
const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]);  // World

// ! Another advantage of bracket notation is that it allows you to use variables to access properties dynamically:

const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland


                //  **How Can You Remove Properties from an Object?
  const person1 = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person1.job;

console.log(person1.job);


// !Another way to remove properties is by using destructuring assignment with rest parameters. This approach doesn't actually delete the property, but it creates a new object without the specified properties:


const person2 = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person2;

// { name: "Bob", age: 25 }
console.log(remainingProperties);

//! create an object and then delete the object elements in various ways
const data ={
    "my name":"ganesh",
    address:"Nepal",
    profession:"student",
    age:12
};

//  let propertyNames="my name";
//  console.log(data[propertyNames]);
 // ** way 1 to remove 
// delete data.age;
// console.log(data);

// ** way 2 
 
const {address,...newProperty}=data; // so from here address will be removed or the new array made named newProperty without address 
console.log(newProperty);



               // !  How to Check If an Object Has a Property?

//*  hasOwnProperty() method.
const person3 = {
  name: "Alice",
  age: 30
};


console.log(person3.hasOwnProperty("name")); // true
console.log(person3.hasOwnProperty("job")); // false

//   another is in operator 
 console.log("name" in person3);

 //* The third method involves checking if a property is undefined.

 const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false

//However, this method can give false negatives if a property explicitly has the value undefined.

