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
