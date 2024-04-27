// console.log("hello");
// console.log(0b11);
// console.log(0o11);
// console.log(0x11);
// console.log("\u9ad9");

// let calcSum = 5 + 6 -1;
// // console.log(calcSum);
// console.log(calcSum *= 2);
// console.log(calcSum %= 3);
// console.log(calcSum ** 3);

// let str = "hello";
// let afterWord = 'world';
// const sumWord = `${ str }, ${ afterWord }!!`
// console.log(sumWord);

// console.log(1e10);
// console.log(2 ** 10);
// console.log(2n ** 10n);

// let person = {
//   name: { first: "nobuyuki", last: "takahiro"},
//   age: 58,
// }

// console.log(person.name.last);
// console.log(person.age);

// person.name.last = "kida";
// person.gender = "男";
// person.family = { wife: "kazue", doughter: "mari"};

// console.log(person.family.wife);
// console.log(person);

// let people = {
//   name: { first: "nobuyuki", last: "takahiro"},
//   age: 58,
// }

// console.log(people["name"]["last"]);
// console.log(people["age"]);

// people["name"]["last"] = "kida";
// people["gender"] = "男";
// people["family"] = { wife: "kazue", doughter: "mari" };

// console.log(people["family"]["doughter"]);
// console.log(people);

// const keyBase = "menber";
// let members = {
//   [keyBase + "1"]: "john",
//   [keyBase + "2"]: "paul",
// }
// console.log(members);

// let greeting = {
//   // 普通に書いても、
//   // hello: function() {
//   //   console.log("hello");
//   // }
//   // 無形関数で書いてもいける。
//   hello: () => console.log("hello"),
//   morning: () => console.log("morning"),
// };

// greeting.hello();
// greeting.morning();

// // ドット記法と無形関数でスッキリかくと、
// // greeting.bye = () => console.log("bye");

// // あえてブラケット記法と普通にかくと、
// greeting["bye"] = function() { console.log("bye") };

// greeting.bye();


// let obj = {
//   prop: 
//   function() { return true },
//   subObj: { var: 100 },
//   greeting: function() { return "こんにちは"},
// }

// // console.log(obj.prop());
// console.log(obj["prop"]());
// // console.log(obj.subObj.var);
// console.log(obj["subObj"]["var"]);
// // console.log(obj.greeting());
// console.log(obj["greeting"]());

// obj.subObj.var2 = 1000;
// console.log(obj.subObj.var2);
// // obj["subObj"]["var2"] = 1000;
// // console.log(obj["subObj"]["var2"]);

// console.log(Boolean(""));
// console.log(Boolean(0));


// console.log(1 * true);      // => 1
// console.log(false * true);  // => 0
// console.log(Boolean(0))     // => false
// console.log(Boolean(1))     // => true
// console.log(Boolean(-1))    // => true


// const TAX_RATE = 1.1;
// let productPrice = 1000;



// console.log(`商品の金額は${productPrice}円ですので、税込金額は${ productPrice * TAX_RATE }です。`);
// console.log("商品の金額は" + productPrice + "円ですので、税込金額は" + productPrice * TAX_RATE + "です。");


// console.log((12 ** 2) / 5);
// console.log((12n ** 2n) / 5n);
// console.log(Number("hello"));

// const counter = { num: 1 };
// console.log(counter.num);
// console.log(counter["num"]);

// console.log(typeof null);
// console.log(100 + true);
// console.log(1 + Number("hello"));
// console.log(Boolean("hello"));

// let a = 0;
// let b = ++a;
// console.log(`a: ${ a }, b: ${ b }`);

// let c = 0;
// let d = c++;
// console.log(`c: ${ c }, d: ${ d }`);

// console.log(2 * 3 ** 2);
// console.log(10 / 2 + (3 - 2));
// console.log(10 / (2 + 3) - 2);
// let e = 1;
// console.log(e++);
// let f = 10, g = 1;

// console.log(--f * ++g)

// 結果は全て同じ。
// let a = 0;
// a = a + 1;

// a += 1

// ++a
// //=> 1

// console.log("hello" || "world");
// console.log("hello" || undefined);
// console.log(null || "world");
// console.log(null || undefined || NaN);

// const obj = { name: "takahiro" };
// delete obj.name;
// console.log(obj);

// // 後置式インクリメント演算子
// // 値は1増やすが、返す値は直前の値を返す。
// let a = 0;
// console.log(a++); // => 0

// let v = a++;
// console.log(a);   // => 2
// console.log(v);   // => 1

// v = a++;
// console.log(a);   // => 3
// console.log(v);   // => 2

