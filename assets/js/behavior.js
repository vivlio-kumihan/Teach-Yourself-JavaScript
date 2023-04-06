function sum(...nums) {
  let result = 0
  for (let num of nums) {
    if (typeof num !== "number") {
      throw new Error(`指定値が数値ではありません。：${ num }`)
    }
    result += num
  }
  return result 
}
let ans = document.getElementById("reply")
ans.textContent = `合計は、${ sum(1,3,5,7,9) }となります。`

console.log(sum(1,3,5,7,9))

// // 入力をHTMLに出力する。
// // 入力した値を配列に変更しエラー処理し、数字であれば合計して返す。
// // 筋書きはこれでいいが大問題発生。
// // input[type = "text"]だから『数字』かそれ以外で条件分岐できない根本的な問題。
// // どのようにして解決しているのか？
// // なので、HTMLに出力をするコードは書いていない。

// function sum(array) {
//   let result = 0
//   for (let ins of array) {
//     if (typeof(ins) !== "number") {
//       throw new Error(`指定値が数値ではありません。：${ ins }`)
//     }
//     result += ins
//   }
//   return result
// }

// // formに入力があったら、値を配列に変更する。
// document.getElementById('form').onsubmit = function (event) {
//   // preventDefault()を説明できるようになること。
//   event.preventDefault();
//   let inputText = document.querySelector("#argCheck").value.split(",")
//   let tmpArray = []
//   for (let ins of inputText) {
//     if (typeof(ins) !== "number") {
//       throw new Error(`入力された値は数値ではありません。:${ ins }`)
//     }
//     tmpArray.push(ins)
//   }
//   console.log(tmpArray)
// }