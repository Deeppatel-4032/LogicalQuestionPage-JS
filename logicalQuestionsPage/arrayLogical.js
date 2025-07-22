// 1. array is multipal Datatype of Collection in arrry and addition it was two type of array 1-dimension multipal simension

// Datatype of Collection
// let a = [12,32, "sfler", {kjsdf}, []]

// 1 dimensional arry
// let a = [1, 2, 3, 4, 5]

// 2 dimensional
// let a = [[1, 2], [3, 4, 5]]

// 3 dimensional
// let a = [[[1, 2], [3, 4, 5]], [[1, 2], [3, 4, 5]]]
// 0,1,0

//traverse word mening --> accesing all elements --> loop thi traverse kari sakay
//  forloop no vadhare use thay because essay to anderstand and read  traveres karva

// ========================================================================================================

// wap to search in array index value

// let arr = [2, 4, 5, 3, 7, 8];
// let search = 5;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == search) {
//     console.log("found the index value ", arr[i]);
//   }
// }

// ======================================================================================

// 2. wap to array element sum or average --> use case --> toodAp ma // final amount / discount amount / lone intrest / EMI calculatore

// let arr = [1, 2, 3, 4, 5];

// let sum = 0,

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("sum of Array : ", sum);

// let avg = sum / arr.length;

// console.log("average of Array ", avg);

//=======================================================================================

// 3. wap to count (+)positive, (-)negative and (0)zero value prints

// let arr = [1, 4, 5, 0, -3, -6, 0, -8];

// let posCount = 0,
//   negCount = 0,
//   zeroCount = 0;
// // let negCount = 0;
// // let zeroCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     posCount++;
//   } else if (arr[i] < 0) {
//     negCount++;
//   } else {
//     zeroCount++;
//   }
// }
// console.log("total positive Number : ", posCount);
// console.log("total negative Number : ", negCount);
// console.log("total zero Number : ", zeroCount);

// =======================================================================================

// 4. wap to count even and odd values in array
// wap to count sum of even and odd values in array
// wap to multiply by 5 each element in given array
// wap to multiply by 5 even element in given array
// wap to multiply by 5 odd element in given array

// let arr = [1, 4, 3, 2];

// let isEven = 0;
// let isOdd = 0;
// let isEvenSum = 0;
// let isOddSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   // arr[i] *= 5; // each elemenet multiply

//   if (arr[i] % 2 === 0) {
//     // isEven++;
//     isEvenSum += arr[i]; //sum of even values
//     // arr[i] *= 5; // only even elemenet multiply
//   } else {
//     isOdd++;
//     isOddSum += arr[i]; //sum of odd values
//     // arr[i] *= 5; // only odd elemenet multiply
//   }
// }

// console.log("it's Odd number : ", isOdd);
// console.log("it's Even number : ", isEven);
// console.log("it's sum of Odd number : ", isOddSum);
// console.log("it's sum of Even number : ", isEvenSum);
// console.log("it's Multiply by 5 each element : ", arr);

// =======================================================================================

// 6. wap to insert the value in the array

// let array = [3, 5, 6, 75, 55, 7, 8, 34, 88];

// let pos = 2;
// let value = 45;

// for (let i = array.length - 1; i >= pos; i--) {
//   array[i + 1] = array[i];
// }
// array[pos] = value;

// console.log(array);

//===========================================a=============================================

// 7. wap to delete element in giving value in array

// let arr = [1, 3, 4, 5, 6, 9, 8];
// let value = 6;

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] == value) {
//     for (let j = i; j < arr.length - 1; j++) {
//       arr[j] = arr[j + 1];
//     }
//   }
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i]);
// }

// ======================================================================================

// 8. wap to sort array (Ascending & descending)

// let arr = [55, 3, 53, 1, 22, 44, 23, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length - 1; j++) {
//     if (arr[i] > arr[j]) {
//       // Ascending  --> arr[i] < arr[j] --> descending
//       // swapping the value
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// // the print the values
// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i]);
// }

