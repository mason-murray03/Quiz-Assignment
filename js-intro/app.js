let name="Ali";
let age=22;
const country= "Egypt";

console.log("Name:", name);
console.log("Age", age);
console.log("Country", country);

//using it for math problems

let x= 10;
let y= 5;
let total= x+ y;

console.log("Total", total);
console.log(x>y);

//using it for tru/false

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn && hasPermission);
console.log(isLoggedIn || hasPermission);

//arrays, remember index starts at 0, not 1

let colors = ["red", "blue", "green"]

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//using the .push() to add to the end of an array
//.pop() to remove the last item at the end of the array
//.length to find the number of items
//.indexOf() to find the index (position) of an item
//and .includes() to check is an item exists in the array
let names= ["ali", "mia", "jason"];
names.push("Mason");
names.pop()

console.log(names);
console.log(names.length);
console.log(names.includes("ali"));
console.log(names.indexOf("mia"))

//practice worksheet-1-javascript arrays

let fruits = ["apple", "banana", "cherry"];
fruits[1]= "blueberry" //how to change a value

console.log(fruits);
console.log(fruits[2]);

fruits.push("orange"); //adding orange to the end
fruits.pop(); //removing orange from list (the last item)

console.log(fruits);

fruits.unshift("grape"); //adding grape to the front
fruits.shift(); //removing first item

console.log(fruits);



let numbers = [3, 6, 9, 12];

console.log(numbers[0] + numbers[3]); //how to get the sum of the first and last number in this array
console.log(numbers.length); //prints how many items in the array

numbers.push(15, 18);//adds 15 and 18 to the end

console.log(numbers);



let favourites = ["pizza", "sushi", "pasta"];
favourites.push("burgers");

console.log(favourites);
console.log("i like " + favourites[0] + " and " + favourites[3]) //prints "i like pizza and burgers"

//LOOPS

//the for() loop
//starting point is 1, and the loop will continue until the condition is met. In this case every number less than or equal to 5 will print, in increments of 1.

for(let i=1; i <= 5; i++) { 
    console.log(i);
}

//while loops

let i=1
while(i <= 3) {
    console.log(i);
    i++;
}

//nested loops
//the initialization starts at one and th eloop will continue until the number is less than or equal to 3.
//each time the i loop is ran, it runs through the full j loop.

for(let i = 1; 1 <=3; i++) {
    for(let j = 1; j <= 2; j++){
        console.log('i = ${i},j =  ${j');
    }
}

//break and continue in a loop
//this means the loops starts at 1 and runs as long as the number is less than or equal to 5
//however, when it hits 3 it stops and exits the loop for it only prints 1, and 2
//if you move the break to after console.log, they it breaks after 3, and prints 1, 2, 3

//use the same loop form for continue, just replace break and type continue
//this will cause the loop to skip over the number 3, and prints 1, 2, 4, 5
for(let i = 1; i <=5; i++) {
    if(i === 3) break;
    console.log(i);
}

//practice workshett- javascript loops

//prints numbers 1-10
for(let i=1; i <= 10; i++) {
    console.log(i);
}

//prints even numbers between 1-20
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0)
        console.log(i)
}

//counts down from 10-1
for (let i=10; i>=1; i--) {
    console.log(i);
}

//adds numbers 1-5 and prints the total sum
let sum=0
for(let i = 1; i <=5; i++) {
    sum += i;
}

//prints the square of eac number from 1-5
for(let i = 1; i <= 5; i++) {
    console.log(i*i)
}

//prints all animal names
let animals=[ "cat", "dog", "rabbit", "parrot"];
for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

//greets ali
let names3=[ "ali", "sara", "john"];
for(let i = 0; i < names3.length; i++) {
    console.log("Hello, " + names3[i] + "1")
}

//multiples each value by 2 and prints
let original= [1, 2, 3, 4];
let doubled= [];
for(let i = 0 < original.length; i++;) {
    doubled.push(original[i] * 2);
    console.log(doubled);
}

//prints numbers between 1-20 divisible by 3
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        console.log(i)
    }
}

//counts how many numbers between 1-10 are odd
let count=0
for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0) {
        count++;
    }
}
console.log("odd numbers count:", count)

//prints numbers 1-10 but skips 5
for(let i=1; i <= 10; i++) {
    if(i === 5) continue;
    console.log(i)
}

//prints umbers 1-10 but stops if the number is 7
for(let i=1; i <= 10; i++) {
    if(i === 7) break;
    console.log(i)
}


//  writing conditional logic. if statement

//the score is 85, the code statements says if the score is greater than or eaual to 90, Grade: A
//if the score is greater then or equal to 75, Grade: B
// or else its Grade; C or lower ( if a score is not greater than a 75)
let score = 85;

if(score >= 90) {
    console.log("Grade: A");
} else if(score <=75) {
    console.log("Grade: B");
} else {
    console.log("Grqade: C or lower");
}

//nesting if statements
let age2 = 18;
let hasid= true;

