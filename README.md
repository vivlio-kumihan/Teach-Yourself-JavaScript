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

## Promise

Promiseは、`非同期処理を扱うオブジェクト`。
非同期処理に`ネスト`が深くなることを避けることができる。

### 0. 最初の一歩

* Promiseは初期状態で、`resolve`, `reject`という関数を持つ。
* `resolve関数`は`then`メソッドがある。
* `reject関数`は`catch`メソッドがある。
* `resolve`, `reject`の引数は、それぞれ`then`メソッド, `catch`メソッドに渡っていく。

ランダムに整数を生成させて、5以上であれば成功、未満であればエラーを、処理が終わったら終了させる
コードを書いてみる。

```js
let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 0から10までの整数をランダムに生成させる。
    const rand = Math.floor(Math.random() * 11);
    if (rand < 5) {
      reject(rand);
    } else {
      resolve(rand);
    }
  }, 1000)
});

instance = instance.then((value) => {
  console.log(`5以上の値${value}が渡ってきました。`);
});

instance = instance.catch((errorValue) => {
  console.log(`5未満の値${errorValue}が渡ってきたのでエラー表示。`);
});

instance = instance.finally(() => {
  console.log("処理を終了します。");
});
```

これを雛形にして、ランダムに整数を生成させて、
偶数なら成功、奇数ならエラーを、処理が終わったら終了させるコードを書く。

```js
let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 0から10までの整数をランダムに生成させる。
    const setTime = new Date().getSeconds();
    console.log(setTime);
    // こういう考え方はしない。
    // if (setTime % 2 === 0) {
    // 2で割ったあまりが『有れば』真で、reject行き。
    // それ以外は偶数だからresolve行きになると考える。
    if (setTime % 2) {
      reject(setTime);
    } else {
      resolve(setTime);
    }
  }, 1000)
});


instance = instance.then((value) => {
  console.log(`${value}は、偶数のため成功とします。`);
});

instance = instance.catch((errorValue) => {
  console.log(`${errorValue}は、奇数のためエラーとします。`);
});

instance = instance.finally(() => {
  console.log("処理を終了します。");
});
```

メソッド・チェーンを使って短く書ける箇所があるのでやってみる。

```js
instance = instance
  .then(value => console.log(`${value}は、偶数のため成功とします。`))
  .catch(errorValue => console.log(`${errorValue}は、奇数のためエラーとします。`))
  .finally(() => console.log("処理を終了します。"));
```

では、1秒ごとに2つずつ数値がインクルメントされてコンソールに表示されるプログラムを
プロミス・チェーンを使って書く。

```js
function promiseFactory(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // これも考え方。
      // 何でもかんでも1行で解決しようとする考えがダメ。
      // num++ * 2 とかアホかやで。
      console.log(num);
      num += 2;
      if (num > 6) {
        reject(num);
      } else {
        resolve(num);
      }
    }, 1000);
  });
}

promiseFactory(0)
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .catch(errorNumber => {
    console.error(`エラーに飛びました。現在は${ errorNumber }です。`);
  })
  .finally(() => { console.log("処理を終了します。"); });
```
