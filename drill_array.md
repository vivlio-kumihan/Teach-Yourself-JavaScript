# 配列

## map

__Q:__ 配列 `const arr = [10, 20, 30, 40];` がある。
それぞれの値に2をかけた新しい配列を生成させなさい。

### for of 版

__A:__
```js
const arr = [10, 20, 30, 40];
const newArr = [];
for(const val of arr) {
  newArr.push(val * 2);
}
console.log(newArr);
```

### map版

```js
const arr = [10, 20, 30, 40];
const newArr2 = arr.map(val => val * 2);
console.log(newArr2);
```

## filter

__Q:__ 配列 `const arr = [10, 20, 30, 40];` がある。
それぞれの値に2をかけて、50以上の値だけの新しい配列を生成させなさい。

__A:__
### for of 版

```js
const arr = [10, 20, 30, 40];
const newArr = [];

for(let val of arr) {
  val *= 2;
  (val >= 50) && newArr.push(val);
}
console.log(newArr);
```

### map, filter 版

```js
const newArr2 = arr.map(val => val * 2)
                .filter(val => val >= 50);
console.log(newArr2);
```

## 分割代入

### 配列を分割代入で出力する

__Q:__ 配列 `["Japan", "Tokyo", "Shinjuku"]` を分割代入によってコンソールに出力する関数を定義しなさい。

ヒント：配列の分割代入

```js
[country, state, city] = ["Japan", "Tokyo", "Shinjuku"]
console.log(country);
console.log(state);
console.log(city);
```

__A:__

```js
const arr = ["Japan", "Tokyo", "Shinjuku"];
const dest = ([country, state, city]) => {
  console.log(country);
  console.log(state);
  console.log(city);
};
dest(arr);
```

### オブジェクトを分割代入で出力する

__Q:__ オブジェクト `{ country: "Japan", state: "Tokyo", city: "Shinjuku" }` を分割代入によってコンソールに出力する関数を定義しなさい。

ヒント：オブジェクトの分割代入

```js
{ country, state, city} = { country: "Japan", state: "Tokyo", city: "Shinjuku" }
console.log(country);
console.log(state);
console.log(city);
```

__A:__


```js
const hash = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
const dest = ({ country, state, city }) => {
  console.log(country);
  console.log(state);
  console.log(city);
};
dest(hash);
```

## スプレッド演算子

1. 配列の要素を関数の引数として渡すときに使う。
1. 元の配列、オブジェクトをクローンして新しく生成させるときに使う。
1. 関数定義の引数に渡して、実行時渡ってきた引数を配列に格納する。

__Q1.__ 配列 `[3, 1, 4, 1, 5, 10, 2, 6]` の最大値をコンソールに出力しなさい。

__A.__

```js
const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums);
console.log(result);
```

__Q2-1.__ 配列 `[1, 2, 3]` を複製させて元の配列と同じものかどうかを調べなさい。

__A.__

```js
let arr = [1, 2, 3];
let myArr = [...arr];
console.log(arr === myArr);
```

__Q2-2.__ 配列 `[1, 2, 3]` `[4, 5, 6]` をまとめなさい。

__A.__

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2 ];
console.log(newArr);
```

__Q2-3.__ オブジェクト `{ name: "nob", age: 59 }` を複製しプロパティを `{ name: "john", age: 40 }` に変更しなさい。

__A.__

```js
const obj = { name: "nob", age: 59 };
const newObj = { ...obj };
newObj.name = 'john';
newObj.age = 40;
console.log(obj, newObj);
```

__Q3-1.__ 関数の引数を与えた複数の値を配列にして返す関数を関数を定義しなさい。

__A.__

```js
const restA = (...argA) => console.log(argA);
restA(1, 3)
```

__Q3-2.__ 複数の引数を与えて、最初の引数と可変長引数に分けて出力する関数を定義しなさい。

__A.__

```js
const restB = (n, ...argB) => console.log(n, argB);
restB(1, 3, 4)
```