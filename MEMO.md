## 変数

> 変数は、値そのものではなく、あくまで値の保管先の場所（アドレス）を保持している。

`↓` つまり、

> 変数は、値そのものではなく、値への参照を保持している。

## データ型
* null
  * `変数の値が空`であることを`意図的`に表すリテラル
* undefined
  * `値が未定義`である場合、プログラムによって`自動的に設定される`リテラル
* プリミティブ型
  * Object以外のデータ型
* 非プリミティブ型
  * Object
  
## リテラル
> リテラルとは、データ型の値をコードで直接記述するための構文

### 数値
> 0b => 2進数
> 0o => 8進数
> 0x => 16進数

> 1e3 => 1000

### 文字列

3つのリテラル

```js
let str = "hello";
let afterWord = 'world';
const sumWord = `${ str }, ${ afterWord }!!`
```

## Object

#### ドット記法とブラケット記法

##### 普段は、ドット記法で書く。

```js
> ドット記法

let person = {
  name: { first: "nobuyuki", last: "takahiro"},
  age: 58,
}

console.log(person.name.last);
console.log(person.age);

person.name.last = "kida";
person.gender = "男";
person.family = { wife: "kazue", doughter: "mari"};

console.log(person.family.wife);
console.log(person);
```

```js
> ブラケット記法

let people = {
  name: { first: "nobuyuki", last: "takahiro"},
  age: 58,
}

console.log(people["name"]["last"]);
console.log(people["age"]);

people["name"]["last"] = "kida";
people["gender"] = "男";
people["family"] = { wife: "kazue", doughter: "mari" };

console.log(people["family"]["doughter"]);
console.log(people);
```

#### ブラケット記法の利点

オブジェクトリテラルの初期化の際にブラケット記法が使える。

```js
const keyBase = "menber";
let members = {
  [keyBase + "1"]: "john",
  [keyBase + "2"]: "paul",
}
console.log(members);
//=> {menber1: 'john', menber2: 'paul'}
```

### メソッド

> オブジェクトでは、特定の処理を行う機能を追加したい場合（特定の処理を行う機能を値として持ちたい場合）に関数を登録できる。オブジェクトに登録される関数をメソッドという。

##### オブジェクトを定義する

オブジェクトに関数を定義するのは見慣れてないが、

```js
let greeting = {
  // 普通に書いても、
  // hello: function() {
  //   console.log("hello");
  // }
  // 無形関数で書いてもいける。
  hello: () => console.log("hello"),
  morning: () => console.log("morning"),
};
```

関数を定義したオブジェクトを参照したり、

```js
greeting.hello();
greeting.morning();
```

定義を追加したりするといつも見ているやつになってる。
こういうことだったのかと。。。

```js
// ドット記法と無形関数でスッキリかくと、
// greeting.bye = () => console.log("bye");

// あえてブラケット記法と普通にかくと、
greeting["bye"] = function() { console.log("bye") };

greeting.bye();
//=> bye
```

## データ型の特徴

* 動的型付け言語
  * プログラムの実行時に値が設定された時点で自動的に決定される。
* 静的型付け言語
  * プログラムを書く時に開発者が明示的に宣言する。
  
> つまり、データ型を常に意識して運用する必要がある

`↓`

> データ型の確認方法を身につけておく

### 確認方法 typeof

```js
console.log(typeof "string");    //=> string
console.log(typeof 1);           //=> number
console.log(typeof true);        //=> boolean
console.log(typeof [1,2,3]);     //=> object
console.log(typeof null);        //=> object
console.log(typeof undefined);   //=> undefined
```

### 変換

#### String

```js
console.log(String(1));         //=> 1
console.log(String(true));      //=> "true"
```

#### Number

特筆すべきは`NaN`
文字列などの数値型以外から数値型に変換する際、変換不可能な場合に返される特殊な値。
つまり、
`NaN`が出てくるということは、数値型以外から数値型に`変換しようとするコード`が`どこかにあるはず`という認識でいること。


