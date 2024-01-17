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

console.log(Boolean(""));
console.log(Boolean(0));















