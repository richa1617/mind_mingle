//Write a function with one number argument that returns double the argument.

function doubleNumber(num: number): number {
  let result = num * 2;
  return result;
}

//console.log(doubleNumber(3));

//Write a function with two number arguments that returns double the first argument.

function double2(a: number, b: number): number {
  return a * a;
}

//console.log(doubleNumber(3));

//Write a function with two number arguments that returns double the largest argument.

function double3(a: number, b: number): number {
  return a * a > b * b ? a * a : b * b;
}

//console.log(double3(5, 8));

//Write a function with a string argument and a number argument that repeates the string from the first argument but repeated the amount of times equal to the second argument. If the second number is negative, return an empty string.

function repeat(a: string, b: number): string {
  if (b < 1) {
    return "";
  }

  let result = "";
  for (let i = 0; i < b; i++) {
    result = result + a + " ";
  }

  return result;
}

//console.log(repeat("hello", 0));

//Write a function with two number arguments. Have it return the largest number of the two.

function max(a: number, b: number): number {
  return Math.max(a, b);
}

//Write a function with two number arguments. Have it return the smallest number of the two divided by the largest number.

function maxDivide(a: number, b: number): number {
  return a > b ? b / a : a / b;
}

//Write a function with two string arguments. Have it return the longest string.

function maxStr(a: string, b: string): string {
  return a.length > b.length ? a : b;
}

//Write a function with a single number argument. Return a boolean that indicated wether this number is even.

function even(a: number): boolean {
  return a % 2 == 0 ? true : false;
}

//Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.

function evenBelow(a: number): number[] {
  let result = [];
  for (let i = 0; i < a; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  return result;
}

//console.log(evenBelow(7));

//Write a function with a single array of numbers argument. Return an array of all the numbers in this array that are even.

function evenIn(arr: number[]): number[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

//console.log(evenIn([3]));

//Write a function with a single array of numbers argument. Return the result of multiplying all the numbers. If the input contains just 1 number, return that number.

function multiplyArray(num: number[]) {
  let result: number = 1;

  for (let i = 0; i < num.length; i++) {
    result = result * num[i];
  }

  return result;
}

//console.log(multiplyArray([1]));

//Write a function with a single array of numbers argument. Return the result of dividing the number from left to right. So the first number gets divided by the second and the result of that gets divided by the third (and so on..). If the array contains a zero, return zero. If the array contains just one number, return that number.

function divideArray(arr: number[]) {
  if (arr.length === 1) {
    return arr[0];
  }

  let result: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) {
      return 0;
    } else {
      result = result / arr[i];
    }
  }
  return result;
}

//console.log(divideArray([20, 10, 4, 5, 0, 6]));

//Write a function with two string arguments. Split both strings in halves and recombine the halves. Return the longest results of the two combinations (or the first one if both have the same length).

function splitComibne(a: string, b: string): string {
  let a_mid = Math.floor(a.length / 2);
  let b_mid = Math.floor(b.length / 2);

  let a_word1 = a.slice(0, a_mid);
  let a_word2 = a.slice(a_mid, a.length);

  let b_word1 = b.slice(0, b_mid);
  let b_word2 = b.slice(b_mid, b.length);

  let s1 = a_word1 + b_word1;
  let s2 = a_word2 + b_word2;

  //console.log(a_word1);

  let result = s1.length >= s2.length ? s1 : s2;

  return result;
}

//console.log(splitComibne("h", "blahlah"));

//Write a function with one {name: string} argument. Return the name property.

function getName(obj: { name: string }): string {
  return obj.name;
}

//console.log(getName({ name: "richa" }));

//Write a function with one [{name: string}](list of object) argument. Return an array with all the name properties.

interface List {
  name: string;
}

function getNames(a: List[]): string[] {
  return a.map((e) => e.name);
}

//console.log(getNames([{ name: "richa" }, { name: "jo" }, { name: "bo" }]));

//Write a function with one [{firstname: string, lastname: string}](list of object) argument. Return an array with all the full names (both the first and the last name as a single string with a space in between them).

interface Name {
  firstName: string;
  lastName: string;
}

function combineName(arr: Name[]): string[] {
  let result = arr.map((e) => e.firstName + e.lastName);

  return result;
}

console.log(
  combineName([
    { firstName: "richa", lastName: "mahajan" },
    { firstName: "akash", lastName: "maha" },
  ])
);
//Write a function with one [{country: string}](list of object) argument. Return an array with every unique country value in the input array.

interface Country {
  country: string;
}
function uniqueCountires(a: Country[]): string[] {
  let country_names = a.map((e) => e.country);

  let unique = country_names.filter((e, index, array) => {
    return array.indexOf(e) === index;
  });
  return unique;
}

// console.log(
//   uniqueCountires([
//     { country: "india" },
//     { country: "nl" },
//     { country: "belgium" },
//     { country: "india" },
//   ])
// );

//

// function countCountries(a: Country[]): Record<string, number> {
//   let names = a.map((e) => e.country);

//   let result={}

//   for(let i=0;i<names.length;i++){
//     if(names[i] in result){
//         result[names[i]]

//     }else{
//       result={...result, names[i]:1}
//     }

//   }

//   return result;
// }

function highestNumber(arr: number[]): number {
  return Math.max(...arr);
}

//console.log(highestNumber([4, 5, 6, 10, 1, 90]));

function average(arr: number[]): number {
  let sum = arr.reduce((a, c) => a + c);
  return sum / (arr.length - 1);
}

//console.log(average([2, 5, 5, 10, 20]));

function mode(arr: number[]) {
  let hash = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) {
      hash.set(arr[i], hash.get(arr[i]) + 1);
    } else {
      hash.set(arr[i], 1);
    }
  }

  const max = Math.max(...hash.values());
}

//console.log(mode([1, 2, 2, 3, 3, 2, 1]));

// reverse
// Write a function with one string argument. Return the reversed string.

function reverse(s: string): string {
  let w = s.trim();
  return [...w].reverse().join("");
}
//console.log(reverse("Hello "));

//palindrome
// Write a function with one string argument. Return true or false wether this string is a palindrome.

function palindrom(s: string): boolean {
  let word = s.toLowerCase();
  let mid = Math.floor(s.length / 2);
  let i = 0;
  let j = word.length - 1;
  while (i < mid) {
    if (word[i] != word[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
}

//console.log(palindrom("racecAr"));

//pyramid
//Write a function with one number argument. Have it log a pyramid of that size

function pyramid(n: number) {
  let result = ""; //1,2,3
  for (let i = 1; i <= n; i++) {
    let curr = i; //1
    for (let j = 1; j <= curr; j++) {
      result += i + " ";
    }
    result += "\n";
  }
  return result;
}

//console.log(pyramid(3));

// array_intersect
// Write a function that takes two [number] arguments and return an array that contains all numers that are in both arrays.

function intersect(a: number[], b: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < a.length; i++) {
    let ele = a[i];
    for (let j = 0; j < b.length; j++) {
      if (ele == b[j]) {
        result.push(ele);
        break;
      }
    }
  }
  return result;
}

console.log(intersect([2, 3, 7, 910], [3, 4, 6, 7, 2]));
interface Person {
  id: number;
  name: string;
  age: number;
}

const people:Person[] =[
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Mary", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Mark", age: 50 },
  { id: 6, name: "Julia", age: 27 }
];

function evenIds(arr:Person[]){
   let even=people.filter((people)=>{
      let id=people.id
      return id %2 ===0
   })
  return even
}


//console.log(evenIds(people))
























