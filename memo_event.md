# 15.1 イベント・ハンドラ

## 15.1.1 イベントハンドラの登録

|||
|---|---|
|イベント・ハンドラ|イベントが発生した時に実行される関数。|
|対象|Windowオブジェクト、Elementオブジェクト、Documentオブジェクト|

DOMに対してイベントハンドラでメッセージを送ると、実行する無名関数の引数には『event（Eventオブジェクト）』が渡される。

__例__

```html
<button id="minus">-</button>
<span id="number">0</span>
<button id="plus">+</button>
```
```js
let count = 0;

const number = document.querySelector("#number");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

// 素直なバージョン
plusBtn.onclick = (event) => {
  count++;
  number.textContent = count;
};

minusBtn.onclick = (event) => {
  count--;
  number.textContent = count;
};

// チョカなバージョン
plusBtn.onclick = (event) => { number.textContent = ++count };

minusBtn.onclick = (event) => { number.textContent = --count };
```

## 15.1.2 イベントハンドラの解除

DOMに送ったイベントハンドラを解除するには `null` を代入すればいい。

```js
minusBtn.onclick = null;
```

# 15.2 イベントリスナ

イベントにアクションを紐づける仕組み。

* オプションの指定が可能
  * アクションが実行される条件を指定できる。
* 複数のアクション（関数）の登録が可能。
* アクションごとに登録解除が可能。

```js
let count = 0;

const number = document.querySelector("#number");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

const plus = () => { number.textContent = ++count };
const minus = () => { number.textContent = --count };
const toggle = () => { number.classList.toggle("active") };

plusBtn.addEventListener("click", () => {
  plus();
  toggle();
});

minusBtn.addEventListener("click", () => {
  minus();
  toggle();
});
```