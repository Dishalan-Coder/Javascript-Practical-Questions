# JavaScript  Practical Worksheet 

---

## Q1: Undefined Variable  
You create a variable but don’t assign a value  

**Tasks:**
1. Declare the variable  
2. Write what it stores  
3. Assign a number  
4. Write new output 

**Answers:**
```js
let x;
```
primitive value(undefined)
```js
x = 5;
console.log(x);
```
5

---

## Q2: Increment  

**Step 1: Declare**
```js
let num = 5;
```

**Tasks:**
1. Apply `num++`  
2. Write output  
3. Apply `++num`  
4. Write output 

**Answers:**
```js
let num = 5;
cosole.log(num++);
```
5
```js
let num = 5;
cosole.log(++num);
```
6
---

## Q3: Object Update  

Store and update data  

**Tasks:**
1. Create an object with name and age  
2. Change age  
3. Add city  
4. Write final object  

**Answers:**
```js
const ukiStudent = {
   name: "J.Dishalan",
   age: 21
};
ukiStudent.age = 20;
ukiStudent.city = "visuvamadu";
console.log(ukiStudent);
```
J.Dishalan 
20
visuvamadu

---

## Q4: Comparison  

**Step 1: Declare**
```js
let a = 10;
let b = "10";
```

**Tasks:**
1. Write result of `a == b`  
2. Write result of `a === b`  

**Answers:**
```js
let a = 10;
let b = "10";
console.log(a==b);
console.log(a===b);
```
true
false

---

## Q5: Number Addition  

Work with numbers  

**Tasks:**
1. Store 25 and 5  
2. Add them  
3. Write output  

**Answers:**
```js
let num1 = 25;
let num2 = 5;
console.log(num1+num2);
```
30

---

## Q6: Array Update  

**Step 1: Declare**
```js
let items = ["pen", "book"];
```

**Tasks:**
1. Add `"bag"`  
2. Remove `"book"`  
3. Write final array  

**Answers:**
```js
let items = ["pen", "book"];
items.push("bag");
items.splice(1,1);
console.log(items);
```
pen, bag

---

## Q7: Boolean Value  

Track true/false  

**Tasks:**
1. Store `false`  
2. Change to `true`  
3. Write both outputs  

**Answers:**
```js
let value = false;
console.log(value);
value = true;
console.log(value);
```
false
true

---

## Q8: Arithmetic Order  

**Tasks:**
1. Write calculation `20 + 5 × 2`  
2. Write output  
3. Change so addition happens first  
4. Write new output  

**Answers:**
```js
let calculation = 20+5*2;
console.log(calculation);
```
30
```js
let calculation = (20+5)*2;
console.log(calculation);
```
50

---

## Q9: Null Value  

Store empty result  

**Tasks:**
1. Create variable with `null`  
2. Change it to a number  
3. Change it to a string  
4. Write outputs  

**Answers:**
```js
let value = null;
console.log(value);
value = 10;
console.log(value);
value = "Hi!";
console.log(value);
```
null
10
Hi!
---

## Q10: Nested Data  

Object with array  

**Tasks:**
1. Create object with name and subjects array  
2. Add one subject  
3. Access one subject  
4. Write output  

**Answers:**
```js
let student = {
   name: "Dishalan",
   subjects:["math","english",]
};
student.subjects.push("ict");
let oneSubject = student.subjects[2];
console.log(oneSubject);
```
ict
---

## Q11: Logical Operators  

**Step 1: Declare**
```js
let a = true;
let b = false;
```

**Tasks:**
- `a && b`  
- `a || b`  
- `!a`  

**Answers:**
```js
let a = true;
let b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);
```
false
true
false

---

## Q12: String + Number  

Mix data types  

**Tasks:**
1. Store `"25"` and `5`  
2. Add them  
3. Write output  
4. Change code so output becomes `30`  

**Answers:**
```js
let a = "25";
let b = 5;
console.log(a+b)
```
255
```js
console.log(Number(a)+b)
```

---

## Q13: Primitive Copy  

**Step 1: Declare**
```js
let a = 10;
let b = a;
```

**Tasks:**
1. Change `b` to 50  
2. Write `a`  
3. Write `b`

**Answers:**
```js
let a = 10;
let b = a;
b = 50;
console.log(a)
console.log(b)
```
10
50

---

## Q14: Pass or Fail  

Use condition  

**Tasks:**
1. Store marks  
2. Write if/else  
3. Write output  

**Answers:**
```js
let marks = 60;
if (marks >= 35){
   console.log("Pass");
}else{
   console.log("Fail");
}
```
pass

---

## Q15: Object Method  

Function inside object  

**Tasks:**
1. Create object with a function returning `"Hello"`  
2. Call it  
3. Change to `"Hi"`  
4. Call again 