```js
console.log(Number("1"));      //=> 1
console.log(Number("hello"));  //=> NaN
console.log(Number(true));     //=> 1
console.log(Number(false));    //=> 0
```

#### Boolean

上のNumberの型変換とも合わせて、コードを書くときに真偽値を使ったアイデアに繋げること。
なお、これは暗黙的な型変換と言われるもの。
`true === 1`, `false === 0`ということは認識しておく。

```js
console.log(Boolean(1));       //=> true
console.log(Boolean(-1));   　 // => true
console.log(Boolean("hello")); // => true
console.log(Boolean(0));     　 //=> false
```
 
## 演算子とオペランド

`1 + 2` この場合で見ると、
`1`と`2`がオペランド
`+`が演算子

演算子は、
* 処理を行う。
  * `1 + 1` => 1と1を`足す`
* 値を返す。
  * `a = 1` => 変数aに1を`代入`して、その`値を返す`。


### インクリメント、ディクリメント演算子

> `オペランド`に変数を取ることで、変数が保持している値にインクリメント・ディクリメンとした値を`同じ変数の新しい値`として設定する演算子。

演算子が持つ特性を理解できていれば、インクリメント、ディクリメント演算子の挙動を把握できる。

```js
let a = 0;
// 計算して結果を返している。
let b = ++a;
console.log(`a: ${ a }, b: ${ b }`);
//=> a: 1, b: 1

let c = 0;
// 計算するだけで処理を終える。
let d = c++;
console.log(`c: ${ c }, d: ${ d }`);
//=> c: 1, d: 0
```

__結果は全て同じ。__
```js
let a = 0;
a = a + 1;

a += 1

++a
//=> 1
```

## 論理演算子

`&&`, `||`

### falsy、truthyな値

* falsy
  * Boolean関数で値を真偽値に変換したときに、falseが返ってくる値
* truthy
  * その逆

#### falsyな値

`false`, `0`, `-0`, `0n`, `空の文字列`, `null`, `undefined`, `NaN`

### 論理演算子の挙動

#### 論理積

* 左から右へと`truthy`な値かどうかを判定する。
* `オペランド`の評価の途中で`falsy`な値が見つかった場合には、その値を`論理積`の結果として返す。
* この時点で処理を終了する。
* オペランドが全て`truthy`な値の場合は最後の値を返す。

```js
console.log("hello" && "world");
  // => world

console.log("hello" && undefined);
  // => undefined

console.log(null && "world");
  // => null

console.log(true && "world" && NaN);
  // => NaN
```

#### 論理和

* 左から右へと`truthy`な値かどうかを判定するのは`falsy`と同じ。
* `オペランド`の評価の途中で`truthy`な値が見つかった場合には、その値を`論理和`の結果として返す。
* この時点で処理を終了する。
* `true`か`false`に関わりなく、最後のオペランドまで達するとその値を返す。

```js
console.log("hello" || "world");
  // => hello

console.log("hello" || undefined);
  // => hello

console.log(null || "world");
  // => world

console.log(null || undefined || NaN);
  // => NaN
```

### 単行演算子



`delete`, `typeof`, `!`, `+`, `-`

* delete
  * オブジェクトから特定の値を削除する。
* typeof
  * オペランドのデータ型を返す。
* !
  * オペランドを真偽値に変換して、反対の真偽値を返す。
* +, -
  * オペランドを数値に変換して、その値を返す。

```
delete
typeof
!
+
-
```

## 前置式、後置式インクリメント演算子

```js
// 後置式インクリメント演算子
// 値は1増やすが、返す値は直前の値を返す。
let a = 0;
console.log(a++); // => 0

let v = a++;
console.log(a);   // => 2
console.log(v);   // => 1

v = a++;
console.log(a);   // => 3
console.log(v);   // => 2

// 前置式インクリメント演算子
// 値は1増やす、そして、返す値も1増やして返す。
let b = 0;
console.log(++b); // => 1
let z = ++b;
console.log(b)    // => 2
console.log(z)    // => 2
```

## 関係演算子

```js
const ans3 = (9 > 3) * 3 ? "true" : "false";
console.log(ans3); // => True!!!
console.log((9 > 3) * 3) // => 1 * 3と同義!!!
```