// // 前置式インクリメント演算子
// // 値は1増やす、そして、返す値も1増やして返す。
// let b = 0;
// console.log(++b); // => 1
// let z = ++b;
// console.log(b)    // => 2
// console.log(z)    // => 2

// let a = 10, b = 1;
// console.log(--a * ++b);
// // => 18

// let c = 1;
// console.log(c++);

// const ans = 10 < 2 * 6 - 2 ? "true" : "false";
// console.log(ans);
// const ans2 = 3 > 8 % 3 ? "true" : "false";
// console.log(ans2);
// const ans3 = (9 > 3) * 3 ? "true" : "false";
// console.log(ans3);
// console.log((9 > 3) * 3)

// let person = { name: "john", age: "40", male: true };
// delete person.name;
// console.log(person);
// console.log(typeof person);
// console.log(+person.age);
// console.log(!person.male);

// console.log((10 + 5) * 4);

// let a;
// console.log(a);
// console.log(a = 10);
// console.log(a);

// let a = 0;
// a += 3;
// a *= 4;
// a /= 2;
// a %= 5;
// console.log("a: ", a)

// console.log((0 || undefined) && "hello");
// console.log(!(0 || undefined) && "hello");

// console.log(null ? "apple" : "banana");
// console.log(null ?? "pinapple");
// console.log({ apple: "りんご" }?.apple ?? "banana");

// const person = {
//   name: "john",
//   age: 15,
//   gender: "男性"
// }

// if (person.gender === "男性" && person.age > 25) {
//   console.log(`${person.name}は、25歳以上の${ person.gender }です。`);
// } else {
//   console.log(`${person.name}は、25歳以上の${ person.gender }ではありません。`);
// }

// let val1 = "";
// if (!val1) console.log("hello")


// let val2 = null;
// const greet2 = val2 ?? "hello";
// console.log(greet2);

// let animal = "ウマ";

// switch (animal) {
//   case "ウサギ":
//     console.log(animal);
//     break;
//   case "ウマ":
//     console.log(animal);
//     break;
//   case "ゾウ":
//     console.log(animal);
//     break;
//   default:
//     console.log("何の動物かわかりません。");
//     break;
// }

// try {
//   let b = 10 + a;
//   console.log(b);
// } catch (error) {
//   console.error("error name: ", error.name);
//   console.error("error message: ", error.message);
// } finally {
//   console.log("後続の処理");
// }

// let greeting = 1;
// console.log(!(greeting instanceof String));
// console.log(typeof greeting !== "String");

// try {
//   let greeting = 1;
//   // let greeting = "Nobuyuki";
//   // if (typeof greeting !== "String") {
//   if (!(greeting instanceof String)) {
//     throw new Error("不正なデータ型です。");
//   }
//   console.log(`${ greeting }さん、いい天気ですね。`);
// } catch (error) {
//   console.error(error.name);
//   console.error(error.message);
// }

// let num = 0;
// while (num <= 6) {
//   console.log(num);
//   num += 2;
// }
  
// for(let num = 0; num < 10; num += 3) {
//   console.log(num);
// }

// const arr = [10, 20, 23, 47];
// let sum = 0;
// for(let idx = 0; idx < arr.length; idx++) {
//   sum += arr[idx];
// }
// console.log(sum);

// const arr = [10, 20, 23, 47];
// const renewArr = arr.reduce((sum, val) => {
//   return sum + val;
// }, 0);
// console.log(renewArr);

// const obj = {
//   prop1: 10,
//   prop2: 20,
//   skip: 20,
//   prop3: 23,
//   prop4: 47,
// };

// let sum = 0;
// for(const key in obj) {
//   if(key !== "skip") {
//     sum += obj[key];
//   } else {
//     continue
//   }
// }
// console.log(sum);

// // かんがえすぎる！
// const arr = [10, "words", 20, true, 23, 47];
// let sumVal = 0;
// for(const num of arr) {
//   if (typeof num === "number") {
//     sumVal += num;
//   } else {
//     continue
//   }
// }
// console.log(sumVal);


// 関数にオブジェクトを渡すときに
// 起こる問題点
// function fn(obj2) {
//   // obj2と名称は一緒だが、
//   // 別名で違うオブジェクトを設定していることになる。
//   obj2 = { val: 2 };
// }

// const obj = { val: 1 };
// fn(obj);
// console.log(obj.val); //=> 1


// // 仮引数にオブジェクトを与えると。。。
// function fn(obj2) {
//   // これは、
//   // 渡ってきたオブジェクトのvalメソッドを充てて
//   // 値を『更新』していることになる。
//   obj2.val = 2;
// }

