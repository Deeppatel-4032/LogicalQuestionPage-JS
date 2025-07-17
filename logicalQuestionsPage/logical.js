// wap to programe print no 1 to 10 using do while
// let no = 1;
// do {
//   document.write(no);
//   no++;
// } while (no <= 10);

// =================================================================================

// wap to programe print no 1 to n using while

// let i = 1;
// num = 20;

// while (i <= num) {
//   document.write(i);
//   i++;
//   //   document.write("<br>");
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

// let num = 423436,
//   fd,
//   ld,
//   sum = 0;

// ld = num % 10;
// fd = num;

// while (fd >= 10) {
//   fd = Math.floor((fd /= 10));
// }
// sum = fd + ld;
// document.write("fd & ld sum is >>>", sum);

// ====================================================================================

// it's palindorme number yes or not, ---> 121 is a palindorme numbres, 123432 not palindorme

// 1 way

// let num = 12133, rev = 0, temp, digit;

// temp = num;

// while (num > 0) {
//     digit = num % 10;
//     rev = (rev * 10) + digit;
//     num = Math.floor(num /= 10);
// }

// if (temp == rev) {
//     document.write("it's palindorme number")
// } else {
//     document.write("it's not alindrome number");
// }

// ======================================================================================

// palindrome 2nd way

// let num = 101;
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % 2 === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     document.write("it's prime");
// } else {
//     document.write("it's not prime");
// }
