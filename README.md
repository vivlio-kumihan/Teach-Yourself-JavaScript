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

### 1. Promiseの記述

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

## 2. Promiseチェーン

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

### Promiseの管理状態

#### Promiseのステータス一覧

ステータス|説明|
|---:|---|
|pending|resolve, rejectが『呼び出される前』の状態|
|fillfilled|resolveが『呼び出された状態』|
|rejected|rejectが『呼び出された状態』|
|settled|fillfilled、または、rejected|

__状態の確認方法__

```js
// 初期値にundefinedを値として初期化
let promResolve, promReject;

const prom = new Promise((resolve, reject) => {
  promResolve = resolve;
  promReject = reject;
});

// 状態は、pending
console.log(prom);
//=> Promise {<pending>}

// とても不思議なコード。
// とりあえずこれでPromiseを実行させているそうだ。
promResolve("hello");

// 状態は、fullfilledとなる。
console.log(prom);
//=> Promise {<fulfilled>: 'hello'}
```


### Promiseを使った並列処理

#### Promise.all

__全て__ の非同期処理を __並列に実行__ し、 __全て__ の __完了__ を待ってから __次の処理__ を行う。

__構文__

> Promise.all(_**iterablePromises**_)
> 　.then((_**resolveArray**_) => { ... })
> 　.catch((_**error**_) => { ... })

__実行イメージ__

> Promise.all([_**fulfilled**_, _**fulfilled**_, _**fulfilled**_]); => thenメソッドの実行
> Promise.all([_**fulfilled**_, _**rejected**_, _**fulfilled**_]); => catchメソッドの実行

例）
引数に値を入れて、非同期関数のコールバックで色々処理して
__結果を同時に出力できるということかな？__
とりあえず、そう理解しておく。

```js
function wait(ms, greet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${ ms }msの処理が完了しました。`);
      console.log(`${ greet }`);
      resolve([ms, greet]);
    }, ms);
  });
}

// 関数を実行した状態を初期化。
// 1. とりあえず実行されてしまうのは仕方ないね。
const wait1 = wait(400, "hello");
const wait2 = wait(500, "hi");
const wait3 = wait(600, "bye");

// 2. 非同期で実行される部分
Promise.all([wait1, wait2, wait3])
  .then(([resolved1, resolved2, resolved3]) => {
    console.log("全てのPromiseが完了しました。");
    console.log(resolved1[0], resolved1[1], 
                resolved2[0], resolved2[1], 
                resolved3[0], resolved3[1]);
  });
  
//   1.
//=> 400msの処理が完了しました。
//=> hello
//=> 500msの処理が完了しました。
//=> hi
//=> 600msの処理が完了しました。
//=> bye

//   2.
//=> 全てのPromiseが完了しました。
//=> 400 'hello' 500 'hi' 600 'bye'
```

#### Promise.race

__実行イメージ__

複数の `Promise` インスタンスのいずれかが状態が`settled（fulfilledまたはrejected）`になったときに、Promise.raceに続くthenメソッドまたはchatchメソッドを実行する。
どちらが先に呼ばれるかは、非同期関数で設定した時間による。

> Promise.race([_pending_, _pending_, _**fulfilled**_]); => thenメソッドの実行
> 　　　　　　　　　　または、
> Promise.race([_pending_, _**rejected**_, _pending_]); => catchメソッドの実行

__構文__

> Promise.race(_**iterablePromises**_)
> 　.then((_**firstResolveValue**_) => { ... })
> 　.catch((_**error**_) => { ... })

例）

```javascript
// resolve, rejectに渡す引数をPromise.race()の引数に渡す。
const myResolve = new Promise(resolve => {
  setTimeout(() => {
    resolve("resolveが呼ばれました。");
    console.log("myResolveの実行が終了しました。");
  }, 300);
});

const myReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject("rejectが実行されました。");
    console.log("myRejectが実行が終了しました。");
  }, 200);
});

// Promise.race()にmyResolve, myRejectを配列にして引数として渡し、
// この時点で配列内の関数は実行される。
Promise.race([myResolve, myReject])
// どちらか先にsettledした時点でthenまたはcatchのメソッドが実行される。
  .then(value => {
    console.log(value);
  })
  .catch(value => {
    console.log(value);
  })
// この場合は、
// myResolve => 300ms後実行
// myReject =>  200ms後実行
// なので、myRejectが先にsettledになる。
// any()関数のように他の非同期関数の処理を待つことなく、
// catchメソッドを実行して処理は終了する。