// // 実引数のオブジェクトにどんな値を設定しても、
// // 関数内で変更されるから、ここで何をしても関係ない。
// const obj = { val: 100 };
// fn(obj);
// console.log(obj.val); //=> 2


// const obj1 = { num: 3 };
// const obj2 = { num: 3 };
// let num = 3;

// function fn(object1Arg, object2Arg, numberArg) {
//   object1Arg = { num: 5 };
//   object2Arg.num = 5;
//   numberArg = 5;
// }

// fn(obj1, obj2, num);

// console.log(obj1.num); //=> 3
// console.log(obj2.num); //=> 5
// console.log(num); //=> 3

// function fn() {}
// fn.fullName = "髙廣信之";
// fn.hello = function() {
//   console.log("hello, world!");
// };
// console.log(fn.fullName);
// fn.hello();

// function hello(name) {
//   console.log(`hello, ${ name }`);
// }
// const obj = hello;
// obj("髙廣信之")


// // CallBack関数
// function sayGreeting(cb) {
//   const result = cb();
//   return `${ result }, 髙廣信之`;
// }

// function hello() {
//   return "こんにちは、";
// }

// function goodbye() {
//   return "さようなら、";
// }

// console.log(sayGreeting(hello));
// console.log(sayGreeting(goodbye));

// // setTimeout
// // 組み込み関数でコールバック関数をとる筆頭
// function hello(name) {
//   console.log(`こんにちは、${ name }さん！`);
// }

// setTimeout(hello, 3000, "髙廣");

// function hello(name) {
//   console.log(`こんにちは、${ name }さん。`);
// }

// setTimeout(hello, 5000, "髙廣");

// function plus(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function calc(arg1, arg2, exFunc) {
//   console.log(exFunc(arg1, arg2));
// }

// calc(1, 2, plus);
// calc(10, 2, plus);
// calc(10, 2, minus);

// setTimeout(function(){
//   console.log("hello!");
// }, 3000);

// const hello = function() { console.log("hello!") };
// console.log(hello.toString());
// setTimeout(hello, 3000);

// const hello = () => {
//   console.log("hello");
// }
// hello();

// const double = (num) => {
//   return num * 2;
// }
// console.log(double(5));
// setTimeout((name) => { console.log(`hello ${ name }`)}, 3000, "takahiro");

// const hello = (name) => {
//   console.log(name);
// }
// hello();

// function hello() {
//   console.log("hello");
// }

// const returnVar = hello();
// console.log(returnVar);

// function fn(arg1, arg2 = 10, arg3 = "100") {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
// }

// fn({arg3:"2000"})
// function cb(name) { console.log(`Hello, ${ name }`) };
// const cb = (name) => { console.log(`Hello, ${ name }`) };
// setTimeout((name) => { console.log(`Hello, ${ name }`) }, 2000, "takahiro");

// function add(val1, val2) { return val1 + val2 }
// function minus(val1, val2) { return val1 - val2 }

// const calcAndDisplay = (cb, outPutFn, ...val) => {
//   outPutFn(cb(val[0], val[1]));
// }

// calcAndDisplay(add, console.log, 100, 2);
// calcAndDisplay(minus, alert,2034, 2);

// // function fn1(num1, num2) { return num1 + num2 }
// const fn1 = (num1, num2) => { return num1 + num2 };
// console.log(fn1(1,100));
// // function fn2(num) { return num * 2 }
// const fn2 = (num) => { return num * 2 };
// console.log(fn2(200));

// // function fn3() { console.log("hello, hello, hello") }
// const fn3 = () => { console.log("hello, hello, hello") };
// fn3();
// // function fn4(name) {
// //   console.log("hello, hello");
// //   console.log(`hello ${ name }`);
// // }

// const fn4 = (name) => {
//   console.log("hello, hello");
//   console.log(`hello ${ name }`);
// };
// fn4("takahiro");

// // function fn5() { return { name: "takahiro" } }
// const fn5 = () => { return { name: "takahiro" } };
// console.log(fn5().name);

// class Name {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   outPut() {
//     console.log(`${this.name}さんは、${this.age}歳です。`);
//   }
// }

// const profile = new Name("髙廣", 59);
// profile.outPut();
// console.log(profile.name);
// console.log(profile.age);

class User {
  constructor(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;
  }
  
  logIn() {
    console.log(`log in ${ this.userName } / ${ this.passWord }`);
  }

  changePW(pwd) {
    this.passWord = pwd;
    console.log(`Change Pass Word: ${ this.passWord }`);
  }
}

const tk = new User("髙廣", "123");
tk.logIn();
tk.changePW("hello");
tk.logIn();