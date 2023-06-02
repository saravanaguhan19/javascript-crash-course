// // string
// //way to write string

// console.log("hello");
// console.log("hello");
// console.log(`hello`);
// //accessing index of the string
// console.log("Hello World"[10]);
// //accesing .length property with string
// console.log("Hello World".length);
// let str="saravana";
// console.log(str.length);
// console.log(str[str.length-1]);

/**
 * Converting Temperatures
 *
 * celsius-to-fahrenheit formula
 *
 * F=C x 1.8 +32
 */

// let celsius =10;
// let fahrenheit = (celsius *1.8)+32;
// console.log(fahrenheit);

//if else practice
// let cash = 40;
// let price = 40;

// if (cash>price){
//   let change=cash-price;
//   console.log("your paid extra -here's "+change+" dollar change");
// }else if (cash === price){
//   console.log("you paid the exact amount, have a nice day!");
// }
// else{
//   let shortage=price-cash;
//   console.log("not enough money-you still owe "+shortage+" dollar");

// }

//ternary operator practice

// let money = 30;
// let velai = 40;

// let isStoreOpen = true;
// money >= velai && isStoreOpen
//   ? console.log("give receipt")
//   : console.log("do not give receipt");


//while loop example

// let count1 = 1;
// while (count1 <= 100) {
//   console.log(count1);
//   count1 =count1 + 1;
// }
// console.log("hi");


//for loop example 1

// for(let i = 1 ; i <= 20 ; i++){
//   if(i%3 === 0 && i%5 === 0){
//     console.log(`${i}--> frontend simplified`);
//   }else if(i%3 === 0){
//     console.log(`${i}--> frontend`);
//   }else if( i%5 === 0){
//     console.log(`${i}-->  simplified`);
//   }else{
//     console.log(`${i}-->${i}`);
//   }
// }

//for loop example 2

//Print out every character from the "frontend simplified "

// let str="Frontend Simplified";

// for(let i=0 ; i<str.length ; i++){
//   console.log(str[i]);
// }

/** create a function that converts celsius to fahrenheit formula 
 * 
 * celcius to Fahrenheit formula:
 * 
 * F= C x 1.8 +32
 * 
 * example
 * 
 * convertCelciusToFahrenheit(0)--> 32
 * 
 */

// function convertCelciusToFahrenheit(celsius){
//   let fahrenheit = (celsius*1.8)+32;
//   return fahrenheit;
// }

// console.log(convertCelciusToFahrenheit(30));

//array example

// let arr = [20,30,40,50,100];

// //first element of the array
// console.log(arr[0]);

// //last element of the array
// console.log(arr[arr.length-1]);

//filter example

// let grades = [ 'A', 'FAIL' , 'B' , 'FAIL'];
//longer format
// let newGrades = grades.filter((element)=>{
//   if(element !== 'FAIL'){
//     return true;
//   }
// })

//shorter format 

// let newGrades = grades.filter(element => element !== 'FAIL');
//using fort loop without filter method 
// let newGrades =[];
// for (let i = 0; i< grades.length ; ++i){
//   // console.log(grades[i]);
  
//   if (grades[i] !== 'FAIL'){
//     newGrades.push(grades[i]);
//   }
  
// }

// console.log(newGrades);

//array map example

/**
 * Turn each element in an array of dollars into cents
 * 
 * @example
 * [1,5,10,3] => [100,500,1000,300]
 * [0,10,20] => [0,1000,2000]
  */
//longer format 
let dollars = [1,5,10,3];

// let cents = dollars.map((element)=> {
//   return element*100;
// })


//shorter format
// let cents = dollars.map(element => element*100);
// console.log(cents);

//using for loop without map method 
let cents = [];
for (let i=0; i <dollars.length ; ++i) {
  cents.push(dollars[i]*100);
}
console.log(cents);