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


//  !How Do You Work with Accessing Properties from Nested Objects and Arrays in Objects?

const person4 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person4.contact.phone.work); // "098-765-4321"

//** */ You can also use bracket notation, which is particularly useful when property names include spaces or special characters, or when you're using variables to access properties:

// console.log(person['contact']['phone']['work']);


// an object containing data in the form of  aray 
const person5 = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
// we can access data like this 
console.log(person5.addresses[0].street);


// practice


function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));

//  just a logical question

const arr =[];
arr[5]=1;
console.log(arr[0]);

console.log(arr.length);


// creating an oject and trying to accessing the elements of the objects

const biodata={
  name:"ganesh",
  gender:"Male",
  nationality:"nepali",
  dateOfBirth:20620235,
  Address:"Doti",
  "nid information":[
    {
      nifNumber:12456457567,
      citNumber:3567576787689

    },{
      "mother`s name":"Niranjana ddevi pathak",
      age:55
    }

  ]


}
console.log(biodata["name"]);
console.log(biodata.dateOfBirth);

// *now adding the some elements to the objects
biodata.age=20;
console.log(biodata);
// or 
biodata["father`s name"]="Shankar Raj pathak";
console.log(biodata);


console.log(biodata["nid information"]);

// Add a function to te object 
biodata.greet=function(){
  return"my name is ganesh raj pathak";
  

}
console.log(biodata);

// We can access the methods like this 
console.log(biodata.greet());

//! we can add dynamic type in objects  

let idType = "EmployeeID";

const student = {
  [idType]: "ADSFf4654",
  sName: "harry",
  sAge: 20,
  isStudent: true,
  section: "A21",
  intro: function () {
    console.log(
      `hey my ${idType} is ${student[idType]} my name is ${student.sName}`
    );
  }
};

student.intro();









