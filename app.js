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

let cash = 40;
let price = 40;

if (cash>price){
  let change=cash-price;
  console.log("your paid extra -here's "+change+" dollar change");
}else if (cash === price){
  console.log("you paid the exact amount, have a nice day!");
}
else{
  let shortage=price-cash;
  console.log("not enough money-you still owe "+shortage+" dollar");

}