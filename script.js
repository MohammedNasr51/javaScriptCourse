// const myCheckbox = document.getElementById("myCheckbox");
// const visa = document.getElementById("visa");
// const masterCard = document.getElementById("masterCard");
// const meza = document.getElementById("meza");
// const submitBtn = document.getElementById("submitbtn");
// const subsictiptionResult = document.getElementById("subsicriptionResult");
// const paymentResult = document.getElementById("paymentResult");

// submitBtn.onclick = function () {
//   if (myCheckbox.checked) {
//     subsictiptionResult.innerText = "You have subscribed to our newsletter.";
//   } else {
//     subsictiptionResult.innerText = "You have to subscribe to our newsletter.";
//   }

//   if (visa.checked) {
//     paymentResult.innerText = "You have selected Visa as your payment method.";
//   } else if (masterCard.checked) {
//     paymentResult.innerText =
//       "You have selected MasterCard as your payment method.";
//   } else if (meza.checked) {
//     paymentResult.innerText = "You have selected Meza as your payment method.";
//   } else {
//     paymentResult.innerText = "You have not selected any payment method.";
//   }
// };

// task solution

// submitBtn.disabled = true;

// myCheckbox.onchange = function () {
//   submitBtn.disabled = !myCheckbox.checked;
// };

//ternary operator

// condition ? true statement : false statement;

// let age = 10;
// let adult = age > 18 ? "you are an adult" : "you are not an adult";

// console.log(adult);

// ex 2
// let temp = 19;
// let weather = temp > 20 ? "hot" : "cold";

// console.log(weather);

// if (age > 18) {
//     adult = true;
// } else {
//     adult = false;
// }

//********************************************

// switch case

// old with if for dayes
// let day = "pizza";
// let dayName;

// if (day === 1) {
//     dayName = 'Monday';
// } else if (day === 2) {
//     dayName = 'Tuesday';
// } else if (day === 3) {
//     dayName = 'Wednesday';
// } else if (day === 4) {
//     dayName = 'Thursday';
// } else if (day === 5) {
//     dayName = 'Friday';
// } else if (day === 6) {
//     dayName = 'Saturday';
// } else if (day === 7) {
//     dayName = 'Sunday';
// } else {
//     dayName = 'Invalid day';
// }

// switch
// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// ex 2
// let result = 95;
// let grade;
// switch (true) {
//   case result >= 90:
//     grade = "A";
//     break;
//   case result >= 80:
//     grade = "B";
//     break;
//   case result >= 70:
//     grade = "C";
//     break;
//   case result >= 60:
//     grade = "D";
//     break;
//   case result < 60:
//     grade = "F";
//   default:
//     grade = "Invalid grade";
//     break;
// }

// console.log(dayName);
// console.log(grade)

// let bool = true && true;

/*********************************************** */

// string methods
/**
 * String methods are functions that can be called on string values to perform various operations, such as manipulating, searching, or transforming the string.
 * Some common string methods include:
 * - length: Returns the length of the string.
 * - toUpperCase(): Converts the string to uppercase.
 * - toLowerCase(): Converts the string to lowercase.
 * - charAt(index): Returns the character at the specified index.
 * - indexOf(substring): Returns the index of the first occurrence of the specified substring.
 * - lastIndexOf(substring): Returns the index of the last occurrence of the specified substring.
 * - startsWith(substring): Checks if the string starts with the specified substring.
 * - endsWith(substring): Checks if the string ends with the specified substring.
 * - repeat(count): Repeats the string a specified number of times.
 * - includes(substring): Checks if the string contains the specified substring.
 * - replace(searchValue, newValue): Replaces occurrences of searchValue with newValue in the string.
 * - replaceAll(searchValue, newValue): Replaces all occurrences of searchValue with newValue in the string.
 * - trim(): Removes whitespace from both ends of the string.
 * - padStart(targetLength, padString): Pads the beginning of the string with padString until it reaches the targetLength.
 * - padEnd(targetLength, padString): Pads the end of the string with padString until it reaches the targetLength.
 */

// let userName = "John Doe";
// let email = "john.doe.exam.ple.com";
// let phoneNumber = "123-456-7890";

// console.log(userName.length);
// console.log(userName.startsWith("a"));
// console.log(userName.endsWith("e"));
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());.
// console.log(email.length)
// console.log(email.length - email.lastIndexOf("."))
// console.log(userName.charAt(4));

// console.log('Welcome amoor'.repeat(5));

// if(email.includes("@") && email.endsWith(".com")){
//     console.log("Valid email");
// } else {
//     console.log("Invalid email");
// }

// console.log(phoneNumber);
// phoneNumber = phoneNumber.replace("-", " ");
// console.log(phoneNumber);
// console.log(phoneNumber);
// phoneNumber = phoneNumber.replaceAll("-", " ");
// console.log(phoneNumber);

// console.log(userName)
// console.log(userName.trim())
// console.log(userName.padStart(20, "*"));
// console.log(userName.padEnd(20, "-"));

/************************************************ */
// String Methods Part 2
/**
 * Additional string methods include:
 *
 * - slice(startIndex, endIndex): Extracts a section of the string and returns it as a new string.
 */

// let userName = "omar waleed";

// let firstName = userName.slice(0, 4);

// let lastName = userName.slice(5);

// let firstName = userName.slice(0, userName.indexOf(' '))

// let lastName = userName.slice(userName.indexOf(' ') + 1)

// let firstChar = userName.slice(0, 1);

// console.log(firstChar)

// let lastChar = userName.slice(-2)

// console.log(lastChar)

// let DO = userName.slice(-3, -1)
// console.log(DO)

// console.log(firstName);
// console.log(lastName);

/***************************************** */
// Method Chaining
/**
 * Method chaining is a programming technique where multiple methods are called on the same object in a single line of code.
 * This is often used with string methods to perform a series of transformations or operations on a string.
 * Each method returns a new string, allowing the next method to be called directly on the result of the previous method.
 */