//=> myRejectが実行が終了しました。
//=> rejectが実行されました。
//=> myResolveの実行が終了しました。
```

#### Promise.any

__実行イメージ__

複数の`Promiseインスタンス`のいずれかが`fulfilled`になった時点で`thenメソッド`に処理を移す。
また、全てのインスタンスの状態が`rejected`になった時に、`catchメソッド`を実行する。

> Promise.race([_rejected_, _rejected_, _**fulfilled**_]); => thenメソッドの実行
> Promise.race([_rejected_, _rejected_, _rejected_]); => catchメソッドの実行

__構文__

> Promise.race(_**iterablePromises**_)
> 　.then((_**resolveValue**_) => { ... })
> 　.catch((_**error**_) => { ... })

例）

```javascript
const myResolve = new Promise(resolve => {
  setTimeout(() => {
    resolve("resolve関数が呼ばれました。");
    console.log("myResolveの処理が終了しました。");
  }, 200);
});

const myReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject("reject関数が呼ばれました。");
    console.log("myRejectの処理が終了しました。");
  }, 100);
});

// myRejectは、100ms後に処理が行われて結果はrejectなんだけど、
// 他の非同期関数の結果を待つ。ここ重要。
// その後、myResolveが実行され結果は、fulfilledなので
// この関数に関わるthenメソッドが実行される。

Promise.any([myResolve, myReject])
  .then(value => {
    console.log(value);
  })
  .catch(value => {
    console.log(value)
  })

//=> myRejectの処理が終了しました。
//=> myResolveの処理が終了しました。
//=> resolve関数が呼ばれました。
```


#### Promise.allSettled

__実行イメージ__

全ての`Promiseインスタンス`の状態が`settled`（`fulfilled`または`rejected`）になった時点で`thenメソッド`に処理を移す。

> Promise.race([_**fulfilled**_, _rejected_, _**fulfilled**_]); => thenメソッドの実行

__構文__

> Promise.race(_**iterablePromises**_)
> 　.then((_**any**_) => { ... })

例）

```javascript
const myResolve = new Promise(resolve => {
  setTimeout(() => {
    resolve("resolveが呼ばれました。");
    console.log("myResolveの実行が終了しました。");
  }, 200);
});

const myReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject("rejectが呼ばれました。");
    console.log("myRejectの実行が終了しました。");
  }, 100);
});

// myResolve, myRejectの状態がsettledになるまで、後続の処理（then）を待機する。
// fulfilled => valueプロパティにresolveの引数が渡る。
// rejected => reasonプロパティにrejectの引数が渡る。

Promise.allSettled([myResolve, myReject])
  // 引数の配列はわざわざ初期化などせずともいきなり置ける。便利。
  .then(arr => {
    for(const { status, value, reason } of arr) {
      console.log(`ステータス：${ status }, 値：${ value }, エラー：${ reason }`);
    }
  })

// myRejectの実行が終了しました。
// myResolveの実行が終了しました。
// ステータス：fulfilled, 値：resolveが呼ばれました。, エラー：undefined
// ステータス：rejected, 値：undefined, エラー：rejectが呼ばれました。
```

#### その他の静的メソッド

特定の処理を非同期処理として実行したい場合に使える。
ちなみに、reject()関数はほぼ使わない。

```js
let val = 0;
// 非同期に設定する。その1 resolve()
Promise.resolve().then(() => {
  console.log(`非同期では、valの値は${ val }です。`);
})
// グローバル・スコープで関数の実行。
console.log(`グローバル・コンテキストの終了。ちなみに変数valの値は、${ val }です。`);
// 変数の更新。
val = 1;


// 非同期に設定する。その2 reject()
Promise.reject("エラーの理由").catch(error => {
  console.error(error);
})
// グローバル・スコープで関数の実行。
console.log("グローバル・コンテキストの終了。");

//=> グローバル・コンテキストの終了。ちなみに変数valの値は、0です。
//=> グローバル・コンテキストの終了。
//=> 非同期では、valの値は1です。
//=> エラーの理由
```

#### 実行される順番

A、Eのみ同期的に実行されるため、まずA → Eの順でログが表示されます。
次に、Dはジョブキュー、Cはタスクキューなので、Dのジョブから実行されます。
その後、setTimeoutのコールバック関数が実行されますが、
Bはジョブキューに登録されるので、さらに非同期で実行されます。
そのため、Cの実行が同期的に行われてから、Bが実行されます。

```js
console.log("A");

setTimeout(() => {
  queueMicrotask(() => console.log("B"));
  console.log("C");
});

Promise.resolve().then(() => console.log("D"));

console.log("E");

// A -> E -> D -> C -> B
```