## try, catch, finally, throw new Classname
```php
try {
  let greeting = 1;
  // let greeting = "Nobuyuki";
  // if (typeof greeting !== "String") {
  if (!(greeting instanceof String)) {
    throw new Error("不正なデータ型です。");
  }
  console.log(`${ greeting }さん、いい天気ですね。`);
} catch (error) {
  console.error(error.name);
  console.error(error.message);
}
```

```php
try {
  let greeting = 1;
  // let greeting = "Nobuyuki";
  // if (typeof greeting !== "String") {
  if (!(greeting instanceof String)) {
    throw new Error("不正なデータ型です。");
  }
  console.log(`${ greeting }さん、いい天気ですね。`);
} catch (error) {
  console.error(error.name);
  console.error(error.message);
}
```

## while, for, reduce

```php
let num = 0;
while (num <= 6) {
  console.log(num);
  num += 2;
}
for(let num = 0; num < 10; num += 3) {
  console.log(num);
}
const arr = [10, 20, 23, 47];
let sum = 0;
for(let idx = 0; idx < arr.length; idx++) {
  sum += arr[idx];
}
console.log(sum);
const arr = [10, 20, 23, 47];
const renewArr = arr.reduce((sum, val) => {
  return sum + val;
}, 0);
console.log(renewArr);
```

## 関数

```javascript
// 関数にオブジェクトを渡すときに
// 起こる問題点
function fn(obj2) {
  // obj2と名称は一緒だが、
  // 別名で違うオブジェクトを設定していることになる。
  obj2 = { val: 2 };
}
const obj = { val: 1 };
fn(obj);
console.log(obj.val); //=> 1
// 仮引数にオブジェクトを与えると。。。
function fn(obj2) {
  // これは、
  // 渡ってきたオブジェクトのvalメソッドを充てて
  // 値を『更新』していることになる。
  obj2.val = 2;
}
// 実引数のオブジェクトにどんな値を設定しても、
// 関数内で変更されるから、ここで何をしても関係ない。
const obj = { val: 100 };
fn(obj);
console.log(obj.val); //=> 2
```

## コールバック関数

```js
// setTimeout
// 組み込み関数でコールバック関数をとる筆頭
function hello(name) {
  console.log(`こんにちは、${ name }さん！`);
}

setTimeout(hello, 3000, "髙廣");
```

## this

```javascript
// thisのルートはWindow
console.log(this);

// =====

// メソッドからの呼び出しとコールバック関数からの呼び出しの違い

// ////////////////////// 関数を呼んだ場合のthis

// windowオブジェクトの
//     nameメソッドに『John』を仕込み、
window.name = "John";

// windowオブジェクトにhello関数を定義、『this===window』。
function hello() {
  console.log(`Hello, ${ this.name }!`);
}

// hello関数を呼んだら中身が返ってくる。
hello(); //=> Hello, John!

// 『paul』オブジェクトの
//     nameメソッドに『Paul』を仕込み、
//     helloメソッドにhello関数を『設定』する。
const paul = {
  name: "Paul",
  hello: hello
}

// paulオブジェクトへhelloメソッドを送信したら、
// 設定されているhello関数の中身が呼ばれてここで『実行される』。
// ここで『実行される』から『this』の中身はpaulオブジェクトなわけ。
paul.hello(); //=> Hello, Paul!

// =====

// ////////////////////// コールバック関数を呼んだ場合のthis

// windowオブジェクトのメソッドに『John』を仕込み、
window.name = "John";
// 『Paul』オブジェクトを定義する。
const paul = {
  // nameメソッドにを仕込む。
  name: "Paul",
  // さっきは、helloメソッドの中身は、
  // hello関数を設定しているだけ。
  // hello: hello
  
  // helloメソッドの中身は関数の実行。
  hello: function () {
    console.log(`Hello, ${ this.name }!`);
  }
}
// greet関数が属しているのはWindowオブジェクト
// cb===paul.hello

// cbにやってくるのはpaulオブジェクトのhelloメソッドの『実行』
function greet(cb) {
  // つまリ、Windowオブジェクトに属している状態で関数が実行される。
  // this===Window　この状態で、参照される関数は、
  // function () {
  //   console.log(`Hello, ${ this.name }!`)
  // }
  cb();
}
greet(paul.hello); //=> Hello, John!


// ////////////////////// アロー関数のthis

// アロー関数はレキシカル・スコープを辿ってthisを探す、
// レキシカル・スコープは、
// 関数が『定義されている位置』によって決定されるスコープ

window.name = "Nobuyuki";

// アロー関数のthisは『Window』
const which = () => {
  console.log(`Here is ${ this.name }`);
}

const kazue = {
  name: "Kazue",
  // この無名関数の『this』は『kazue』
  here: function () {
    console.log(`Here is ${ this.name }`);
  },
  // ここも、無名関数の『this』は『kazue』
  callName: function () {
    // ここでは、アロー関数を呼んでいる。
    // アロー関数はレキシカル・スコープをたどる。
    // つまり、このアロー関数が定義されている位置を参照しよるわけ。
    // となると、『window』となる。
    which();
  }
  //    ちなみに、オブジェクト・リテラル内のメソッドの略記記法は、
  //    無名関数のメソッド定義と同じ。
  //    なので通常はこう書く。
  // callName() {
  //   which();
  // }
}

kazue.here() //=> Here is Kazue
kazue.callName(); //=> Here is Nobuyuki
```