//Example:
// let name = "   omar waleed   ";

// let newName = name.trim();

// let firstChar = newName.charAt(0);

// let capitalChar = firstChar.toUpperCase();

// let restString = newName.slice(1);

// let finalName = capitalChar + restString;

// console.log(finalName)

// with method chaining

// let newName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
// console.log(newName)

/********************************************* */
// Logical Operators
/**
 * Logical operators are used to combine or modify boolean values (true or false) in logical expressions.
 * The main logical operators in JavaScript are:
 * - AND (&&): Returns true if both operands are true; otherwise, returns false.
 * - OR (||): Returns true if at least one operand is true; otherwise, returns false.
 * - NOT (!): Returns the opposite boolean value of the operand (true becomes false, and false becomes true).
 */

// let age = 10;
// let hasTicket = false;

// if (age >= 10 && hasTicket) {
//     console.log('you can enter the game')
// } else {
//     console.log('you cant enter')
// }

// let isStudent = true;

// let hasCopon = false;

// if (isStudent || hasCopon) {
//     console.log('you have discount')
// } else {
//     console.log('no discount for you')
// }

// let isLoggedIn = true;

// if (!isLoggedIn) {
//     console.log('please log in to continue')
// } else {
//     console.log('welcome back')
// }

/* strict equality & strict inequality
 * =: assignment operator
 * ==: loose equality operator (compares values after type coercion)
 * ===: strict equality operator (compares both value and type)
 * !=: loose inequality operator (compares values after type coercion)
 * !==: strict inequality operator (compares both value and type)
 */

// let name = 'omar';

// if (name == 'omar') {
//     console.log('welcome omar ')
// } else {
//     console.log('welcome someone')
// }

// let PI = 3.14;

// if (PI == '3.14') {
//     console.log('oh wow')
// } else {
//     console.log('try again')
// }

// if (PI === '3.14') {
//     console.log('oh wow')
// } else {
//     console.log('try again')
// }

// if (PI == '3.14' && typeof (PI) == typeof ('3.14')) {
//     console.log('oh wow')
// } else {
//     console.log('try again')
// }

// if (PI != "3.14") {
//   console.log("oh wow");
// } else {
//   console.log("try again");
// }

// if (PI !== "3.14") {
//   console.log("oh wow");
// } else {
//   console.log("try again");
// }

/*While loop
* A while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true.
* consists of 
* Syntax:
* while (condition) {
*   // code to be executed
* }

*/

// let counter = 1;

// while (counter <= 5) {
//   console.log("hellow " + counter);
//   counter ++;
// }

// let counter2 = 6;

// do {
//   console.log("hellow from do while" + counter2);
//   counter2 ++;
// } while (counter2 <= 5);
/*********************************************************** */

/* for loop */

// for (let i = 1; i < 30; i++){
//     if (i === 15) {
//         continue;
//     }
//     if (i === 20) {
//         break;
//     }
//     console.log('we are printing '+i)
// }

/***************************************************/

/* guessing game */

// const MIN = 1;
// const MAX = 100;
// const answer = Math.floor(Math.random() * (MAX - MIN + 1 + MIN));

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   attempts++;
//   guess = window.prompt(`Please enter number from ${MIN} to ${MAX} :`);
//   guess = Number(guess);
//   if (isNaN(guess) || guess > MAX || guess < MIN) {
//     alert("please enter a valid number");
//   } else if (guess < answer) {
//     alert("too low try again");
//   } else if (guess > answer) {
//     alert("too high try again");
//   } else {
//     alert(
//       `congratulations the correct answer is ${answer} you tried ${attempts} times`
//     );
//     running = false;
//   }
// }

/************************************************************************************* */

/**Functions in JS */

// function greeting() {
//   console.log("welcome Guest please login or signup");
// }

// greeting();

// let userName = prompt("enter your name : ");
// let age = prompt("enter your age : ");
// let hieght = prompt("enter your hieght : ");

// function greetingUser(name, age, hieght) {
//   console.log(
//     `Welcome ${name} you are ${age} years old and your hieght is ${hieght}`,
//   );
// }

// greetingUser(age, userName, hieght);

// function sum(num1 = 0, num2 = 0) {
//   let result = num1 + num2;
//   return result;
// }
// function sum(num1 = 0, num2 = 0) {
//   return num1 + num2;
// }

// let multiply3Numbers = (n1, n2, n3) => {
//   return n1 * n2 * n3;
// };

// let num1 = 7;
// let num2 = 8;
// let result = sum(num2, num1);

// console.log(result);

// let str = prompt("enter your string");

// function capitlizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// function optimizeString(str, optimizer) {
//   return optimizer(str.toLowerCase());
// }

// let optimizedStr = optimizeString(str, capitlizeFirstLetter);
// console.log(optimizedStr);

// function capitlizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1); // Omar ya omar
// }
// function optimizeString(str, optimizer) {
//   return Omar ya omar ;
// }
/**
 *
 *
 *
 */

/***************************************************************************** */

// Scope in Js
/**
 * Scope in JavaScript refers to the accessibility or visibility of variables and functions in different parts of the code.
 * There are two main types of scope in JavaScript: global scope and local scope.
 * - Global Scope: Variables and functions declared outside of any function or block have global scope. They can be accessed from anywhere in the code.
 * - Local Scope: Variables and functions declared within a function or block have local scope. They can only be accessed within that function or block.
 * JavaScript also has block scope, which is created by using curly braces {}. Variables declared with let or const inside a block are only accessible within that block.
 * Understanding scope is important for managing variable visibility and avoiding naming conflicts in your code.
 */

// let globalVar = "I am a global variable";

// let person = "hamada "

// console.log(person)

// console.log(
//   "%c this is global variable from the global scope : " + globalVar,
//   " color: green; ",
// );

// function home1() {
//   let person = "hamoda"
//   let father = "nasr";
//   let son = "mohamed";
//   console.log(person)
//   console.log(
//   "%c this is global variable from the local scope home1 : " + globalVar,
//   " color: orange; ",
//   );
//   console.log(father, son)
//   // console.log(mother,girl)
// }

