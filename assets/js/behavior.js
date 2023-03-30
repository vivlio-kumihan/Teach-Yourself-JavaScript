// #1 .removeAttribute 属性を削除
const items = document.querySelectorAll(".item")

for (item of items) {
  let target= item.firstElementChild
  if (target.hasAttribute("disabled")) {
    target.removeAttribute("disabled")
  }
}