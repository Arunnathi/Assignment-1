
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
console.log(Results = str1 + " " + str2.trim() + " " + str3.trim());

console.log("Q1 END =====================")

 var enteredAlphabet =  "4"
 vowels = "";
switch (enteredAlphabet) {
    case "A":
        console.log("A is a vowel")  
        break;
    case "E": 
        console.log("E is a vowel")
         break;    
    case "I": 
        console.log("I is a vowel")
        break;    
    case "O": 
        console.log("O is a vowel")
        break;    
    case "U": 
        console.log("U is a vowel")
        break;    
    default:
    console.log("its consonent")
    break;
}
  

console.log("Q2 END =====================")  



var firstNumber = prompt("Add Your First Number");
var secoundNumber = prompt("Add Your Secound Number");
var operation = prompt("Add what operation you need");

switch (operation) {
  case "+":
    console.log(
      `Your Answer is : ${parseInt(firstNumber) + parseInt(secoundNumber)}`
    );
    break;

  case "-":
    console.log(`Your Answer Is : ${(firstNumber - secoundNumber).toFixed(2)}`);
    break;

  case "*":
    console.log(` Your Answer Is :${(firstNumber * secoundNumber).toFixed(2)}`);
    break;

  case "/":
    console.log(` Your Answer Is :${(firstNumber / secoundNumber).toFixed(2)}`);
    break;
}


console.log("Q3 END =====================")


var a = 10;
var b = 10;
var c = 30;
if (a === b && b === c && c === a) {
  console.log("A triangle is said Equilateral Triangle");
} else if (a === b || b === c || c === a) {
  console.log("A triangle is said Isosceles Triangle");
} else {
  console.log("A triangle is said Scalene Triangle");
}


console.log("Q4 END =====================")


// Question 5:
let units = 300;

if (units <= 50) {
  console.log(`Charge: Rs. ${units * 0.5}`);
} else if (units <= 150) {
  console.log(`Charge: Rs. ${(units - 50) * 0.75 + 25}`);
} else if (units <= 250) {
  console.log(`Charge: Rs. ${(units - 150) * 1.2 + 100}`);
} else if (units > 250) {
  console.log(`Charge: Rs. ${((units - 250) * 1.5 + 220) * 1.2}`);
} else {
  console.log(`Charge: Rs. 0`);
}

console.log("Q5 END =====================")
