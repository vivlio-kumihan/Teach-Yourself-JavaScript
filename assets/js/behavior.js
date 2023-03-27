// 要素を取るやり方
const os = document.getElementById("os")
let options = os.children
console.log(options)  // => HTMLCollection!!!
// ここでのoptionsは『HTMLCollection』なので『forEach』は使えない。
// options.forEach(opt => {
//   console.log(opt.value)
// })

for (let opt of options) {
  console.log(opt.value)
}

// -----

// // Nodeを取るやり方　要素だけを取りたい場合に注意が必要。
// const os = document.querySelector("#os")
// let options = os.childNodes
// // この場合は、改行と要素を取る。
// // なので条件分けで要素だけを抽出する。
// // なお、ここでのoptionsは『NodeList』なので『forEach』で回せる。

// // forEach
// console.log(options)
// options.forEach(elem => {
//   if (elem.nodeType === 1) {
//     console.log(elem.value)
// }
// })

// for
// for (let opt of options) {
//   // console.log(opt)
//   if (opt.nodeType === 1) {
//     console.log(opt.value)
//   }
// }

// -----

// // firstElementChild, nextElementSiblingプロパティを使うやり方
// const os = document.getElementById("os")
// let child = os.firstElementChild
// while (child) {
//   console.log(child.value)
//   child = child.nextElementSibling
// }