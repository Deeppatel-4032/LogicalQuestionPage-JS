// wap to programe print no 1 to 10 using do while
// let no = 1;
// do {
//   document.write(no);
//   no++;
// } while (no <= 10);

// =================================================================================

// wap to programe print no 1 to n using while

// let i = 1;
// let num = 20;

// while (i <= num) {
//   document.write(i);
//   i++;
// //   document.write("<br>");
// }

// ============================================================================================

// wap to programe print sum of numbers using while

// let no = 12345,
//   digit,
//   sum = 0;

// while (no > 0) {
//   digit = no % 10;
//   no /= 10;
//   sum += Math.floor(digit);
// }
// document.write("sum of number >>>  ", sum);

// ==================================================================================

// sum of firstDigit & lastDigit number

// let num = 92349,
//   fd,
//   ld,
//   sum = 0;

// ld = num % 10;
// fd = num;

// while (fd > 9) {
//   fd = Math.floor(fd / 10);
// }
// sum = fd + ld;
// // document.write("firstDigit & lastDigit sum of numner >>>", sum);
// console.log("firstDigit & lastDigit sum of numner >>>", sum);

// ====================================================================================

// it's palindorme number yes or not, ---> 121 is a palindorme numbres, 123432 not palindorme

// 1 way

// let num = 1241,
//   rev = 0,
//   temp,
//   digit;

// temp = num;

// while (temp > 0) {
//   digit = temp % 10;
//   rev = rev * 10 + digit;
//   temp = Math.floor(temp / 10);
// }

// if (num == rev) {
//   document.write("it's palindorme number");
// } else {
//   document.write("it's not alindrome number");
// }

// ======================================================================================

// wap to programr prime or not check
// koy bhi number ne multipy karvathi jiyare te pota thi j multiply thay ane bija koy thi multipy na thy tene prime number kahevay

// let num = 4;
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % 2 === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   document.write("it's prime");
// } else {
//   document.write("it's not prime");
// }

// ====================================================================

// wap to armstrong numner using while loop
// --> armstorng number is original number na cubes kari teno sum original value sem thay to tem amstong numner chhe.
// --> ex => 0, 1, 153, 371 and 407 armstrong numbers

// let num = 153;
// let arm = 0;
// let temp = num;

// while (temp > 0) {
//   let digit = temp % 10;
//   arm += digit * digit * digit;
//   temp = Math.floor(temp / 10);
// }

// if (num == arm) {
//   console.log("it is an Armstong Number");
// } else {
//   console.log("it is not an Armstong Number");
// }

// ==============================================================================

// wap to magic numner using while loop

// let num = 10; //1 + 9 = 10
// let temp = num;

// while (temp > 9) {
//   // Continue until a single digit
//   let sum = 0;

//   while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
//   }

//   temp = sum; // Prepare for next iteration
// }

// if (temp === 1) {
//   console.log(num + " is a Magic Number");
// } else {
//   console.log(num + " is not a Magic Number");
// }

// ======================================================================================

// wap to Factorial nummer using while loop

// let num = 5;
// let factorial = 1;
// let i = 1;

// while (i <= num) {
//   factorial *= i;
//   i++;
// }

// console.log(" number is: " + factorial);

// ======================================================================================

// wap to facter nummer using while loop

// let num = 34; // You can change this number
// let i = 1;

// console.log("Factors of " + num + " are:");

// while (i <= num) {
//   if (num % i === 0) {
//     console.log(i);
//   }
//   i++;
// }

// ======================================================================================

// wap to multiply teble for any numner using while loop

// let num = 5; // Change this number to generate a different table
// let i = 1;

// while (i <= 10) {
//   console.log(num + " x " + i + " = " + num * i);
//   i++;
// }

// ======================================================================================

// wap to  Fibonacci series numner using while loop

// 0 0
// 1 1
// 0+1=1
// 1+1=2
// 1+2=3
// 2+3-5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21
// 13 + 21 = 34

// let n = 10;
// let a = 0,
//   b = 1;
// let i = 1;

// console.log("Fibonacci Series up to " + n + " terms:");

// while (i <= n) {
//   console.log(a);
//   let next = a + b; // 1 + 1= 2
//   a = b; //a = 2
//   b = next; // 1
//   i++;
// }

// ======================================================================================