// function home2() {
//   let father = "nasr";
//   let son = "mohamed";
//   let mother = "hamdya";
//   let girl = "fatheya";
//     console.log(
//   "%c this is global variable from the local scope home2 : " + globalVar,
//   " color: yellow; ",
//   );
//   console.log(mother,girl)
// }

// function anything(num) {
//   if (num == 5) {
//     var message = "true"
//     // console.log(message)
//   }
//   return message;
// }

// home1();
// home2();
// console.log( anything(5))

/**************************************************************************** */
// Arrays in JS
/**
 * Arrays in JavaScript are used to store multiple values in a single variable.
 * They are ordered collections of elements, which can be of any data type, including numbers, strings, objects, and even other arrays.
 * Arrays are created using square brackets [] and elements are separated by commas.
 * JavaScript arrays are dynamic, meaning their size can change as elements are added or removed.
 * Common array methods include push(), pop(), shift(), unshift(), splice(), slice(), indexOf(), and forEach().
 * Arrays are zero-indexed, meaning the first element is at index 0, the second element at index 1, and so on.
 */

// let student1 = 'ali';
// let student2 = 'abass';

// let studentsArray = ['ali', 'abass', 'ahmed'];

// console.log(studentsArray)
// console.log(studentsArray.length)
// console.log(studentsArray[0])
// console.log(studentsArray[1])
// console.log(studentsArray[studentsArray.length - 1])

// for (let i = 0; i < studentsArray.length; i++){
//   console.log(studentsArray[i])
// }

// for (let student of studentsArray) {
//   console.log(student)
// }

// for (let index in studentsArray) {
//   console.log(studentsArray[index])
// }

// studentsArray.push('mahmoud');
// console.log(studentsArray);
// let popedElement = studentsArray.pop();
// console.log("im deleted : "+popedElement)
// console.log(studentsArray);

// studentsArray.unshift('Ahmed');
// console.log(studentsArray);
// let shiftedElement = studentsArray.shift();
// console.log("im deleted : "+shiftedElement)
// console.log(studentsArray);

// let AhmedIndex = studentsArray.indexOf('ahmed');
// console.log('index of ahmed : ' + AhmedIndex)

// let MahmoudIndex = studentsArray.indexOf('mahmoud');
// console.log('index of Mahmoud : '+ MahmoudIndex)

// let aliISHere = studentsArray.includes('ali');
// console.log(aliISHere)

// studentsArray[0] = 'ali hassan';
// console.log(studentsArray)

// studentsArray[3] = 'medhat';
// console.log(studentsArray)

/*********************************************************** */
// spread operator in JS
/**
 * The spread operator (...) in JavaScript is used to expand or spread elements of an iterable (like an array or string) or properties of an object into individual elements or key-value pairs.
 * It can be used in various contexts, such as function calls, array literals, and object literals.
 * The spread operator allows for easier manipulation and combination of arrays and objects.
 */
// console.log(Math.max(10, 20, 30))

// let arr = [10, 20, 30, -1];

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// console.log(arr);
// console.log(...arr)

// let userName = "mohamed nasr";
// console.log(userName);

// let userNameLetters = [...userName]

// console.log(userNameLetters);
// console.log(userNameLetters.join("-"));

// let boys = ['samir', 'shahir', 'baher'];
// let girls = ['dina', 'sara', 'mona'];
// let students = [...boys, ...girls,'mohamed','samah'];
// console.log(students)

/**
 * Rest parameters
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
 * It is represented by three dots (...) followed by the name of the array that will hold the arguments.
 * The rest parameter must be the last parameter in the function definition.
 */

// function boys(...boysNames) {
//     for (let name of boysNames) {
//         console.log('boy name is ' + name);
//     }
//   return boysNames;
// }

// let boy1 = "ali";
// let boy2 = "ahmed";
// let boy3 = "mohamed";
// let boy4 = "samer";

// let boysArray = boys(boy1, boy2, boy3, boy4,'medhat','abdo','hamada');
// console.log(boysArray.length)

/*****************************************************/
//?Generate Password
//TODO make a function that generates a random password
//TODO the function should take the length of the password as a parameter
//TODO the password should contain uppercase letters, lowercase letters, numbers, and special characters
//TODO the function should return the generated password

// function generatePassword(
//   length,
//   hasLowerCase,
//   hasUpperCase,
//   hasNumbers,
//   hasSpecialCharacters,
// ) {
//   let lowerCase = "abcdefghijklmnopqrstuvwxyz";
//   let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let numbers = "0123456789";
//   let special = "!~@#$%^&*()_-=+\\<>?|/{}[]";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += hasLowerCase ? lowerCase : "";
//   allowedChars += hasUpperCase ? uppercase : "";
//   allowedChars += hasNumbers ? numbers : "";
//   allowedChars += hasSpecialCharacters ? special : "";

//   console.log(allowedChars);

//   if (length <= 0) return "password lenght must be at least 6 characters";
//   if (allowedChars.length === 0)
//     return "you should select at least one type of allowed chracters";
//     // let newLength = Math.floor((Math.random() * 14) + 7);
//   for (let i = 0; i < length; i++) {
//     let randIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randIndex];
//   }
//   return password;
// }

// const length = 15;
// const hasLowerCase = true;
// const hasUpperCase = true;
// const hasNumbers = true;
// const hasSpecialCharacters = true;

// const password = generatePassword(
//   length,
//   hasLowerCase,
//   hasUpperCase,
//   hasNumbers,
//   hasSpecialCharacters,
// );
// console.log(password);
//****************************************************************************************** */
//~callbacks in Js

// let name = "omar";
// hello(name, welocme, goodbye, leave, slamalekoom);

// function hello(name, ...callbacks) {
//   console.log("hello " + name);
//   for (let callback of callbacks) {
//     callback(name);
//   }
// }

