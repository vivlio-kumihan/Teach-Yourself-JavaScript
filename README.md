# 非同期処理

### グローバル・コンテキストの生成
![グローバル・コンテキストの生成](./assets/img/callStac_webAPI_tascCue_1.jpg "グローバル・コンテキストの生成")

### タスク・キューにタスクが登録される
![タスク・キューにタスクが登録される](./assets/img/callStac_webAPI_tascCue_2.jpg "タスク・キューにタスクが登録される")

### グローバル・コンテキスト内のコードを最後まで実行
![グローバル・コンテキスト内のコードを最後まで実行](./assets/img/callStac_webAPI_tascCue_3.jpg "グローバル・コンテキスト内のコードを最後まで実行")

### グローバル・コンテキストの消滅後
![グローバル・コンテキストの消滅後](./assets/img/callStac_webAPI_tascCue_4.jpg "グローバル・コンテキストの消滅後")


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

## 関数が実行される順番
* スレッドから順にコールスタックに入る。
* Web APIを呼び出して非同期処理になるものはタクス・キューに追加された順に入っていく。
* コールスタックが空になったタイミングで、タクス・キューの順にコールスタックへ入り実行。
順に入った上で、n秒待つものはn秒待ってから、0秒のものは0秒待ってから実行される。

```js
setTimeout(() => { console.log("A"); }, 1000);
setTimeout(() => { console.log("B"); }, 0);
console.log("C");
```

__答え => C -> B -> A の順で実行される。__



## 非同期の関数の取り扱い
1. delay関数を使って表現する。
  1秒後に「こんにちは」とコンソールに表示
  2秒後に「さようなら」とアラートに表示

> 見たまま考える。
> 
> 引数には、
> 1. コールバック関数  => console.log, alert
> 1. メッセージ       => "こんにちは", "さようなら"
> 1. 待機時間         => 1000, 2000

```js
function delay(fn, msg, ms) {
  setTimeout(function() {
    fn(msg);
  }, ms);
}

delay(console.log, "こんにちは", 1000);
delay(alert, "さようなら", 2000);
```

---

2. 非同期処理のネストを書く。 
* delay関数をネストして呼び出し、
 * 1秒後に「1秒経ちました。」
 * 2秒後に「さらに、1秒経ちました。」とコンソールに表示する。

> つまり、delay関数の中で無形関数をネストすればいい。
> 取り回したい変数（この場合メッセージ）は、無名関数の引数にする。

```js
delay((msg) => {
  console.log(msg);
  delay((msg) => {
    console.log(msg);
  }, "さらに、1秒経ちました。", 1000);
}, "1秒経ちました。", 1000);
```
