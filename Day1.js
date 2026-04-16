// Exercises: Level 1

// 1.
    // comments can make code readable

// 2.
    // Welcome to learn Javascript

// 3. 
    /*Comments can make code readable,
    easy to reuse 
    and informative*/

// 6.
let a;
let b;
let c;
let d;

// 7.
let num = 10;
let name = "Dishalan";
let isStudent = true;
let city = "Negombo";

// 8.
let firstName = "Jeyachchanthiran";
let lastName = "Dishalan";
let maritalStatus = "Single";
let country = "Sri Lanka";
let age = 21;

// 9.
let firstName = "Jeyachchanthiran", lastName = "Dishalan", maritalStatus = "Single", country = "Sri Lanka", age = 21;

// 10.
let myAge = 21;
let yourAge = 25;

console.log("I am ", myAge,"years old. ");
console.log("Your are ", yourAge, "years old.");


// Exercises: Level 2

// 1.
let challenge = 'learn Javascript';

// 2.
console.log(challenge);

// 3.
console.log(challenge.length);

// 4.
console.log(challenge.toUpperCase());

// 5.
console.log(challenge.toLowerCase());

// 6.
console.log(challenge.substr(0, 5)); // or substring(0, 5)

// 7.
let Challenge = '30 Days Of JavaScript';

let phrase = Challenge.substring(11);

console.log("learn",phrase);

// 8.
console.log(challenge.includes('Script'));

// 9.
console.log(challenge.split());

// 10.
console.log(challenge.split(' '));

// 11.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12.
console.log(challenge.replace('learn Javascript', '30 Days Of Python'));

// 13.
console.log(challenge.charAt(15));

// 14.
console.log(challenge.charCodeAt(6)); // J is at index 6

// 15.
console.log(challenge.indexOf('a'));

// 16.
console.log(challenge.lastIndexOf('a'));

// 17.
// Sentence for because
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// First occurrence of 'because'
console.log(sentence.indexOf('because'));

// 18.
console.log(sentence.lastIndexOf('because'));

// 19.
console.log(sentence.search('because'));

// 20.
let messy = ' learn Javascript ';
console.log(messy.trim());

// 21.
console.log(challenge.startsWith('learn'));
 
// 22.
console.log(challenge.endsWith('Javascript'));

// 23.
console.log(challenge.match(/a/g));

// 24.
console.log('30 Days of'.concat(' ', 'JavaScript'));

// 25.
console.log(challenge.repeat(2));


// Exercise: Level 3

// 1.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3.
if (typeof '10' === typeof 10) {
  console.log('Same type');
} else {
  let num = Number('10');
  console.log(typeof num === typeof 10); // true
}

// 4.
let num = parseFloat('9.8');

if (num === 10) {
  console.log('Equal');
} else {
  num = Math.ceil(num);
  console.log(num === 10); // true
}

// 5.
console.log('python'.includes('on') && 'jargon'.includes('on'));// true

// 6.
let sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon'));// true

// 7.
console.log(Math.floor(Math.random() * 101));

// 8.
console.log(Math.floor(Math.random() * 51) + 50);

// 9.
console.log(Math.floor(Math.random() * 256));

// 10.
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

// 11.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12.
let text = 'You cannot end a sentence with because because because is a conjunction';

let result = text.substr(31, 23);
console.log(result); // because because because


// Exercises: Level 4
// 1.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = sentence.match(/love/gi).length;
console.log(count); // 3

// 2.
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let count = sentence.match(/because/g).length;
console.log(count); // 3

// 3.




// 4.
let text = 'He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.';

// Extract numbers
let numbers = text.match(/\d+/g).map(Number);

let salaryPerMonth = numbers[0];
let annualBonus = numbers[1];
let coursesPerMonth = numbers[2];

// Convert to annual income
let totalAnnualIncome = (salaryPerMonth * 12) + annualBonus + (coursesPerMonth * 12);

console.log(totalAnnualIncome);