// function goodbye(name) {
//   console.log("goodbye " + name);
// }

// function leave(name) {
//   console.log("leave " + name);
// }

// function welocme(name) {
//   console.log("wlcome " + name);
// }

// function slamalekoom(name) {
//   console.log("السلام عليكم اخ " + name);
// }

// let name = '   oMAr   ';

// clearUserName(name,displayInPage)

// function clearUserName(name, callback) {
//     //callback(name); //! nor correct
//     let trimmedName = name.trim().toLowerCase();
//     let clearedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);

//     callback(clearedName)
// }

// function displayInConsole(name) {
//     console.log(name);
// }

// function displayInPage(name){
//     let h1 = document.getElementById('myH1');
//     h1.innerText = name;
// }
//*************************************************** */
//& forEach method and map method

//^ advanced notes
//~ arr.forEach(function printElement(...params) {
//~   console.log(params[0]);
//~ });

//~ let printing = function (...params) {
//~   console.log(params[0]);
//~ };

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.forEach(add2toElement);//^dont return any thing (undefined) because forEach is used to modify the original array not to create a new one)
// console.log(newArr)
// arr.forEach(double);
// arr.forEach(cube);
// arr.forEach(printElement);

// function printElement(element, index, array) {
//   console.log(element);
// }

// function add2toElement(element, index, array) {
//   array[index] = element + 2;
// }

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
//********************************************** */
//& map method in js

// let arr = [1, 2, 3, 4, 5];

// let addedArr = arr.map(add2toElement);//^ return a new array with the modified values without changing the original array
// console.log(addedArr);
// let doubledArr = arr.map(double);
// console.log(doubledArr);
// let cubedArr = arr.map(cube);
// console.log(cubedArr);
// arr.map(printElement);

// function printElement(element, index, array) {
//   console.log(element);
// }
// function add2toElement(element, index, array) {
//   return element + 2;
// }
// function double(element, index, array) {
//   return element * 2;
// }
// function cube(element, index, array) {
//   return Math.pow(element, 3);
// }
//************************************************* */
//& filter method in js

// let nums = [1, 2, 3, 4, 5, 7, 8, 88, 77, 56, 42, 19, 10];

// let newNums = nums.filter(getNumsGraterThan10);
// console.log(newNums);
// newNums = nums.filter(lessThan10);
// console.log(newNums);

// function getNumsGraterThan10(element) {
//   return element >= 10;
// }

// function lessThan10(element) {
//   return element < 10;
// }

// let foodArray = [
//   "pizza",
//   "burger",
//   "pasta",
//   "salad",
//   "sushi",
//   "steak",
//   "banana",
//   "strawberry",
//   "kiwi",
//   "melon",
//   "grape",
//   "orange",
//   "apple",
// ];

// let newFoodArray = foodArray.filter(shortestWords);
// console.log(newFoodArray);
// newFoodArray = foodArray.filter(longestWords);
// console.log(newFoodArray);

// function shortestWords(ele) {
//   return ele.length <= 4;
// }

// function longestWords(ele) {
//   return ele.length >= 5;
// }

// let agesArray = [10, 15, 20, 25, 30, 35, 40, 45, 50];
// let adults = agesArray.filter(getAdult);
// console.log(adults);
// let children = agesArray.filter(getChild);
// console.log(children);

// function getAdult(el) {
//   return el >= 18;
// }

// function getChild(el) {
//   return el < 18;
// }
//************************************************** */
//& reduce method in js

// let nums = [1, 2, 3, 4, 5];

// let sumOfNums = nums.reduce(sum);
// console.log(sumOfNums);
// let maxNumber = nums.reduce(getMax);
// console.log(maxNumber)
// let minNumber = nums.reduce(getMin);
// console.log(minNumber)
// let multyplyOfNums = nums.reduce(multyply,1);
// console.log(multyplyOfNums)

// function sum(acc, ele) {
//     return acc + ele;
// }

// function getMax(acc, ele) {
//     return Math.max(acc, ele);
// }

// function getMin(acc, ele) {
//     return Math.min(acc, ele);
// }

// function multyply(acc, ele) {
//     return acc * ele;
// }

//*********************************************** */
//& function declaration vs function expression
//~ function declaration is a function that is defined using the function keyword and has a name. It can be called before it is defined in the code due to hoisting.

//~ function expression is a function that is defined as part of an expression, such as a variable assignment. It can be anonymous (without a name) or named. It cannot be called before it is defined in the code.

// function sayHello() {
//     console.log('hello');
// }
// sayHello();

// let sayHi = function(){
//     console.log('Hi');
// }

// sayHi();

// let nums = [1, 2, 3, 4, 5, 7, 8, 88, 77, 56, 42, 19, 10];

// let newNums = nums.filter(function (element) {
//   return element >= 10;
// });
// console.log(newNums);
// newNums = nums.filter(function (element) {
//   return element < 10;
// });
// console.log(newNums);

// let nums = [1, 2, 3, 4, 5];

// let sumOfNums = nums.reduce(function (acc, ele) {
//   return acc + ele;
// });
// console.log(sumOfNums);
// let maxNumber = nums.reduce(function (acc, ele) {
//   return Math.max(acc, ele);
// });
// console.log(maxNumber);
// let minNumber = nums.reduce(function (acc, ele) {
//   return Math.min(acc, ele);
// });
// console.log(minNumber);
// let multyplyOfNums = nums.reduce(function (acc, ele) {
//   return acc * ele;
// }, 1);
// console.log(multyplyOfNums);

//& arrow functions in js () => {}

// let nums = [1, 2, 3, 4, 5, 7, 8, 88, 77, 56, 42, 19, 10];

// let newNums = nums.filter((element) => element >= 10);
// console.log(newNums);
// newNums = nums.filter((element) => element < 10);
// console.log(newNums);

// let nums = [1, 2, 3, 4, 5];

