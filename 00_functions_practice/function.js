//Write a function with one number argument that returns double the argument.
function doubleNumber(num) {
    var result = num * 2;
    return result;
}
//console.log(doubleNumber(3));
//Write a function with two number arguments that returns double the first argument.
function double2(a, b) {
    return a * a;
}
//console.log(doubleNumber(3));
//Write a function with two number arguments that returns double the largest argument.
function double3(a, b) {
    return a * a > b * b ? a * a : b * b;
}
//console.log(double3(5, 8));
//Write a function with a string argument and a number argument that repeates the string from the first argument but repeated the amount of times equal to the second argument. If the second number is negative, return an empty string.
function repeat(a, b) {
    if (b < 1) {
        return "";
    }
    var result = "";
    for (var i = 0; i < b; i++) {
        result = result + a + " ";
    }
    return result;
}
//console.log(repeat("hello", 0));
//Write a function with two number arguments. Have it return the largest number of the two.
function max(a, b) {
    return Math.max(a, b);
}
//Write a function with two number arguments. Have it return the smallest number of the two divided by the largest number.
function maxDivide(a, b) {
    return a > b ? b / a : a / b;
}
//Write a function with two string arguments. Have it return the longest string.
function maxStr(a, b) {
    return a.length > b.length ? a : b;
}
//Write a function with a single number argument. Return a boolean that indicated wether this number is even.
function even(a) {
    return a % 2 == 0 ? true : false;
}
//Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.
function evenBelow(a) {
    var result = [];
    for (var i = 0; i < a; i++) {
        if (i % 2 == 0) {
            result.push(i);
        }
    }
    return result;
}
//console.log(evenBelow(7));
//Write a function with a single array of numbers argument. Return an array of all the numbers in this array that are even.
function evenIn(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(evenIn([3, 4, 56, 9, 10, 34, 99]));
