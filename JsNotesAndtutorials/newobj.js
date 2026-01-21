const newProfile= {
    name :"ganesh",
    age:12,
    location:"dhangadhi",
    gender :undefined,
    city :null,

}

// change those values in keys
// add new keys and values inside object 
// console all keys and values inside objects
// console all values inside object with object destructuring


newProfile.age =30;
newProfile.gender="male";

console.log(newProfile["gender"]);


console.log(newProfile);
console.log(newProfile["name"]);

 const objkey =Object.keys(newProfile);
 const objval =Object.values(newProfile);
 console.log(objval);
 console.log(objkey);

//  consloe all keys values inside object
// console.log (Object.keys("name"));
//  console all keys and values inside objects


    //  object destucturing 
    // const {name,age,location,gender,city} =newProfile;
    // console.log(name,age,location,gender,city);


 
 
 

  