// let sumOfNums = nums.reduce((acc, ele) => acc + ele);
// console.log(sumOfNums);
// let maxNumber = nums.reduce((acc, ele) => Math.max(acc, ele));
// console.log(maxNumber);
// let minNumber = nums.reduce((acc, ele) => Math.min(acc, ele));
// console.log(minNumber);
// let multyplyOfNums = nums.reduce((acc, ele) => acc * ele, 1);
// console.log(multyplyOfNums);
//************************************************** */
//& objects in js

// let person1 = {
//   name: "omar",
//   age: 11,
//   hoppies: ["football", "swimming", "gaming"],
//   eat: function (food) {
//     console.log(`I am ${this.name} eating ${food}`);
//   },
//   //^this not work with arrow functions
//   walk: (distance) =>
//     console.log(`I am ${this.name} walking ${distance} meters`),
//   logThis: function () {
//     console.log(this);
//   },
//   tryThisWorkOnArrow() {
//     return () => console.log(this);
//   },
// };
// person1.name = "abbas";
// person1.job = "developer";
// console.log(person1);
// person1.job = "Engineer";
// console.log(person1);

// let person2 = {
//   name: "ahmed",
//   age: 20,
//   hoppies: ["reading", "traveling", "cooking"],
//   eat: function (food) {
//     console.log(`I am ${this.name} eating ${food}`);
//   },
//   walk: (distance) => console.log(`I am walking ${distance} meters`),
// };

// console.log(person1);
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.hoppies);
// person1.eat("pizza");
// person1.walk(100);
// person1.logThis();
// console.log(person2);
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.hoppies);
// person2.eat("pasta");
// person2.walk(50);
// person2.hoppies.forEach((hoppy) => console.log(hoppy));

//& constructor function

// function Person(name, age, hoppies) {
//   this.name = name;
//   this.age = age;
//   this.hoppies = hoppies;
// }

// let person3 = new Person("mohamed", 30, ["coding", "hiking", "photography"]);
// console.log(person3);
// let person4 = new Person("sara", 25, ["dancing", "painting", "yoga"]);
// console.log(person4);

// //~ class syntax in js

// class Person {
//   static personCount = 0;
//   constructor(name, age, hoppies) {
//     this.name = name;
//     this.age = age;
//     this.hoppies = hoppies;
//     Person.personCount++;
//   }

//   walk(distance) {
//     console.log(`I am ${this.name} walking ${distance} meters`);
//   }

//   logThis() {
//     console.log(this);
//   }

//   tryThisWorkOnArrow() {
//     return () => console.log(this);
//   }
// }

// let person1 = new Person("omar", 12, ["running", "swimming", "coding"]);
// let person4 = new Person("omar", 12, ["running", "swimming", "coding"]);
// let person5 = new Person("omar", 12, ["running", "swimming", "coding"]);
// let person2 = new Person("ahmed", 15, ["reading", "writing", "drawing"]);
// let person3 = new Person("sara", 10, ["dancing", "singing", "acting"]);

// console.log(person1.personCount);
// console.log(Person.personCount);

//****************************************************************** */
//& static properties & methods in js

// class SmallMath{
//     static PI = 3.14;

//     static diameter(radius) {
//         return 2 * radius;
//     }
//     static circumference(radius) {
//         return 2 * SmallMath.PI * radius;
//     }
// }

// console.log(SmallMath.PI);
// console.log(SmallMath.diameter(5));
// console.log(SmallMath.circumference(5));

//******************************************************* */
//& inheritance in js

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`I am ${this.name} and I am ${this.age} years old`);
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
//   walk() {
//     console.log(`${this.name} is walking`);
//   }
//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   }
// }

// class Dog extends Animal {
//     constructor(name, age, type) {
//         super(name, age);
//         this.type = type;
//     }
//     introduce() {
//         console.log(`I am ${this.name} and I am a ${this.type} dog and I am ${this.age} years old`);
//     }
// }

// let dog1 = new Dog("Rex", 5, "German Shepherd");
// dog1.introduce();
// dog1.eat();

// class Cat extends Animal {
//     constructor(name, age, color) {
//         super(name, age);
//         this.color = color;
//     }
//     meow() {
//         console.log(`${this.name} is meowing`);
//     }
// }

// let cat1 = new Cat("Whiskers", 3, "black");
// cat1.introduce();
// cat1.meow();

// class Bird extends Animal {
//     constructor(name, age, canFly) {
//         super(name, age);
//         this.canFly = canFly;
//     }
//     flyOrSwim() {
//         if (this.canFly) {
//             console.log(`${this.name} is flying`);
//         } else {
//             console.log(`${this.name} is swimming`);
//         }
//     }
// }

// let bird1 = new Bird("Tweety", 2, true);
// bird1.introduce();
// bird1.flyOrSwim();
// let bird2 = new Bird("Pingu", 4, false);
// bird2.introduce();
// bird2.flyOrSwim();
//************************************************** */
//& private properties, setters and getters in js

// class Person {
//   #ssn;
//   constructor(name, age) {
//     this.name = name;
//       this.age = age;

//   }
//   displayData() {
//     console.log(`im ${this.name} ${this.age} years old`);
//   }
//   set setSSN(newSsn) {
//     if (typeof newSsn === "number" && newSsn.toString().length === 5) {
//       this.#ssn = newSsn;
//     } else {
//       console.error("SSN must be a 5 digit number");
//     }
//   }
//   get getSSN() {
//     return this.#ssn;
//   }
//   set name(userInputName) {
//     if (
//       typeof userInputName === "string" &&
//       userInputName.trim() !== "" &&
//       userInputName.trim().length > 2
//     ) {
//       this._name = userInputName.trim();
//     } else {
//       console.error(
//         "Name must be a non-empty string with more than 2 characters",
//       );
//     }
//   }
//   get name() {
//     return this._name;
//   }
//   set age(userInputAge) {
//     if (typeof userInputAge === "number" && userInputAge > 0) {
//       this._age = userInputAge;
//     } else {
//       console.error("Age must be a positive number");
//     }
//   }
//   get age() {
//     return this._age;
//   }
// }

