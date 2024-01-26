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

const obj = { name: "takahiro" };
delete obj.name;
console.log(obj);
