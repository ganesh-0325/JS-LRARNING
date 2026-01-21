// function greetUser(name ,callBack){
//     console.log(`Hello ${name}`);
//     callBack();
// }

// function callMe(){
//      console.log(`Its a callback function `);
// }

// greetUser(`Peter`,callMe);




// setTimeout( ()=>{
//     console.log("Hello World");
    
// },5000); // ! starts to run in 5 seconds 




// setInterval(()=>{
//     console.log("HEllo world 2!");
    
// },2000); //* Runs in every 2 seconds 



// !###########################
//  !Callback hell
// !##########################

// *promise in js
// *like a real promise
// *resolve ->you fulfill your promise 
// *Reject =>you did not fulfill your promise



// const result = new Promise((resolve, reject) => {
//     const gift = "Mobile";

//     if (gift.startsWith("Mobile")) {
//         resolve("Thank you for the gift!");
//     } else {
//         reject("I want Mobile as a gift");
//     }
// });

// result
//   .then((value) => {
//       console.log(value, "first");
//       return "I always  appreciate  your gifts "; //! it will be passed to the next then or   it creates a new promise
//   })
//   .then((value) => {
//       console.log(value, "second");
//   })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("program executed successfully!"));



// async function getResult(){
//     const result = new Promise((resolve, reject) => {
//     const gift = "Mobile";

//     if (gift.startsWith("Mobile")) {
//         resolve("Thank you for the gift!");
//     } else {
//         reject("I want Mobile as a gift");
//     }
// });
//    try{
//     const message =await result;
//     console.log(message);
// }
// catch(error){
//     console.log(error);
// } finally{
//     console.log("program executed successfully"); 
// }
// };
// getResult();

// const letters=new Set(["a","b","c"]);
// letters.forEach((values)=>{
//    console.log(values);
// })


// const promise1=new Promise((resolve,reject)=>{
//    Do an async task 
//    DB calls ,cryptography network calls 
//    setTimeout(()=>{
//       console.log(" async task is complete");
//         resolve()
//    },1000);
 
// });
// promise1.then(function(){
//    console.log("async is consumed");
   
// })

// new Promise ((resolve,reject)=>{
//    setTimeout(()=>{
//       console.log("promise is consumed ");
//       resolve()

//    },2000)

// }).then(()=>{
//    console.log("promise is always consumed");
   
// });

// const promiseThree =new Promise(function(resolve,reject){
//    setTimeout(function(){
//       resolve({
//          myName:"Ganesh",
//          address : "Kathmandu"
//       });
//    },2000);

// });
// promiseThree.then(function(values){
// console.log(values);

// });






// const promiseFrour =new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       let name =true;
//       if (name){
//          resolve({usrname:"ganesh",address:"Dhangadhi",email:"pathakganesgh062@gmail.com"});
//       }else{
//          reject("ERROR: Something went wrong");
//       };
//    },1000);
// });
// promiseFrour
// .then((user)=>{
//    console.log(user);
//    return user.usrname;
// })
// .then((username)=>{
//    console.log(username);
   
// })
// .catch((error)=>{
//    console.log(error);
   
// })
// .finally((message="the code get executed")=>{
// console.log(message);

// });





// !Callback
//! 1. Create a function greetUser that accepts a name and a callback function
//! 2. Inside greetUser, log "Welcome <name>!" and call the callback

// function greetUser(name, callback) {
//   console.log(`Welcome ${name}!`);
//   callback();
// }

//! 3. Create a callback function showTime that logs the current time using new Date().toLocaleTimeString()
// function showDate() {
//   console.log(new Date().toLocaleTimeString());
// }
// !4. Call greetUser("Ram", showTime)
// greetUser("Ram", showDate);


//! 5. Create a function processOrder that logs "Processing your order"
// function processOrder(message, callback) {
//   console.log(message);
//   callback();
// }

// ! 6. Create a function confirmOrder that logs "Order confirmed!"
// function confirmOrder() {
//   console.log("Order confirmed!")
// }


// ! 7. Pass confirmOrder as a callback to processOrder

// ! 8. Call processOrder("Processing your order", confirmOrder)
// processOrder("Processing your order", confirmOrder);

// Promise
// !1. Create a Promise called myPromise that resolves with "Resolved successfully!" after 2 seconds
// const promiseOne =new Promise ((resolve ,reject)=>{
//   setTimeout(()=>{
//     resolve("Resolved successfully!");

//   },2000);
// });
// !. Use .then() to log the resolved value
// promiseOne
// .then((value)=>{
//   console.log(value);
  
// })
// ! 3. Add a .finally() that logs "Finished executing promise"
// .finally(()=>{
//   console.log("finished executing promise");
  
// });


// !4. Create a Promise that rejects with "Something went wrong" if a variable is not equal to 10
// const promiseTwo = new Promise ((resolve ,reject)=>{
//   let variable=12 ;
//   if(variable!==10){
//     reject("something went wrong");
//   }else{
//     resolve("done!");
//   }

// });

// !5. Use .catch() to handle the error and log it
// promiseTwo
// .then((result)=>{
//   console.log(result);
  
// })
// .catch((error)=>{
//   console.log(error);
  
// });

// Async/Await
// !1. Create a function named getEvenNumber that returns a Promise
//    - Resolve if number is even
//    - Reject otherwise
// async function getEvenNumber(){
//   const result =new Promise((resolve ,reject)=>{
//     let number=12;
//     if(number %2 ==0){
//       resolve("Number is finally even!");
//     }else{
//       reject();
//     }

//   });
//   ! 2. Use try/catch to await getEvenNumber() and log the result or error
// ! 3. Always log "Number is finally even!" in the finally block

//   try {
//     const evenNum =await result;
//     console.log(evenNum);
//   } catch (error) {
//     console.log(error);

//   }

// };
// getEvenNumber();


// !4. Create another async function loadData that waits 2 seconds and logs "Data loaded!"
// const loadData =async()=>{
//   const promiseResult =new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//       console.log("Data Loaded!");
//       resolve();
//     },2000)
//   });
// try {
//   const result =await promiseResult;
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }
// };
// loadData();




// !Or more precisely 
// const loadData =async()=>{

// try {
//   await new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//       console.log("Data Loaded!");
//       resolve();
//     },2000)
//   });
// } catch (error) {
//   console.log(error);
// }
// };
// loadData();