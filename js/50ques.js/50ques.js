//QUES1) Declare name, age and city using let and log all three in one console.log() statement.
let name = "priya";
let age = "20";
let city = "hoshiarpur";
console.log("Name:",name,"Age:",age,"City:",city);
//QUES2) Convert the string "100" to a number using number(), parseInt(), and the unary + operator.log all three result
// string to number
let string = "100";
console.log(Number(string));
// String to parseInt
let string1 = "100";
console.log(parseInt(string1))
//  string to unary + operator
let string2 = "100";
console.log(+string2);
// QUES3)Convert the values 0, 1, "", and "hello" to booleans. log each result.
// 1)
let value = 0;
console.log(Boolean(value));
// 2)
let value1 = 1;
console.log(Boolean(value1));
// 3)
let value2 = "";
console.log(Boolean(""));
// 4)
let value3 = "Hello";
console.log(Boolean(value3));
// QUES4)
// Find maximum number of the numbers 5, 2, and 8.
let maximum = Math.max(5, 2, 8);
console.log(maximum);
// ques6)
// Find the length of the string "abcdefgh" and convert it to uppercase.
let value4 = "abcdefgh";
console.log(value4.length)
console.log(value4.toUpperCase())
// QUES7)
//Replace all occurrences of "a" in "abcad" with "_".
let value5 = "abcad";
console.log(value5.replace("a","_"))
// 8. Log the result of 10 + "5", 10 - "5", 10 * "5", and 10 / "2". Observe the output.
console.log(10 + "5",10 - "5", 10 * "5", 10 / "2" )

// 9. Use the ** (exponent) operator to calculate 2 to the power of 10.
console.log(2**10)

// 10. Given a number x, return true if it reads the same forward and backward (palindrome); otherwise return false.
// ANS)

// 11. Write an if/else statement that checks if a person's age is 18 or above and logs either "Adult" or "Minor".
// ANS)
let age1 = "18"
if(age1>=18){
    console.log("adult")
}else{
    console.log("minor")
}
// 12. Write an if/else if/else statement that takes a score and logs:
// A for 90+, B for 70+, C for 50+, and Fail otherwise.
let percentage="92";
if(percentage>=90){
    console.log("GRADE A")
}else if(percentage>=70){
console.log("GRADE B")
}
else if(percentage>=50){
    console.log("GRADE C")
 } else{
console.log(Fail)
}
// 13. Write a switch statement that takes a day number (1–7) and logs the name of the day.
let day = 8;
switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday") 
        break;   
    case 3:
    console.log("wednesday")
    break;
case 4:
    console.log("thursday")
    break;
case 5:
    console.log("friday")
    break;
    case 6:
    console.log("saturday")
    break;
    case 7:
    console.log("sunday")
    break;
    default:
    console.log("not a valid day")
}    
// 14. Write a switch statement that takes a traffic light color ("red", "yellow", "green") and logs the appropriate action.
let traffic = "yellow";
switch(traffic){
case "red":
    console.log("stop!")
    break;
case "yellow":
    console.log("get ready!") 
    break;
case "green":
    console.log("go!") 
    break;     
}
// 15. Merge two sorted arrays into one sorted array.


// 16. Write a for loop that logs only even numbers between 1 and 20.

for(i=0; i<=20; i++){
    if(i%2==0){
 console.log(i);
}
}
// 17. Write a for loop that calculates the sum of numbers from 1 to 100 and logs the result.
let sum=0;
for(i=0; i<=100; i++){
    sum=sum + i;
}
    console.log(sum);

// 18. Combine two strings: let a = 'table'; let b = 'chairs'; using the concatenation operator.
// ANS)
let a = 'table';
let b = 'chairs';
concatenate = a + b;
console.log(concatenate)
// 19. Write a while loop that keeps doubling a number starting from 1 until it exceeds 1000. Log the final number.

// 20. Use the Date object to log today's full date and time.
// ANS)
// 21. Use the Date object to log the current year, month, and day separately.

// 22. Calculate how many days are left until New Year using the Date object.

// 23. Write a named function called greet that takes a name as a parameter and logs "Hello, [name]!".

// 24. Write an anonymous function stored in a variable called multiply that takes two numbers and returns their product.

// 25. Write an arrow function called square that takes a number and returns its square.

// 26. Write a function called isEven that takes a number and returns true if it is even and false if it is odd.

// 27. Write a function calculator that takes two numbers and an operator (+, -, *, /) and returns the result.

// 28. Write a function that takes another function as a callback and calls it after logging "Starting task...".

// 29. Create an array of 5 fruit names. Log the first and last item using their index.

// 30. Find the length of an array and log the last element using the length property.

// 31. Use push() to add two items to the end of an array and log the updated array.

// 32. Use pop() to remove the last item from an array and log both the removed item and the updated array.

// 33. Remove the first item and add a new item at the beginning. Log the array after each step.

// 34. Use forEach() to loop through an array of numbers and log each number multiplied by 2.

// 35. Use map() to create a new array where each number in [1, 2, 3, 4, 5] is multiplied by 10.

// 36. Use filter() to create a new array of only even numbers from [1, 2, 3, 4, 5, 6, 7, 8].

// 37. Use reduce() to calculate the total sum of [10, 20, 30, 40, 50].

// 38. Use find() to get the first number greater than 15 from [5, 10, 18, 22, 3].

// 39. Use some() to check if any number in [1, 3, 5, 7, 8] is even.

// 40. Use every() to check if all values in [2, 4, 6, 8] are even.

// 41. Create a student object with properties: name, age, grade, and passed. Log the whole object.

// 42. Access each property of the student object using both dot notation and bracket notation.

// 43. Add a new property school to the student object after it is created. Log the updated object.

// 44. Use Object.keys() on the student object and log all the keys.

// 45. Use Object.values() on the student object and log all the values.

// 46. Use Object.entries() to print all keys and values.

// 47. Write a function checkObject(obj) that returns:
// - "Frozen" if the object is frozen
// - "Sealed" if the object is sealed but not frozen
// - "Normal" otherwise

// 48. Write a function that returns the number of properties in an object without using Object.keys().

// 49. Using Object.entries(), write a function that returns the key whose value matches the given value.

// 50. Compare two objects using 
