let num = 3;
// Solution One
console.log(num * --num); // 6

num = 3;
// Solution Two
console.log(num ** --num - ++num); // 6

num = 3;
// Soultion Three
console.log(num + num); // 6

num = 3;
// Soultion Four
console.log(num * (true + true)); // 6

num = 3;
// Solution Five
console.log(num * num - num); // 6

num = 3;
// Solution Six
console.log((num++ * num) / (true + true)); // 6

num = 3;
// Solution Seven
console.log(((++num * --num) % num ** --num) * num); // 6
