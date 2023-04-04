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

