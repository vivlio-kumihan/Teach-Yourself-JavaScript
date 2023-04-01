// createElement(), textContent, append()で要素の追加と属性の結び付け

let title = document.getElementById("title")
let url = document.getElementById("url")
let bookList = document.getElementById("book-list")

document.getElementById("btn").addEventListener("click", function() {
  let li = document.createElement("li")
  let anchor = document.createElement("a")
  anchor.href = url.value
  anchor.textContent = title.value
  li.append(anchor)
  bookList.append(li)
}, false)

// Nodeで要素の追加と属性の結び付け

// let title = document.getElementById("title")
// let url = document.getElementById("url")
// let bookList = document.getElementById("book-list")

// document.getElementById("btn").addEventListener("click", function() {
//   let anchor = document.createElement("a")
//   let href = document.createAttribute("href")
//   href.value = url.value
//   anchor.setAttributeNode(href)
//   let text = document.createTextNode(title.value)
//   anchor.append(text)
//   bookList.append(anchor)
// }, false)