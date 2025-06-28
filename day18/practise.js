// var sub1 = 88;
// var sub2 = 78;
// var sub3 = 99;
// var total = sub1 + sub2 + sub3;
// var average = total / 3;
// var grade;
// if (average >= 90) {
//     grade = 'A';
// } else if (average >= 80) {
//     grade = 'B';
// } else if (average >= 70) {
//     grade = 'C';
// } else if (average >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }
// console.log("Total = " + total);
// document.write("Average = " + average); 
// document.write("Grade = " + grade);


// print electric-bill:
// var u = 1200; 
// var bill = 0;
// switch (true) {
//   case (u < 200):
//     bill = 0;
//     break;
//   case (u >= 200 && u < 500):
//     bill = u * 5;
//     break;
//   case (u >= 500 && u < 1000):
//     bill = u * 5;
//     break;
//   case (u >= 1000 && u < 1500):
//     bill = u * 10;
//     break;
//   case (u >= 1500):
//     bill = u * 20;
//     break;
//   default:
//     bill = 0;
// }
// console.log("Units Consumed: " + u);
// console.log("Electricity Bill: " + bill);


// print given number is zero/positive/negative:
// var num = -5; 
// switch (true) {
//     case (num > 0):
//         console.log("Positive");
//         break;
//     case (num < 0):
//         console.log("Negative");
//         break;
//     case (num == 0):
//         console.log("Zero");
//         break;
//     default:
//         console.log("Not a number");
// }


// printing that the year is leap year or not:
// var year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(year + " is a Leap Year");
// } else {
//   console.log(year + " is NOT a Leap Year");
// }


// printing 5 table 
// var num=5;
// for(i=1;i<=10;i++){
//     document.write("5 * "+i+" = "+(5*i)+"<br>");
// }


// print 1 to 50 even numbers:
// var count=0
// for(i=0;i<=50;i++){
//     if(i%2==0){
//         count++;
//         console.log(i);
//         console.log("Count of the no of even  numbers:"+count);
//     }
// }


// patterns:
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         document.write(i);
//     }
//     document.write("<br>");
// }


// sum of first 10 natural numbers:
// var sum=0;
// for(var i=1;i<=10;i++){
//     sum+=i;
// }
// console.log("sum: ",sum);


// let num = 6; 
// console.log(`Factors of ${num} are:`);
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }


// factorial of a number:
// var num = 4;
// var factorial = 1;
// if (num === 0 || num === 1) {
//   console.log("Factorial is 1");
// } else {
//   for (let i = 2; i <= num; i++) {
//     factorial *= i;
//   }
//   console.log("Factorial of", num, "is", factorial);
// }