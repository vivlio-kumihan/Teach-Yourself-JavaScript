// // #1 .hasAttribute()で条件分岐で抽出して.setAttributeで属性の設定
const images = document.querySelectorAll("dd > img")
for (img of images) {
  if (!img.hasAttribute("src")) {
    img.setAttribute("src", "../img/p1.jpg")
  }
}
    
// #2 インデックスが分かっているならNamedNodeMapから直接設定。まぁ、ないな。
// const images = document.querySelectorAll("dd > img")
// images.item(1).setAttribute("src", "../img/p1.jpg")