// what we will cover 
// string and properties
// string search methods
// escape character
// extracting strings parts
// replacing string contents
// extracting string characters
// other useful methods

// string in js is fundamental data types that represents sequences of characters

// string property 
// lrngth property that defines the length of the strings

// let string ="ganesg raj pathak"
// let len=string.length();
// console.log(len);

// STRING SEARCH METHODs
// indexof()=>written the index of the string (position)
// let string ="ganesg raj pathak";
// console.log(string.indexOf("raj"));

// Array.form() method returns an array from any object with  a length property
// it converts a string into an array

// let string ="ganesg raj pathak";
// let strArr =Array.from(string);
// // console.log(strArr);
// // here we converted string into arrya now we can use map method to find yhe index of each and every elements int the array
// let arrMap =strArr.map((currElements,index)=>`${currElements} at index ${index}`)
// console.log(arrMap);


// LastindexOf() return the index of the last concurrent of a specified text in a string
// let text ="hello everyone my name is ganesh raj pathak";
// let index =text.lastIndexOf("pathak") ;
// console.log(index);


// let arr =Array.from(text)
// console.log(arr);
// let armap=arr.map((curElem,index)=>`${curElem} is in ${index}`)
// console.log(armap);

// search()=> search a string for a string (or regular compression ) and returns thje position of the match

// returns the index of where the first match is found. teturns -1 if no match is found/
// it is also case sensitive
// let myName="Ganesh Raj Pathak";
// console.log(myName.search("R"));
// // here returns -1 because there is not the matching character that is searching for 
// console.log(myName.search("o"));
// important  notes
// the search() method can not take a second start position arguments
// the indexOf () method cannot take powerfull search values(regular expression)
// they accepts the same arhuments (parameters  ) ,and returns the same values



// match() method => retuirns the array of the matched values or null if no match is found
//    let text ="hello javaScript welcome to best javaScript course in the world";
//    let result =text.match(/javaScript/g) // when we pass g that is global variable
//    console.log(result);
   

// matchAll()=> returns an iterators of all matches proving detail information about each match returns an empty iterator if no match is found

//    let text ="hello javaScript welcome to best javaScript course in the world";
//    let result=text.matchAll(" javaScript")
//    console.log(...result);

// //    OR WE CAN ALSO USE THE FOR OF LOOP TO GET ANSWER
// for (const elements of result) {
//     console.log(elements);
//     // if we dont need other this just the javascript we can use indexing
//     console.log(elements[0]);
    
// }


/// starts with and endswith 
// writes the answer in terms of true or fales
//  let text ="hello javaScript welcome to best javaScript course in the world";
   
//  let result =text.startsWith("hello")
//  let result1 =text.endsWith("world")
//    console.log(result,result1);


// #####################################

// EXTRACTING THE STRINGS PARTS

// ######################################


// a) slice() extracts a part of the string and returns the extracted part in a new string

// counts from zero but extract up to but not including indexEnd

// let myName ="ganesh raj pathak"
// console.log(myName.slice(0,6));
// console.log(myName.slice(6)); // returns all the elements after 6


// substring => :extract the portion of the string based on strating and ending index

// substring if similar to slice .The difference is that start and end vales less that 0 are treated as a 0 in sybstring 


//    ######################
//    QUESTION
//    #####################


//  what is the outputt of the following 

//  let text ="hello javaScript welcome to best javaScript course in the world";
// console.log(text.slice(1));
// console.log(text.replace("h","H"));
// console.log(text.substring(1));

// ######################
// EXTRACTING THE STRING CHARACTER
// ########################

// there are are three methods for extracting the string characters
// the charAt method
// The charCodeAt 
// the at method