// class Student extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// const person1 = new Person("mohamed", 12);
// console.log(person1.name);
// console.log(person1.age);

//^whit naming set and get
// class Person {
//   #ssn;
//   constructor(name, age) {
//     this.setName = name;
//       this.setAge = age;

//   }
//   displayData() {
//     console.log(`im ${this.getName} ${this.getAge} years old`);
//   }
//   set setSSN(newSsn) {
//     if (typeof newSsn === "number" && newSsn.toString().length === 5) {
//       this.#ssn = newSsn;
//     } else {
//       console.error("SSN must be a 5 digit number");
//     }
//   }
//   get getSSN() {
//     return this.#ssn;
//   }
//   set setName(userInputName) {
//     if (
//       typeof userInputName === "string" &&
//       userInputName.trim() !== "" &&
//       userInputName.trim().length > 2
//     ) {
//       this._name = userInputName.trim();
//     } else {
//       console.error(
//         "Name must be a non-empty string with more than 2 characters",
//       );
//     }
//   }
//   get getName() {
//     return this._name;
//   }
//   set setAge(userInputAge) {
//     if (typeof userInputAge === "number" && userInputAge > 0) {
//       this._age = userInputAge;
//     } else {
//       console.error("Age must be a positive number");
//     }
//   }
//   get getAge() {
//     return this._age;
//   }
// }

// class Student extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// const person1 = new Person("mohamed", 12);
// console.log(person1.getName);
// console.log(person1.getAge);
//console.log(person1.#ssn) //! error because ssn is a private property
//person1.setSSN = "تفاح"; //! SSN must be a 5 digit number
// console.log(person1.getSSN)
// const student1 = new Student("ahmed", 15);
// console.log(student1.name);
// console.log(student1.age);
// student1.setSSN = 67891;
// console.log(student1.getSSN)
//console.log(student1.#ssn) //! error because ssn is a private property
//************************************************** */
//& destructuring = extracting values from arrays or objects and assigning them to variables
//^ [] = to perform destructuring on arrays
//^ {} = to perform destructuring on objects

// let a = 10;
// let b = 20;
//~old way for swap
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b)
//~how destructuring make our life easy
// [a, b] = [b, a];
// console.log(a, b);
// let colors = ["red", "green", "blue", "white", "black"];
//~swap array elements
// [colors[0], colors[4]] = [colors[4], colors[0]];

//~extract values from array into variables
// const [primaryColor, secondaryColor, thirdColor, lightColor, darkColor] = colors;
// console.log(primaryColor);
// console.log(secondaryColor);
// console.log(thirdColor);
// console.log(lightColor);
// console.log(darkColor);
//***** */
// const [primary,,third] = colors;
// console.log(primary);
// console.log(third)

// const [primary, , third, ...restColors] = colors;
// console.log(primary);
// console.log(third);
// console.log(restColors)

// nested arrays
// let nestedArr = [1, 2, [3, 4], 5];
// const [, , [third, fourth],] = nestedArr;
// console.log(third);
// console.log(fourth);

// let nestedArr = [1, 2, [3, 4], 5];
// const [third, fourth] = nestedArr[2];
// console.log(third);
// console.log(fourth);

//~object destructuring
// let person = {
//   name: "omar",
//   age: 12,
//   job: "student",
//   courses: ["html", "css", "js"],
// };

// let person2 = {
//   name: "mohamed",
//   age: 23,
//   job: "engineer",
// };

// const { age, courses, job, name } = person;
// console.log(name);
// console.log(age);
// console.log(job);
// console.log(courses);

// const { age: p2age, courses: p2courses, job: p2job, name: p2name } = person2;
// console.log(p2name);
// console.log(p2age);
// console.log(p2job);
// console.log(p2courses);

// function displayPersonData(person) {
//   console.log(
//     `hi i am ${person.name} i am ${person.age} years old i am currently a/an ${person.job} ${person.courses ? `my courses are ${person.courses.join("-")}` : ""}`,
//   );
// }
// function displayPersonData({ name, age, job, courses }) {
//   console.log(
//     `hi i am ${name} i am ${age} years old i am currently a/an ${job} ${courses ? `my courses are ${courses.join("-")}` : ""}`,
//   );
// }
// displayPersonData(person);
// displayPersonData(person2);
//************************************************** */
//& nested object
// let person = {
//   name: "omar",
//   age: 12,
//   address: {
//     city: "cairo",
//     street: "123 main st",
//     country: "egypt",
//   },
// };

