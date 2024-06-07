
// 三項演算子（ ? : ）

const a = true;

  // if文を簡略化
// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
let resultA = a ? true : false;
console.log(resultA);

  // returnの後に書く場合がある。
function getResult() {
  return a ? "true" : "false";
}

  // 無形関数で書いて簡略化もよし。
const getResult = () => a ? "ture" : "false";

console.log(getResult());

## 論理和（||）を使って意図的な変数を作成できる。

しんに
```js
const toggle = 100 || 200; //=> 100
const toggle = 100 || 0; //=> 100
const toggle = 0 || 100; //=> 0
const toggle = null || 0; //=> null
```

console.log(toggle);