// =====================================================================================

// 9. wap to reverce array

// let arr = [1, 3, 5, 6, 7, 8, 9];

// let revArray = []; // add to reverse array
// let j = 0; // start position  in reverce array new variable
// // start the for loop last index position to 0 index shudhi forLoop reverse pharavani chhe
// for (let i = arr.length - 1; i >= 0; i--) { // last position thi remove karvanu chhe
//   revArray[j] = arr[i];
//   j++;
// }

// console.log(revArray);

// =====================================================================================

// 10. wap to the palidrome array or not 1st Way
// let arr = [1, 2, 3, 2, 1];

// let arrRev = [];
// let j = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   arrRev[j] = arr[i];
//   j++;
// }
// console.log("reverse Array", arrRev);

// let flag = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] != arrRev[i]) {
//     flag = 1;
//     break;
//   }
// }

// if (flag == 0) {
//   console.log("Array is palindrome");
// } else {
//   console.log("Array is not palindrome");
// }

// ========================================================================================================

// 11. wap to the palidrome array or not with math.ceil method 2nd way sort ma

// let array = [1, 2, 3, 2, 1];

// let flag = 0;

// for (let i = 0, j = array.length - 1; i <= array.length / 2; i++, j--) {
//   if (array[i] != array[j]) {
//     flag = 1;
//     console.log("it's not palidrome array");
//     break;
//   }
// }
// if (flag == 0) {
//   console.log("it's palidrome array");
// }

// ========================================================================================================

// 12. wap to merge two different array in single dimensional array

// let array1 = [1, 3, 4, 5, 6, 7, 9];
// let array2 = [5, 6, 7, 9, 3, 5, 6];

// // array1 to array2
// for (let i = array1.length, j = 0; j <= array2.length - 1; i++, j++) {
//   array1[i] = array2[j];
// }

// // array2 to array1
// // for (let i = array2.length, j = 0; j <= array1.length - 1; i++, j++) {
// //   array2[i] = array1[j];
// // }

// console.log(array1);
// // console.log(array2);

// ========================================================================================================

// 13. wap to remove duplicate values in given array
// wap to find unique value in given Array
// wap to find interaction value in given Array

// let arr = [1, 3, 2, 5, 6, 4, 3, 5, 3, 6, 7, 8];

// let uniqueValue = [];
// let index = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//   let flag = 0;
//   for (let j = 0; j <= uniqueValue.length - 1; j++) {
//     if (arr[i] == uniqueValue[j]) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 0) {
//     uniqueValue[index] = arr[i];
//     index++;
//   }
// }

// console.log(uniqueValue);

// ========================================================================================================

// wap to find frequency || Occurrence of element in array

// 1 is found 1 times
//3 is found 3 times
//5 is found 3 times
//6 is found 2 times
// 7 is found 1 times
// 2 is found 1 times
// 9 is found 2 times

// let originalArray = [1, 3, 5, 3, 5, 2, 6, 6, 9, 7, 3, 2, 5, 9];
// //[1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1]
// // 0 positive number me ata hai
// let newArray = []; // seme value pachhi na ave atle -1 karvu pase newArray ma

// // step-1 copy array originalArray to newArray useing the forLoop, not using the refreshe pass
// for (let i = 0; i <= originalArray.length - 1; i++) {
//   newArray[i] = originalArray[i];
// }

// // step-2 travel each element both array
// for (let i = 0; i <= originalArray.length - 1; i++) {
//   // step-3 count value
//   let count = 0; // count before rest count
//   for (let j = 0; j <= newArray.length - 1; j++) {
//     if (originalArray[i] == newArray[j]) {
//       count++; // increment count
//       newArray[j] = -1; //newarray semevalue na ave mate -1
//     }
//   }

//   if (count > 0) {
//     console.log(`${originalArray[i]} is found ${count} times`);
//   }
// }