if( age2 >= 18)
if(hasid === true) {
    console.log("Access granted"); //prints this if age and id condition is met
} else if(age2 >= 18) {
if(hasid !== true);
    console.log("Access denied: ID required"); //prints this if age is met but no id
} else {
    console.log("Access denied: Age restriction"); //prints this if neither condition is met
}


//ternary statement:
//age is 17
//if age is greater than or equal to 18, access is granted, if its not then access is denied
let age3 = 17
let message = age3 >= 18 ? "Access granted": "Access denied"; 
console.log(message);

let age4 =19;
let hasId=true;
if(age4 >= 18 && hasId === true) {
    console.log("Access granted");
}


//practice worksheet conditional statements:

//checks if number is positive, negative, or zero
let num = 0
if(num > 0) {
    console.log("Positive")
} else if(num < 0) {
    console.log("Negative")
} else {
    console.log("zero")
}


//checks if a person is elligible to vote
let age5 = 17
if( age5>= 18) {
    console.log("Elligible")
} else {
    console.log("Not elligible")
}

//conditional grading statement
let score2 = 87
if(score2 >= 90) {
    console.log("A")
} else if(score2 >= 75) {
    console.log("B")
} else if(score2 >= 50) {
    console.log("C")
} else {
    console.log("F")
}

//person needs to be at least 18 and have id to enter
let age6 = 23
let hasId2 = true
if(age6 >= 18 && hasId2) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}

//prints perfect square if numer is a whole number and its a squre root is an integer
let num2 = 18
if(Number.isInteger(num2)) {
    if(Number.isInteger(Math.sqrt(num2))) {
        console.log("Perfect square")
    }
}

//check if a user is online
let isOnline = true
let message3 = isOnline ? "User is online" : "User is offline";
console.log(message);

//prints weekday or weekend
let day = "saturday";
if(day === "saturday" || day === "sunday") {
    console.log("weekend")
} else {
    console.log("Weekday")
}


//writing an access policy
let isAdult = false;
let hasTicket = true;
if(!hasTicket) {
    console.log("No access")
} else if(isAdult && hasTicket) {
    console.log("Access granted")
} else if(!isAdult && hasTicket) {
    console.log("Need guardian")
}

//check if number is even and divisible by 5
let num3 = 10
if(num3 % 2 === 0 && num3 % 5 === 0) {
    console.log("yes")
} else {
    console.log("no")
}

//is it raining?
let isRaining = true
let message4 = isRaining ? "take an umberella" : "youre good to go"

// create a function named double that takes a number and returns its value
//6 is the number being doubled in this case
function double(numba) {
    return numba *2
}
console.log(double(6));

//create a function named fullName that takes firstName and lastName and returns a full name
function fullName(firstName, lastName) {
    return firstName + " " + lastName
} 
console.log(fullName("Mason", "murray"));

//create a function called isEven that returns true if a number is even,
//and false otherwise
//the first log for the number 8 returns true
//the second log for the number 17 returns false
function isEven(numberosa) {
    return numberosa % 2 === 0;
}
console.log(isEven(8));
console.log(isEven(17));

//practice worksheet- javascript functions

//write a function called greetUser that pints Hello, student
function greetUser() {
    console.log("Hello, student!");
}

//write a function called addTwoNumbers(a,b) that returns the sum of two numbers
function addTwoNumbers(a,b) {
    return a + b
}
console.log(addTwoNumbers(4,8))

//write a function called greet(name) that returns welcome + the name
function greet(name) {
    return "Welcome, " + name;
}
console.log(greet("mason"))

//create countToFive() that prints numbers 1-5 using a for loop
function countToFive() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

//create printRange() that prints all numbers from 1 to n
function printRange(n) {
    for(let i=1; i <= n; i++) {
        console.log(i)
    }
}

//write printArrayElements(arr) to print each item in an aarray 
function printArrayEllements(arr) {
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

//write getPositiveNumbers(number) to return only positive values from an array
function getPositiveNumbers(numbers) {
    let results=[];
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] > 0) {
            results.push(numbers[i])
        }
    }
    return results;
}
console.log(getPositiveNumbers([1, -4, 8, -10, 0]));

//write sumArray(arr) that adds up all value in an array and returns the total
function sumArray(arr) {
    let total=0;
    for(let i=0; i<arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sumArray([10, 20, 30]))

//write isEven(num) to return true is number is even and false otherwise
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8))

//create countEvens(arr) to conut how may even numbers are in an array
function countEvens(arr) {
    let count=0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]% 2=== 0) {
            count++
        }
    }
    return count
}
console.log(countEvens([1,2,3,4,5,6]))

// write findMax(arr) to return the largest number in the array
function findMax(arr) {
    let max=arr[0];
    for(let i=1; i<arr.length;i++) {
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5,6]))

//create fizzBuzz(n) that: prints Fizz if a number is divisible by 3. Buzz is divisible by 5. else print the number
function fizzBuzz(n) {
    for(leti=1; i<=n; i++) {
        if(i % 3 === 0 && i % 5 ===0) {
            console.log("FizzBuzz")
        } else if(i % 3 ===0) {
            console.log("Fizz")
        } else if(i % 5 ===0) {
            console.log("Buzz")
        } else {
            console.lo(i)
        }
    }
}