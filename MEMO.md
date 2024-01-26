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