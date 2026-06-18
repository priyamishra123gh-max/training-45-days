// TASK:2
// PROBLEM:1
// NUMBER TO A STRING
let num = 255;
console.log(String(num))
// STRING TO A NUMBER
let str = "255";
console.log(Boolean(str))
// Final Boolean Result=true
// PROBLEM:2
let isRead = "255"
console.log(String(isRead))
// PROBLEM:3
let s1 = " Hello ,World! ";
console.log(s1.trim().toLowerCase())
// PROBLEM:4
console.log("5"==5);
console.log("5"===5);
// PROBLEM:5
// SIX FALSY VALUE IN Java Script
false
""
NaN
undefined
0
null
// PROBLEM:7
console.log("priya");
console.log(20);
console.log("javaScript")
// PROBLEM:8
// ADDITION
let a=48;
let b=24;
console.log(a + b);
// SUBTRACTION
console.log(a-b)
// MULTIPLICATION
console.log(a/b)
// MODULUS
console.log(a%b)
// PROBLEM:9
let a1 = "1";
let b1 = 5;
// NORMAL ADDITION
console.log(a1 + b1);
// EXPLICIT TYPE COERCION
console.log(Number(a1) + b1)
// PROBLEM:10
// IMPLICIT TYPE COERCION
// JavaScript automatically converts one data type to another.
// No coversion function in used}.Done automatically by JavaScript
// Example:-
let a2="5"*2
console.log(a2)
//explicit type coercion
// The programmer manually converts one data type to another.
// Conversion functions like Number(),String(),or Boolean() are used.
// Done  intentionally by the programmer.
// Example:-
let a3="5"
let num1=Number(a3)
console.log(num1)
// PROBLEM:11
let s3 = "javascript";
let result = s3.charAt(0).toUpperCase() + s3.slice(1);
console.log(result);
// PROBLEM:12
let email = "user@example.com";
let domain=email.split("@")[1];
console.log(domain)
