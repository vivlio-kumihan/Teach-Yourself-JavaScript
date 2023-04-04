// NodeList
let list = document.getElementById("list")

let liHtmlCollection = list.children
let liNodeList = document.querySelectorAll("#list > li")

// 子要素の数は...
console.log(`追加前：${ liHtmlCollection.length }`)  // 5
console.log(`追加前：${liNodeList.length}`)          // 5

// 子要素を生成
let addChild = document.createElement("li")

// 子要素を追加
list.appendChild(addChild)

// 子要素の数は...
console.log(`追加後：${ liHtmlCollection.length }`)  // 6
console.log(`追加後：${ liNodeList.length }`)        // 5