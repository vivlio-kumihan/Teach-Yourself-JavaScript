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