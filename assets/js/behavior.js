const books = [
  { title: 'ゼロからわかる TypeScript入門', price: 2948 },
  { title: 'Bootstrap 5の教科書', price: 3828 },
  { title: 'はじめてのAndroidアプリ開発', price: 3520 },
]

const list = document.getElementById("list")

// 配列をfor ofで回すやり方は、描画環境のパフォーマンスを考えると控えるべき。
// for (book of books) {
//   let li = document.createElement("li")
//   li.textContent = `${ book.title } => ${ book.price }円`
//   list.append(li)
// }

// 対策 => document.createDocumentFragmane()を使う。
let frag = document.createDocumentFragment()
for (book of books) {
  let li = document.createElement("li")
  li.textContent = `${ book.title } => ${ book.price }円`
  frag.append(li)
}

list.append(frag)