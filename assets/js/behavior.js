// // //////
// // push, unshift, pop, shift
// //
// const fruits = ["banana", "orange", "apple"];

// // push
// fruits.push("grape");
// console.log(fruits); // => ["banana", "orange", "apple", "grape"] 

// // unshift
// fruits.unshift("mikan");
// console.log(fruits); // => ["mikan", "banana", "orange", "apple", "grape"] 

// // pop
// fruits.pop();
// console.log(fruits); // => ['mikan', 'banana', 'orange', 'apple']

// // shift
// fruits.shift();
// console.log(fruits); // => ['banana', 'orange', 'apple']

// // //////
// // splice, slice
// //
// const arr = [1,2,3,4,5,6,7,8,9,10];

// // splice
// // インデックス番号nから、インデックス番号nを起点にn個を選択して取る。
// const spliceResult = arr.splice(2, 7);
// console.log(spliceResult); // => [3, 4, 5, 6, 7, 8, 9]
// console.log(arr);    // => [1, 2, 10]

// // slice
// // インデックス番号nから、1番目の要素を起点にn個を選択して取る。
// const sliceResult = arr.slice(2, 7);
// console.log(sliceResult); // => [3, 4, 5, 6, 7]
// console.log(arr);    // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // //////
// // concat
// //
// // 結合
// const fruits = ["banana", "orange", "apple"];
// const newFruits = fruits.concat(["melon", "grape"]);
// console.log(newFruits);

// // 複製
// const newFruits = fruits.concat();
// newFruits.push("lemmon");
// console.log(newFruits);
// console.log(fruits);


// // //////
// // indexOf
// // 最初に一致した添え字を返す
// // 最後まで検索したがなかったので『最後 === -1』を返す。
// const fruits = ["banana", "orange", "apple"];
// const result = fruits.indexOf("apple");
// console.log(result); // => 2
// const result = fruits.indexOf("melon");
// console.log(result); // => -1

// // //////
// // include
// //
// const fruits = ["banana", "orange", "apple"];
// const bool = fruits.includes("apple");
// console.log(bool); // => true
// const bool = fruits.includes("melon");
// console.log(bool); // => false


// let val1 = "hello";
// let val2 = val1;
// val2 = "bye";
// console.log(val1);

// let arr1 = ["hello", "hello"];
// let arr2 = arr1;
// arr2 = ["bye", "bye"];
// console.log(arr1);


// const fruit = "apple";
// fruit = "orange";
// console.log(fruit);

// console.log("This is Tom's house.");
// console.log('This is Tom\'s house.');

// console.log(5 + 6 - 1);
// console.log((5 + 6 - 1) * 2);
// console.log((5 + 6 - 1) % 3);
// console.log((5 + 6 - 1) ** 3);


// console.log(.3);
// console.log(1e4);
// console.log(10n);
// console.log(1e4 + 10n);



// function sleep(ms) {
//   const startTime = new Date();
//   while(new Date() - startTime < ms);
//   console.log("sleep関数が完了しました。");
// }

// sleep(3000);

// function clickHandler() {
//   console.log("ボタンが押されました。");
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", clickHandler);


// function sleep(ms) {
//   setTimeout(function() {
//     console.log("sleep関数が完了しました。");
//   }, ms)
// }

// sleep(3000);

// function clickHandler() {
//   console.log("ボタンが押されました。");
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", clickHandler);