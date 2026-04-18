// Exercise: Level 1

// 1.
let myArray = [];

//2.
let numbers = [10,20,30,40,50,60];

//3.
let length = numbers.length;
console.log(length);        //6

//4.
let first = numbers[0];
let middle = numbers[Math.floor(numbers.length / 2)];
let last = numbers[numbers.length - 1];

console.log("First:", first);
console.log("Middle:", middle);
console.log("Last:", last);

//5.
let mixedDataTypes = ["Hello", 25, true, null, undefined, { name: "John" },[1, 2, 3]];
let length = mixedDataTypes.length;

console.log("Array:", mixedDataTypes);
console.log("Length:", length);

//6.
let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

//7.
console.log(itCompanies);

//8.
console.log(itCompanies.length);

//9.
let first = itCompanies[0];
let middle = itCompanies[Math.floor(itCompanies.length / 2)];
let last = itCompanies[itCompanies.length - 1];

console.log("First:", first);
console.log("Middle:", middle);
console.log("Last:", last);

// 10.
for (let company of itCompanies) {
  console.log(company);
}

//11.
for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

//12.
console.log(itCompanies.join(", ") + " are big IT companies.");

// 13.
let checkCompany = "Google";
if (itCompanies.includes(checkCompany)) {
  console.log(checkCompany);
} else {
  console.log("Company is not found");
}

// 14.
let companiesWithMultipleO = [];
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    companiesWithMultipleO.push(company);
  }
}
console.log("More than one 'o':", companiesWithMultipleO);

// 15. 
console.log("Sorted:", itCompanies.sort());

// 16.
console.log("Reversed:", itCompanies.reverse());

// 17. 
console.log("First 3:", itCompanies.slice(0, 3));

// 18. 
console.log("Last 3:", itCompanies.slice(-3));

// 19.
let midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log("Middle:", itCompanies.slice(midIndex - 1, midIndex + 1));
} else {
  console.log("Middle:", itCompanies[midIndex]);
}

// 20. 
itCompanies.shift();
console.log("After removing first:", itCompanies);

// 21. 
let mid = Math.floor(itCompanies.length / 2);
itCompanies.splice(mid, 1);
console.log("After removing middle:", itCompanies);

// 22. 
itCompanies.pop();
console.log("After removing last:", itCompanies);

// 23. 
itCompanies = [];
console.log("After removing all:", itCompanies);