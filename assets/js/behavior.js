// // org: 可変長引数のサンプルコード
// function sum(...nums) {
//   let result = 0
//   for (let num of nums) {
//     if (typeof num !== "number") {
//       throw new Error(`指定値が数値ではありません。：${ num }`)
//     }
//     result += num
//   }
//   return result 
// }
// let ans = document.getElementById("reply")
// ans.textContent = `合計は、${ sum(1,3,5,7,9) }となります。`



// // formに入力されたものは何か そして、それをどうしたいのか？
// document.getElementById("form").onsubmit = function (event) {
//   event.preventDefault()
//   let inputTexts = document.getElementById("argCheck").value.split(",")
//   console.log(inputTexts)
//   // => ['1', '2', '3']
//   console.log(typeof(inputTexts))
//   // => object
//   // イレラブルな動きをする。元の配列は変更しない。
//   console.log(inputTexts.map(Number))
//   // => [1, 2, 3]
//   console.log(inputTexts.map(str => parseInt(str, 10)))
//   // => [1, 1, 1]
// }



// // 入力に数字と文字列を混ぜる。HTMLに出力するコード。
// document.getElementById("form").onsubmit = function (event) {
//   event.preventDefault()
//   let inputTexts = document.getElementById("argCheck").value.split(",")
//   let ans = document.getElementById("reply")

//   let sum = 0
//   for (let ins of inputTexts.map(Number)) {
//     if (isNaN(ins)) {
//       ans.textContent = "配列の中に数字以外の文字が含まれています。合計できません。"
//       break;
//     } else {
//       sum += ins
//     }
//   }
//   ans.textContent = `合計は『${ sum }』です。`
// }



// throw, try ~ catchを使ってみる。
function calc(value) {
  let result = 0
  for (let ins of value.map(Number)) {
    if (isNaN(ins)) {
      throw new Error(`数字ではないものが含まれています。合計できません。`)
    }
    result += ins
  }
  return result
}

document.getElementById("form").onsubmit = function (event) {
  event.preventDefault()
  let inputTexts = document.getElementById("argCheck").value.split(",")
  let reply = document.getElementById("reply")

  try {
    reply.textContent = `合計は『${ calc(inputTexts) }』です。`
  } catch(e) {
    reply.textContent = e.message
  }
}