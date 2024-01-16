> 変数は、値そのものではなく、あくまで値の保管先の場所（アドレス）を保持している。

`↓`

> 変数は、値そのものではなく、値への参照を保持している。

## データ型
* null
  * 変数の値が空であることを意図的に表すリテラル
* undefined
  * 値が未定義である場合、プログラムによって自動的に設定されるリテラル
* プリミティブ型
  * Object以外のデータ型
* 非プリミティブ型
  * Object
  
> リテラルとは、データ型の値をコードで直接記述するための構文

### 数値
> 0b => 2進数
> 0o => 8進数
> 0x => 16進数

> 1e3 => 1000

### 文字列

3つのリテラル

```
let str = "hello";
let afterWord = 'world';
const sumWord = `${ str }, ${ afterWord }!!`
```

### Object

#### ドット記法とブラケット記法

##### 普段は、ドット記法で行きます。

```
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


```
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

##### 利点：オブジェクトリテラルの初期化の際にブラケット記法が使える。これは使う。

```
const keyBase = "menber";
let members = {
  [keyBase + "1"]: "john",
  [keyBase + "2"]: "paul",
}
console.log(members);
# => {menber1: 'john', menber2: 'paul'}
```

