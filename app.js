// Make a list of numbers. 
// Then, use a trick to make a new list where each number is twice its original value.
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) { return number * 5; });
console.log(doubledNumbers);
