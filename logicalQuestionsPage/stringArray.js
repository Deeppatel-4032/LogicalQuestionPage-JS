// 1. how can you check if two string are anagrams
// anagrams two string ni need hoy tema bhi both string char. seme hova joye and length bhi sem hovi joye
// steps --> find both length --> sort(ascending order ma)
// sort karva mate string ne Array ma convert karvu pade tem mate split() use thy, te thi  chactore split thy array ma
// pachhi sort() no use kari ne ascending ma set karvan hoy chhe pachhi join() thi string ma convert thy jase
// pachhi check the length and charechter

// function anagram(str1, str2) {
//   // find length
//   len1 = str1.length;
//   len2 = str2.length;

//   if (len1 != len2) return false;
//   // convert array & split ascendin(sort)(join)string
//   let nstr1 = str1.split("").sort().join("");
//   let nstr2 = str2.split("").sort().join("");

//   //   check element both element seme or not
//   for (let i = 0; i <= len1; i++) {
//     if (nstr1[i] != nstr2[i]) return false;
//   }
//   return true;
// }
// // anagram string two
// let s1 = "listen";
// let s2 = "silent";
// // condetion me function call
// if (anagram(s1, s2)) {
//   console.log("String are Anagram");
// } else {
//   console.log("String are Anagram");
// }

// ======================================================================================

// how do you count the number of vowels or consonants in string

// function vowelConsonat(str) {
//   let vowels = "aeiou";
//   let v = 0;
//   let c = 0;
//   let wordCount = 0;

//   for (let i = 0; i <= str.length; i++) {
//     if (vowels.includes(str[i])) {
//       v++;
//     } else if (str[i] > "a" && str[i] < "z") {
//       c++;
//     } else {
//       wordCount++;
//     }
//   }

//   console.log("Total vowels are string : ", v);
//   console.log("Total consonats are string: ", c);
//   console.log("Total words are string: ", wordCount);
// }

// let s1 = "keep silent pleace do not distop";
// vowelConsonat(s1);

// ======================================================================================

// // how do you count the number of words in string

// function wordCounter(str) {
//   let wordCount = 0;

//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] == " ") {
//       wordCount++;
//     }
//   }
//   wordCount++;
//   console.log("Total words are string: ", wordCount);
// }

// let s1 = "hello how are you good";

// wordCounter(s1);

// ======================================================================================

// task-1
// how do you count the number of charctor with space in string

// function charCounter(str) {
//   let charCount = 0;

//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] == "") {
//       str[i + 1];
//     }
//     charCount++;
//   }

//   console.log("Total charctors with space are string: ", charCount);
// }

// let s1 = "hello how are you";

// charCounter(s1);

// ======================================================================================

// task-2
// how do you count the number of charctor in string
// function charCounter(str) {
//   let charCount = 0;

//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] == " ") {
//       str[i];
//     } else {
//       str[i + 1];
//       charCount++;
//     }
//   }

//   console.log("Total charctors are string: ", charCount);
// }

// let s1 = "hello how are ";

// charCounter(s1);

// ======================================================================================

// 2. wap to check palindrome or no in string

// function palindrome(s) {
//   for (let i = 0, j = s.length - 1; i <= s.length / 2; i++, j--) {
//     if (s[i] != s[j]) {
//       return false;
//     }
//   }
//   return true;
// }

// let str = "cocd";

// if (palindrome(str)) {
//   console.log("String is Palindrome");
// } else {
//   console.log("String is not Palindrome");
// }

// ======================================================================================

// 3. wap to reverse in string

// function reverseSting(r) {

//   //   let rev = r.split("").reverse().join("");

//   let rev = "";
//   for (let i = r.length - 1; i >= 0; i--) {
//     rev += r[i];
//   }

//   console.log(rev);
// }

// let str = "reverse";

// reverseSting(str);

// ======================================================================================

// write a function reverse words in sentence

// let sentence = "i love javascript and back-end";

// // convert Array --> reversere Array
// let nSentence = sentence.split(" ").reverse();

// for (let i = 0; i <= nSentence.length - 1; i++) {
//   nSentence[i] = nSentence[i].charAt(0).toUpperCase() + nSentence[i].slice(1);
// }

// // output --> Back-end And Javascript Love I
// console.log(nSentence.join(" "));
