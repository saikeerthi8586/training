
// factorial of a number:
var num = 4;
var factorial = 1;
if (num === 0 || num === 1) {
  console.log("Factorial is 1");
} else {
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log("Factorial of", num, "is", factorial);
}