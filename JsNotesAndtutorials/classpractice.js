

// Create a variable named city = "Kathmandu" & city2 = "Bhaktapur"
// Log: "Welcome to Kathmandu & Bhaktapur" using backticks and variable
const city1 ="Kathmandu";
const city2="Bhaktapur";
console.log(`${city1} and ${city2}`);

// Create an array [100, 200]
// Destructure the first and second values
// Log those destructured values
const array =[100,200];
const {first ,second} =array;
console.log(array);

// Create an object { product: "Mobile", price: 20000 }
// Destructure the product and price into separate variables
// Log product and price

const object ={
    product :"Mobile",
    price :20000
};
const {product, price}=object;
console.log(product,price);


// Create a function called sayHi that takes a name and place with
// default values name = "John Doe" and place = "kathmandu"
// Inside the function, log: "Hi, <name>. I am from <place>"
// Call the function once with a name and place, once without a name and place
// function sayHi(name="John dor",place="kathmandu" ){
//   console.log(`hi ${name}.Iam from ${place}`);
  
// }
// sayHi();


// Create array one = [1, 2]
// Use spread operator to fetch all data from array one to array 2 and add further data
// Log array two
// const array=[1,2];
const array3=[...array,"ganesh","Raj","Pathak"];
console.log(array3);

// Create user = { username: "admin" }
// Use spread operator to fetch all data from user to user2 and add further data
// Log newUser

const user ={username :"admin"};
const user2={...user,password:"ABCD"}
console.log(user2);



// Create a function called multiplyAll(...nums)
// Return the product of all numbers using reduce
// Call multiplyAll with 2, 3, 4.

function multiplyAll(...numbers) {
  return numbers.reduce((prev, curr) => {
    return prev * curr;
  });
}

console.log(multiplyAll(1, 2, 3));


// 3. Set loginStatus = undefined
// 4. Create status = loginStatus ?? "Offline" and log it




// 5. Create a variable msg = "" and fallback = msg || "No message"
// 6. Log fallback

// const  msg = "";
// const fallback = msg || "No message";
// console.log(fallback); 


// 7. Create isLoggedIn = true
// 8. Show a welcome message only if isLoggedIn is true using &&

// let isLoggedIn = true;
// isLoggedIn && console.log("Welcome! you guys in my js course it is the best course in the universe");


// 9. Convert each of these to boolean using !! and log:
//    - ""
//    - "ok"
//    - 0
//    - 100
// 9. Convert each value to boolean using !! and log

// console.log(!!"");     
// console.log(!!"ok");  
// console.log(!!0);     
// console.log(!!100);   





