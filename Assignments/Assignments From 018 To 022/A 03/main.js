let num = "10";

// Solution One
console.log(num * (true + true)); // 20

// Solution Two
console.log((num * num) / (num / 2)); // 20

// Solution Three
console.log(num / (true / (true + true))); // 20

// Solution Four
console.log(+num + +num); // 20
