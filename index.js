// All questions should be printed to your Browser's console using console.log()

// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93];
console.log(ages);

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let subtractAge = ages[ages.length-1]- ages[0];
console.log(subtractAge);
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(10);
console.log(ages); 
console.log(ages[ages.length-1] - ages[0]);
// Use a loop to iterate through the array and calculate the average age.
let sumAge = 0;
for(let i=0; i<ages.length; i++) {
    sumAge += ages[i];
    console.log(sumAge);
}
console.log(sumAge/ages.length);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
// Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLetters = 0;
for(let i=0; i< names.length; i++) {
    totalLetters += names[i].length;
    avgLetters = totalLetters/names.length;
}
console.log(totalLetters);
console.log(avgLetters);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let newNames = [];
for(let i=0; i< names.length; i++) {
    newNames += names[i] + " ";
    console.log(newNames);
}

// How do you access the last element of any array?
console.log(names[names.length-1]);
// How do you access the first element of any array?
console.log(names[0]);
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [];
for(let i=0; i< names.length; i++) {
    nameLengths.push(names[i].length);
    console.log(nameLengths);
}

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumNameLengths = 0;
for(let i=0; i< nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
    console.log(sumNameLengths);
}

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWord(word, n) {
    let concat = word.repeat(n);
    console.log(concat);
}
concatWord('hello', 3);

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName)
}
fullName('sandra', 'lane');
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumArrayGreaterThan100(array) {
    let sumArray = 0;
for(let i=0; i<array.length; i++) {
    sumArray += array[i];
    console.log(sumArray);
}
if(sumArray> 100) {
    console.log(true);
    return true;
}
else{
    console.log(false);
    return false;
}
}
let numbers1 = [1,2,3,4,5];
let numbers2 = [10,20,40,50,90];
isSumArrayGreaterThan100(numbers1);
isSumArrayGreaterThan100(numbers2);
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgArray(array) {
    let sumArray = 0;
for(let i=0; i< array.length; i++) {
    sumArray += array[i];
    avgArray = sumArray/array.length;
}
console.log(avgArray);
}
let numbers10 = [4,5,6,7,8];
let numbers11 = [20,30,40,50,60];

avgArray(numbers10);

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isArray1GreaterThanArray2(array1, array2) {
    let sumArray1 = 0;
    let sumArray2 = 0;
    let avgArray1 = 0;
    let avgArray2 = 0;

for(let i=0; i< array1.length; i++) {
    sumArray1 += array1[i];
    avgArray1 = sumArray1/array1.length;
}
console.log(avgArray1);
for(let i=0; i< array2.length; i++) {
    sumArray2 += array2[i];
    avgArray2 = sumArray2/array2.length;
}
console.log(avgArray2);
if(avgArray1 > avgArray2) {
    console.log(true);

}
else{
    console.log(false);
    
}
}
let numbers12 = [2,4,5,6,7,8]
let numbers13 = [2,4,7,8,9,10]
isArray1GreaterThanArray2(numbers12, numbers13);

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    let buyDrink = isHotOutside === true && moneyInPocket >10.50;
    console.log(buyDrink);
}


willBuyDrink(false, 11);
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//function to see if can pay bill
function payRent(firstOfMonth, moneyInPocket) {
    let willPayRent = firstOfMonth === true && moneyInPocket >1000;
    console.log(willPayRent);
}

payRent(false, 800);