// class Person{
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address {
//     constructor(city, street, country) {
//         this.city = city;
//         this.street = street;
//         this.country = country;
//     }
// }

// let person1 = new Person("omar", 12, "cairo", "123 main st", "egypt");
// console.log(person1)
//**************************************************** */
//& array of objects
// creat array of objects to store data of 5 students and use it as json
// let students = [
//     new Person("ahmed", 15, "cairo", "123 main st", "egypt"),
//     new Person("ali", 16, "alexandria", "456 second st", "egypt"),
//     new Person("marwa", 14, "asyut", "789 third st", "egypt"),
//     new Person("sara", 17, "luxor", "321 fourth st", "egypt"),
//     new Person("youssef", 18, "tanta", "654 fifth st", "egypt")
// ];
// students.forEach((student) => console.log(student.name))
// let lessThan18 = students.filter((student) => student.age < 18);
// console.log(lessThan18)
// let avgAge = students.reduce((acc, ele) => acc = acc + ele.age, 0) / students.length;
// console.log(avgAge)

//*************************************************** */
//& sort method in js
// let array = [50, 6, 70, 88, 9, 154, 1, 4, 2, 77, 100, 10, 20, 200, -8];
// console.log(array.sort((a, b) => a - b)); //^asc
// console.log(array.sort((a, b) => b - a));//^desc
//a = 50 b =6
//a-b  50-6 = 44 + true
//a=9  b = 154
//a-b 9-154 = -145

//let names = ["omar", "Mohsen", "aBass", "MeDhat", "saWsaN"];
//console.log(names.sort((a, b) => a.localeCompare(b))); //^asc
// console.log(names.sort((a, b) => b.localeCompare(a)))//^desc
// let students = [
//   {
//     name: "omar",
//     age: 12,
//   },
//   {
//     name: "saad",
//     age: 15,
//   },
//   {
//     name: "ziad",
//     age: 17,
//   },
// ];
//console.log(students.sort((a, b) => a.name.localeCompare(b.name)))//^sort by name asc
//console.log(students.sort((a, b) => b.name.localeCompare(a.name)))//^sort by name desc
// console.log(students.sort((a, b) => a.age-b.age))//^sort by age asc
//console.log(students.sort((a, b) => b.age-a.age))//^sort by age desc
//************************************************** */
//& how to shuflle array
//~ not recommended way by using sort
// let arr = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "Q", "K", "J"];
// arr.sort(() => Math.random() - 0.5);
// console.log(arr)

//~ recommended way by using Fisher-Yates algorithm
//^ this algorithm works by iterating through the array from the last element to the first element
//^ and swapping each element with a random element that comes before it (including itself).

// console.log(shuffleArray(arr));

// function shuffleArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[random]] = [arr[random], arr[i]];
//     }
//     return arr;
// }

//************************************************** */
//& Date object in js
//~ date methods => getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getTime(),
//~ setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds()
//~ date formatting => toLocaleDateString(), toLocaleTimeString(), toLocaleString()
//^ Date(year, monthIndex, date, hours, minutes, seconds, milliseconds)
//^ Date('YYYY-MM-DDTHH:mm:ss.sssZ')
//^ Date(milliseconds)

// let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
// let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// let date = new Date();
// let date = new Date('2025-08-06T12:30:45.500Z');
// let date = new Date(2030, 3, 15, 10, 30, 45, 500);

// console.log(date);
// console.log(date.getFullYear())
// console.log(months[date.getMonth()])
// console.log(date.getDate())
// console.log(days[date.getDay()])
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime()) //^new Date(1_773_842_107_108) return current date

// date.setFullYear(2020);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(0);
// date.setMinutes(0);
// date.setSeconds(0);
// date.setMilliseconds(0);
// console.log(date);
// let options = {
//     weekday:'long',
//     year:'numeric',
//     month:'long',
//     day:'numeric',
// hour:'numeric', //^ for toLocaleString()
// minute:'numeric',
// second:'numeric',
// }
// console.log(date.toLocaleDateString('ar-EG', options))
// console.log(date.toLocaleTimeString('ar-SA', options))
// console.log(date.toLocaleString('ar-SA', options))
//************************************************** */
//& closure in js
//~ closure is a function that has access to its outer function scope even after the outer function has returned.
//~ closure can access variables and parameters of its outer function, even after the outer function has returned.
//~ closure can be used to create private variables and functions, and to create functions with persistent state.
// function counter(arg) {
//   let count = 0;

//   const inc = () => (count += arg);

//   const dec = () => (count -= arg);

//   const getCount = () => count;
//   return {
//     inc,
//     dec,
//     getCount,
//   };
// }
// let { inc, dec, getCount } = counter(5);
// inc();
// inc();
// inc();
// console.log(getCount());
// dec();
// dec();
// dec();
// console.log(getCount());
// inc();
// console.dir(inc);
// console.dir(dec);
//~theme switcher
// const themeSwicher = document.querySelector("#themeSwitcher");
// const themeToggle = document.querySelector("#themeToggle");
// const themeNameEle = document.querySelector("#themeName");

// function createThemeSwitcher() {
//   return function () {
//     themeSwicher.addEventListener("click", () => {
//       themeSwicher.classList.toggle("switch");
//       themeToggle.classList.toggle("toggle-switch");
//       document.body.classList.toggle("dark-theme");
//     });
//   };
// }

// let themeSwithcer = createThemeSwitcher();
// themeSwithcer()
//******************************************************/
//& stop watch app
//TODO create 3 functions to start, stop and reset the stopwatch
//TODO we will create timer , startTime , elapsedTime and isRunning variables to store the timer, the start time, the elapsed time and the state of the stopwatch
//TODO the start function will start the stopwatch and update the time every second
//TODO the stop function will stop the stopwatch and clear the interval
//TODO the reset function will reset all variables and clear the interval

// const display = document.querySelector("#display");
// let timerId = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timerId = setInterval(update, 10);
//     isRunning = true;
//   }
// }

// function stop() {
//   if (isRunning) {
//     elapsedTime = Date.now() - startTime;
//     clearInterval(timerId);
//     isRunning = false;
//   }
// }

// function reset() {
//     display.textContent = "00:00:00:00";
//   clearInterval(timerId);
//   timerId = null;
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
// }

// function update() {
//   elapsedTime = Date.now() - startTime;
//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
//   let milliseconds = Math.floor((elapsedTime % 1000) / 10);

//   display.textContent = `${addPadding(hours)}:${addPadding(minutes)}:${addPadding(seconds)}:${addPadding(milliseconds)}`;
// }

// function addPadding(num, size = 2) {
//   let s = num.toString();
//   return s.padStart(size, "0");
// }
//************************************************** */
//& local storage in js
// let body = document.body;
// let theme = localStorage.getItem("theme") || "light";
// body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
// body.style.color = theme === "light" ? "#000" : "#fff";
// const lightBtn = document.querySelector("#lightBtn");
// const darkBtn = document.querySelector("#darkBtn");
// lightBtn.addEventListener("click", () => {
//   body.style.backgroundColor = "#fff";
//   body.style.color = "#000";
//   localStorage.setItem("theme", "light");
// });
// darkBtn.addEventListener("click", () => {
//   body.style.backgroundColor = "#333";
//   body.style.color = "#fff";
//   localStorage.setItem("theme", "dark");
// });