## bindによるthisの束縛

```javascript
// Windowオブジェクトにnameメソッドを設定。
window.name = 'Paul';

// これを利用して関数を作成。
function hello(greeting) {
  console.log(greeting + this.name);
}

// 実行。
hello('こんにちは、'); //=> こんにちは、Paul

// johnオブジェクトのnameメソッドに値を設定。
const john = {
  name: 'John'
}

// thisの参照先をjohnオブジェクトによってthisを束縛して別名保存。
// 関数名.bind(束縛するオブジェクト、関数に渡す引数（複数可）)
const helloJohn = hello.bind(john, 'Hello, ');
helloJohn();

// 関数の引数として渡すコールバック関数でよく使う場面があるかもね。
window.name = "Nobuyuki";

const kaz = {
  name: "Kazue",
  hello: function() {
    console.log(`こんにちは、${ this.name }`);
  }
}

setTimeout(kaz.hello, 3000);
setTimeout(kaz.hello.bind(kaz), 3000);

// callメソッド
// 別名保存せず、オブジェクトのthisを束縛して即座に関数を実行する。
const nob = { name: "nobuyuki"};
function hello(greeting) {
  console.log(`${ greeting }, ${ this.name }`)
}
hello.call(nob, "Hello");

// applyメソッド
// 普通に関数を実行した方がいいのでは？
function hello(greeting, name) {
  console.log(`${ greeting }, ${ name }`)
}
hello.apply(null, ["Hello", "Kazue"]);
hello("Hello", "Kazue");

// こういう使い方もあるってことで。。。
const vals = [1,2,3,4,5];
// 配列の値を欲しいのでこうなるのを。。。
console.log(Math.max(vals[0], vals[1], vals[2], vals[3], vals[4]));
// 便利になるのだが。。。
console.log(Math.max.apply(null, vals));
// スプレッド演算子を使った方がより便利。。。
console.log(Math.max(...vals));
```

## thisの練習

```js

// 関数として実行されている。
window.greeting = "こんにちは";
function hello() {
  console.log(this.greeting);
}
hello(); //=> こんにちは

// メソッドとして実行されている。
const dog = { 
  greeting: "わんわん",
  hello: hello
}
dog.hello(); //=> わんわん

// 想定外だった。
// メソッドとして実行されている。
const gorilla = {
  greeting: "ウホウホ",
  hello
}
gorilla.hello(); //=> ウホウホ

// 関数として実行されている。
setTimeout(gorilla.hello, 2000); //=> こんにちは
setTimeout(gorilla.hello.bind(gorilla), 2000); //=> ウホウホ
```