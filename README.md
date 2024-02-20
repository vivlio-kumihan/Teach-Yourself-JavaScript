# 非同期処理

メイン・スレッドを上から下へ処理する通常の同期処理。
上から順に実行していく。

```js
function sleep(ms) {
  const starTime = new Date();
  while(new Date() - starTime < ms) {}
  console.log("sleep関数が完了しました。");
}

sleep(3000);

const btn = document.querySelector("button");
function clickHandler() {
  console.log("ボタンがクリックされました。");
}
btn.addEventListener("click", clickHandler);
```

`setTimeout`関数の中でコールバック関数を実行することで非同期にしてみる。

```js
function sleep(ms) {
  setTimeout(function() {
    console.log("sleep関数が完了しました。");
  }, ms);
}

sleep(3000); // => ここに置いてあっても。。。

const btn = document.querySelector("button");
function clickHandler() {
  console.log("ボタンがクリックされました。");
}
btn.addEventListener("click", clickHandler);
```

同じ要領でもう一つ。コンソールに0が表示される。

```js
let val = 0;
setTimeout(() => { val = 1 }, 1000);
console.log(val);
```