// !this keywords refers to the fifferent objects depending on how its used 

//* in an object method this refers to the object
// ?Alone , this refers to the golbal objects
// !in a function this refers to the folbal objects
// *in a function  in a strict mode this is undefined 
// ?in an event this refers to ehe element that received the event 
// !methods like useCallback(),apply() and bind can refers this to any object



// !interview question => Object comparision 
// *write a function that compares two objects to determine if hey have the same properties and values 
    
// let objA ={name:"Alice",age :26,city:"new york"};
// let objB ={name:"Alice",age :26,city:"new york"};
// let objC ={name:"Bob",age :30,city:"san Francisco"};

// const areObjectEqual=(obj1,obj2)=>{
//     let ob1=Object.keys(obj1);
//     let ob2 =Object.keys(obj2);

//    if(ob1.length!==ob2.length){
//     return false;
//    };

//    for (const key in obj1) {
//     if (obj1[key]!==obj2[key]){
//         return false;
//     };
    
    
//    }
//    return true;

// };

// console.log(areObjectEqual(objA,objB));
// console.log(areObjectEqual(objA,objC));



// !question object transformation 

// ?write a function that transfer a arrayy of object into the object where the keys are the objects id 

let inputArray=[
    {
        id :1,name :"ganesh"
    },{
        id :2,name :"Hari"
    },{
        id :3,name :"Ram"
    }
]

const arrayToObj=(arr)=>{
    let obj ={};
    for (const keys of arr) {
        // console.log(keys.id,keys);
        obj[keys.id]=keys;
    };
    return obj;
};

console.log(arrayToObj(inputArray));


