//PROBLEM:1
 let temperature = 15;
if (temperature > 35) {
    console.log("Hot");
}else if (temperature > 20){
console.log("Warm")
}
else if (temperature > 10){
console.log("Cool")
} else{
    console.log("Cold")
}
//PROBLEM:2
// for loop (known number of iterations)
for (let i = 1; i <= 2; i++) {
    console.log(i);
}

// while loop (condition-based)
let j = 1;
while (j <= 2) {
    console.log(j);
    j++;
}
//PROBLEM:3
// It will write all the cases in line and don't stop at any day.
let day = 1;
switch (day) {
    case 1:
        console.log("Monday")
        
  case 2:
        console.log("Tuesday")
        
  case 3:
        console.log("Wednesday")
        

    default:
        console.log("another day")
}
//PROBLEM:4
// A nested loop means loop inside loop.
let age=20
let haslicense=false
if(age>=18){
    if(haslicense){
        console.log("He can drive")
    }
    else{
    console.log("Old enough but need license")
}
}else{
    console.log("You cannot drive and underaged")
}
//PROBLEM:6
let age1 = 20;

if (age1 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
// PROBLEM:7
let colors="yellow"
switch(colors){
    case "red":
        console.log("stop")
        break;

    case "yellow":
        console.log("get ready")
        break;

    case "green":
        console.log("go")
        break;
    }
    
    for( let i=1; i<=10; i++){
        console.log(("7X") + i + "=" + (7*i))
    }
//  PROBLEM:8
let i = 10;
while(i >= 1){
    
    console.log(i);
    i--;
}
// PROBLEM:9
let marks = 95;

if(marks >= 90) {
    console.log("Grade A");
}
else if(marks >= 80) {
    console.log("GRADE B");}

else if(marks >= 70){
    console.log("GRADE C");
} 
else if(marks >= 60) {
console.log("GRADE D");}
 else {
    console.log("GRADE F");
}
// PROBLEM:10
let a = 10;
let b = 12;
let operator = "*";
switch(operator){
case "+":
    console.log(a + b);
    break;
    case "-":
    console.log(a - b);
    break;
    case "*":
    console.log(a * b);
    break;
    case "/":
    console.log(a / b);
    break;
    default:
        console.log("invalid operator")
}
// PROBLEM:11
let sum = 0;
for(i = 1;i<=100;i++){
   sum = sum + i;}
    console.log(sum)

//PROBLEM:12  
let it = 1;
do {
    console.log("keep going!")
    console.log(it);
    it++;
} while(it<=5);

// PROBLEM:13 
let number = 4;

if (number % 2 ==0){
    console.log("even");
}
else {
 console.log("odd");
}







