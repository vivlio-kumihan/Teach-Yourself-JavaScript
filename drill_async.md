# 非同期のフォーマット
> 1秒後に「Data fetch」とコンソールに出力する
> fetchData()関数を定義しなさい。
> 引数には無名関数を使用しなさい。

## 非同期関数の初期
非同期処理の連続での取り扱いが煩雑になるのでPromiseが生まれた。

```js
function fetchData(callback, msg, ms) {
  setTimeout(() => {
    callback(msg);
  }, ms)
}

fetchData(msg => {
  console.log(msg);
  fetchData(msg => {
    console.log(msg);
    fetchData(msg => {
      console.log(msg);
      fetchData(msg => {
        console.log(msg);
      }, "hello,hello,hello,hello", 1000)
    }, "hello,hello,hello", 1000)
  }, "hello,hello", 1000)
}, "hello", 1000) 
```


## Promiseを使う

* 非同期を扱う関数の定義は同じ
* Promiseの生成する際の『引数』に非同期関数を入れる。
* resolve, rejectに入る値（関数、オブジェクト、配列、変数）は
* then, catchの引数として取り扱われる。
* この例のように空でも構わない。
* then, catchを発火させるトリガーの役割もあるから。

```js
function fetchData(callback, msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(msg);
      resolve();
      reject();
    }, ms);
  });
}

fetchData(console.log, "hello", 1000)
  .then(() => {
    return fetchData(console.log, "hello,hello", 1000);
  })
  .then(() => {
    return fetchData(console.log, "hello,hello,hello", 1000);
  })
  .then(() => {
    return fetchData(console.log, "hello,hello,hello,hello", 1000);
  })
  .catch((error) => {
    console.error(`error: ${ error }`)
  });
```

## async, awitを使う

* asyncをこの関数の前につけることで『非同期関数』を定義できる。
* new Promiseでインスタンスを生成する必要はない。
* resolve => try, reject => catch そして、finallyで処理できる。
* awaitをつけることで該当の非同期処理関数の処理が終わってから次の処理を促すキーワード

```js
function fetchData(callback, msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(msg);
      resolve();
      reject();
    }, ms);
  });
}

async function getData() {
  try {
    await fetchData(console.log, "hello", 1000);
    await fetchData(console.log, "hello,hello", 1000);
    await fetchData(console.log, "hello,hello,hello", 1000);
    await fetchData(console.log, "hello,hello,hello,hello", 1000);
  } catch (error) {
    console.error(error);
  } finally { console.log("処理を終了します。")}
}

getData();
```

# id = "source" 要素を2秒毎に1から4の位置に移動させなさい。

```html
<div id="source">Source</div>
<section id="section">
  <div class="wrap">
    <h1 class="title">
      <span>title</span>
    </h1>
    <ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
```

```js
const source = document.querySelector("#source");
const hOne = document.querySelector(".title");
const wrap = document.querySelector(".wrap");
const li = document.querySelector("li");

// 関数は『呼んで』『持ってきて』『発火』させる。『console.log』
// コールバック関数 => なんかの『処理をした値』を『返す』関数なんだ。『() => {};』
function moveElement(callback, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, ms);
  });
}

async function moveElementTrigger() {
  await moveElement(() => hOne.prepend(source), 1000);
  await moveElement(() => hOne.append(source), 1000);
  await moveElement(() => hOne.after(source), 1000);
  await moveElement(() => wrap.append(source), 1000);
  await moveElement(() => li.after(source), 1000);
}

moveElementTrigger();
```

# 次のコードを非同期にしなさい。動作間隔は1秒です。

関数の引数に『タイトル』を入力するとTODOリストになるコードです。

```html
<div id="todo-container" class="todo">
  <div class="create">
    <input type="text" id="create-input" class="create__input" name="">
    <button id="create-btn" class="create__btn">追加</button>
    <ul id="todo-list" class="todo__list"></ul>
  </div>
</div>
<template id="todo-item-tmple" class="todo__item-tmpl">
  <li class="todo__item">
    <span class="todo__title"></span>
    <input type="button" class="todo__btn delete" value="削除">
    <input type="button" class="todo__btn complete" value="完了">
  </li>
</template>
```

```js
const template = document.getElementById("todo-item-tmple").content;
const todoList = document.querySelector("#todo-list");

function createTodoItem(value) {
  const newItem = template.cloneNode(true);
  const newTitle = newItem.querySelector(".todo__item-title"); 
  newTitle.textContent = value;
  todoList.append(newItem);
}

createTodoItem("1つ目"); 
createTodoItem("2つ目");
createTodoItem("3つ目");
createTodoItem("4つ目");
createTodoItem("");
createTodoItem("5つ目");
```

__A.__

```js
const template = document.getElementById("todo-item-tmple").content;
const todoList = document.querySelector("#todo-list");

const createTodoItem = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (title === "") {
        reject();
      } else {
        const newItem = template.cloneNode(true);
        const newTitle = newItem.querySelector(".todo__item-title"); 
        newTitle.textContent = title;
        todoList.append(newItem);
        resolve();
      }
    }, 1000);
  });
};

async function createList() {
  try { 
    await createTodoItem("1つ目"); 
    await createTodoItem("2つ目");
    await createTodoItem("3つ目");
    await createTodoItem("4つ目");
    await createTodoItem("");
    await createTodoItem("5つ目");
  } catch (error) {
    console.error("error: 空文字列です。処理を中断しました。");
  } finally {
    console.log("処理は終了しました。");
  }
};

createList()
```