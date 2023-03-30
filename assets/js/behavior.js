const img = document.querySelector("#logo")
const attrs = img.attributes

// いま扱えるNamedNodeMapのメンバー（他にも多数あり...）
console.log(attrs.length)
console.log(attrs.getNamedItem("id"))
console.log(attrs.item(1))

// HTMLCollectionと同様にforEachでは回せない。
for (att of attrs) {
  console.log(att.name + "=>" + att.value)
}
