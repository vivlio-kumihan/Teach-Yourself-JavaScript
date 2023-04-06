let query = document.getElementById("query")
let reply = document.getElementById("reply")

query.textContent = "高さ10㎝、底辺5㎝の三角形の面積を求めなさい。"

function getTriangleArea(height, width) {
  return height * width / 2
}

// 関数を定義の利点とは、例えば、面積を求める場合、
// ここの引数の値を入れ替えることで汎用性を高めることができるから。
reply.textContent = getTriangleArea(10, 5)
console.log(`Ans: ${ getTriangleArea(10, 5) }`)

// 引数チェック

// // 入力をHTMLに出力する。
// document.getElementById('form').onsubmit = function (event) {
//   // preventDefault()を説明できるようになること。
//   event.preventDefault();
//   let inputText = document.querySelector("#argCheck").value
//   document.getElementById("reply2").textContent = inputText
// }

// エラー処理と合せる。
// 処理を書いたがエラーで思うように動かない。
function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error(`引数が複数入っています。入力された引数：${ arguments.length }個`)
  } else {
    const reply2 = document.getElementById("reply2")
    return reply2.textContent = `入力された引数は『${ value }』です。`
  }
}

try {
  document.getElementById("form").onsubmit = function (event) {
    event.preventDefault()
    let inputText = document.getElementById("argCheck").value
    // ちゃんとテキストのクラス
    console.log(typeof(inputText))
    // 関数に引数はテキストクラスじゃないのか？
    showMessage(inputText)
  }
  // e => 投げられたエラー『throw new Error()』のインスタンスが入っている。
} catch(e) {
  console.log(e.message)
}