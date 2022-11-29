// let dublicateZero = [1, 0, 2, 3, 0, 4, 5, 0];
// for (let i = 0; i < dublicateZero.length; i++) {
//   if (dublicateZero[i] == 0) {
//     for (let j = dublicateZero.length - 1; j >= i; j--) {
//       dublicateZero[j + 1] = dublicateZero[j];
//     }
//     i++;
//     dublicateZero.length = dublicateZero.length - 1;
//   }
// }
// console.log(dublicateZero);

// let zero = [1, 0, 0, 2, 6, 7, 3, 0, 4, 5, 0];
// for (let i = 0; i < zero.length; i++) {
//   if (zero[i] == 0) {
//     zero = [...zero.slice(0, i), 0, ...zero.slice(i)];
//     zero.length = zero.length - 1;
//     i++;
//   }
// }
// console.log(zero);

// function checkPattern(arr, str) {
//   if (arr.length != str.length) {
//     return false;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = str[i] + arr[i].join('');
//     console.log(arr);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i][0] === arr[j][0] || arr[i].slice(1) === arr[j].slice(1)) {
//         if (arr[i] !== arr[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
// }

// let array = [
//   [8, 8, 8, 8],
//   [7, 7, 7, 7],
//   [6, 6, 6, 6],
//   [5, 5, 5, 5],
// ];
// let str = 'AABB';
// console.log(checkPattern(array, str));