**Answers:**
```js
let greeting = {
   greet: function() {
      return "Hello";
   }
};
console.log(greeting.greet());
greeting.greet = function() {
  return "Hi";
};
console.log(greeting.greet());
```
Hello
Hi

---

## Q16: Switch Statement  

**Tasks:**
1. Store a number (1–3)  
2. Write switch for days  
3. Write output  

**Answers:**
```js
let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```
Wednesday

---

## Q17: Invalid Calculation (NaN)  

Wrong math operation  

**Tasks:**
1. Multiply `"hello"` with 2  
2. Write output  
3. Try another similar example  

**Answers:**
```js
let total = "hello" * 2;
cosole.log(total)
```
NaN
```js
let total = "dishalan" * 10;
console.log(total)
```
NaN
---

## Q18: Age Check (Ternary)  

Quick decision  

**Tasks:**
1. Store age  
2. Use ternary  
3. Write output 

**Answers:**
```js
let age = 21;
let ageGroup = (age >= 18) ? "Adult" : "Minor";
console.log(ageGroup)
```
Adult

---

## Q19: Nested Condition  

**Tasks:**
1. Store marks  
2. Write:
   - ≥ 75 → A  
   - ≥ 50 → B  
   - else → C  
3. Write output  

**Answers:**
```js
let marks = 65;
if (marks >= 75) {
  console.log("A");
} else if (marks >= 50) {
  console.log("B");
} else {
  console.log("C");
}
```
B

---

## Q20: If Condition  

**Tasks:**
1. Store marks  
2. Write:
   - ≥ 50 → Pass  
   - else → Fail  
3. Write output  

**Answers:**
```js
let marks = 45;
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```
Fail
---

## Q21: Array Method  

Work with list  

**Tasks:**
1. Create array with two fruits  
2. Add one using method  
3. Remove first item  
4. Write final array  

**Answers:**
```js
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
fruits.shift();
console.log(fruits);
```
['Banana', 'Mango']
---

## Q22: Object Reference  

**Step 1: Declare**
```js
let obj1 = { value: 5 };
let obj2 = obj1;
```

**Tasks:**
1. Change value  
2. Write both outputs  

**Answers:**
```js
let obj1 = { value: 5 };
let obj2 = obj1;
obj2.value = 6;
console.log(obj1);
console.log(obj2);
```
6
6

---

## Q23: Symbol Values  

Unique values  

**Tasks:**
1. Create two symbols with same description  
2. Compare them  
3. Write result 

**Answers:**
```js
let sym1 = Symbol("id");
let sym2 = Symbol("id");
let result = sym1 === sym2;
console.log(result);
```
false

---

## Q24: BigInt  

Large numbers  

**Tasks:**
1. Create a BigInt value  
2. Add another BigInt  
3. Write output 

**Answers:**
```js
let num1 = 9007199254740991n;
let num2 = 10n;
let result = num1 + num2;
console.log(result);
```
9007199254741001n

---

## Q25: Nested Array  

Multi-level list  

**Tasks:**
1. Create nested array  
2. Access one inner value  
3. Access another value  
4. Write outputs  

**Answers:**
```js
let data = [
  ["Apple", "Banana"],
  ["Mango", "Orange"]
];
let value1 = data[0][1];
let value2 = data[1][0];
console.log(value1);
console.log(value2);
```
Banana
Mango

---

## Q26: Logical Condition  

Multiple conditions  

**Tasks:**
1. Store age and ID status  
2. Allow entry only if both conditions are true  
3. Write output  

**Answers:**
```js
let age = 20;
let idStatus = true;
if (age >= 18 && idStatus) {
  console.log("Entry Allowed");
} else {
  console.log("Entry Denied");
}
```
Entry Allowed

---

## Q27: Compare Objects  

Check equality  

**Tasks:**
1. Create two objects with same values  
2. Compare them  
3. Write result 

**Answers:**
```js
let obj1 = { name: "John" };
let obj2 = { name: "John" };
let result = obj1 === obj2;
console.log(result);
```
false

---

## Q28: Temperature Check  

Simple condition  

**Tasks:**
1. Store temperature  
2. Write if/else  
3. Write output  

**Answers**
```js
let temperature = 30;
if (temperature > 35) {
  console.log("Very Hot");
} else {
  console.log("Normal");
}
```
Normal

---

## Q29: Array Reference  

Shared data  

**Tasks:**
1. Create array  
2. Copy it  
3. Add value to second array  
4. Write both arrays  

**Answers**
```js
let array1 = [1, 2, 3];
let array2 = [...array1];
array2.push(4);
console.log(array1);
console.log(array2);
```
1,2,3

1,2,3,4

---

## Q30: String Formatting  

Work with text  

**Tasks:**
1. Store `"  kumar  "`  
2. Remove spaces  
3. Convert to uppercase  
4. Write final output  

**Answers**
```js
let name = "  kumar  ";
name = name.trim();
name = name.toUpperCase();
console.log(name);
```
KUMAR

---