// let arrayOfProducts = [
//   {name:'phone',
//     price:10,
//     qty:11
//   },
//   {name:'phone',
//     price:10,
//     qty:11
//   },
//   {name:'phone',
//     price:10,
//     qty:11
//   },
//   {name:'phone',
//     price:10,
//     qty:11
//   },
// ]

// let jsondData = JSON.stringify(arrayOfProducts)
// localStorage.setItem("productsArray", jsondData)
// let data = localStorage.getItem("productsArray");
// console.log(JSON.parse(data))
//************************************************** */
//& modules in js
//~ module is a file that contains code that can be imported and used in other files
//~ module can export variables, functions, classes, etc. and can import them from other modules
//~ module can be used to organize code and to avoid naming conflicts.
// import { PI, getArea, getCircumference, getVolume } from './math.js'
// import Employee,{sayGoodbye} from './Person.js';
// const person = new Employee("Alice", 30);
// console.log(PI);
// console.log(getArea(5));
// console.log(getCircumference(5));
// console.log(getVolume(5));
// console.log(person.greet());
// sayGoodbye();
//************************************************** */
//& sync and async in js
//~synchronous code is code that is executed in order, one line at a time. Each line of code must wait for the previous line to finish before it can execute.

//^asynchronous code is code that can be executed without waiting for the previous line to finish. It allows multiple operations to be performed at the same time, without blocking the main thread of execution. Asynchronous code is often used for tasks that take a long time to complete, such as fetching data from a server or reading a file from disk.

// setTimeout(() => console.log("task 1"), 1000);
// function func1(callback) {
//   setTimeout(() => {
//     console.log("task 1");
//     callback(func3);
//   }, 1000);
// }

// function func2(callback) {
//   console.log("task 2");
//   console.log("task 3");
//   callback();
// }

// function func3() {
//     console.log("task 4");
//     console.log("task 5");
// }
// func1(func2);
//************************************************** */
//& error handling in js

// try {
//     console.lag("start of the program");
// } catch (error) {
//     console.error(error);
// }
// console.log("reach the end of the program");

// let dividend = prompt("enter the dividend");
// let divisor = prompt("enter the divisor");
// x=0 //! Uncaught ReferenceError: x is not defined
// console.lag('ddd') //! Uncaught TypeError: console.lag is not a function

// try {
//   if (divisor == 0) {
//     throw new Error("divisor cannot be zero");
//   }
//   if (isNaN(dividend) || isNaN(divisor)) {
//     throw new Error("both dividend and divisor must be numbers");
//   }
//   let result = (dividend / divisor).toFixed(2);
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }

// console.log("reach the end of the program");
//************************************************* */
//& callback hell

// function func1(callback) {
//   setTimeout(() => {
//     console.log("task 1");
//     callback();
//   }, 1000);
// }

// function func2(callback) {
//   console.log("task 2");
//   console.log("task 3");
//   callback();
// }

// function func3() {
//   console.log("task 4");
//   console.log("task 5");
// }
// func1(() => func2(func3));

//************************************************** */
//& promises in js
//~ promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//~ promise can be in one of three states: pending, fulfilled, or rejected.
//~ promise can be created using the Promise constructor, which takes a function as an argument. The function takes two parameters: resolve and reject, which are functions that can be called to change the state of the promise.
//~ promise can be consumed using the then() method, which takes two callback functions as arguments: one for when the promise is fulfilled and one for when the promise is rejected. The then() method returns a new promise, which allows for chaining multiple then() calls together.

//^1- do homework
//^2- clean your room
//^3- out the trash

// function doHomework() {
//   return new Promise((resolve, reject) => {
//     let isHomeworkDone = true; //^ change this to false to test the reject case
//     setTimeout(() => {
//       if (isHomeworkDone) {
//         resolve("Homework done!");
//       } else {
//         reject("Homework not done!");
//       }
//     }, 2000);
//   });
// }
// function cleanRoom() {
//   return new Promise((resolve, reject) => {
//     let isRoomClean = true; //^ change this to false to test the reject case
//     setTimeout(() => {
//       if (isRoomClean) {
//         resolve("Room cleaned!");
//       } else {
//         reject("Room not cleaned!");
//       }
//     }, 1500);
//   });
// }
// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     let isTrashTakenOut = false; //^ change this to false to test the reject case
//     setTimeout(() => {
//       if (isTrashTakenOut) {
//         resolve("Trash taken out!");
//       } else {
//         reject("Trash not taken out!");
//       }
//     }, 1000);
//   });
// }

// doHomework().then((message) => {
//     console.log(`task 1 finished : ${message}`);
//     return cleanRoom();
// }).then((message) => {
//     console.log(`task 2 finished : ${message}`);
//     return takeOutTrash();
// }).then((message) => {
//     console.log(`task 3 finished : ${message}`);
// }).catch((error) => {
//     console.error(`error: ${error}`);
// }).finally(()=>{
//     console.log('end')
// })

//~ async await in js

//^definition
//~ async function is a function that is declared with the async keyword and allows the use of the await keyword inside it. An async function always returns a promise, and the await keyword can be used to wait for a promise to be fulfilled before continuing with the execution of the function.

// async function performTasks() {
//   try {
//     const task1 = await doHomework();
//     console.log(`task 1 finished : ${task1}`);

//     const task2 = await cleanRoom();
//     console.log(`task 2 finished : ${task2}`);

//     const task3 = await takeOutTrash();
//     console.log(`task 3 finished : ${task3}`);
//   } catch (error) {
//     console.error("Error: " + error);
//   }
// }

// performTasks();
//************************************************** */
//~DOM DOM API
// const redDivs = document.getElementsByClassName('red');
// console.log(redDivs);
// Array.from(redDivs).forEach(el => el.style.color = 'blue');

const redDivs = document.querySelectorAll('.red');
console.log(redDivs);
redDivs.forEach(el=> el.style.border = '1px solid red')