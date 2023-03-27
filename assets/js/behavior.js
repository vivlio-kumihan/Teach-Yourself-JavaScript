// 画像にマウスをかざしたら別画像に切り替える。
const pic = document.getElementById("cover")
pic.addEventListener("mouseenter", function() {
  this.src = "../img/p2.jpg"
}, false)

// マウスが画像から別画像に切り替える。
pic.addEventListener("mouseleave", function() {
  this.src = "../img/p3.jpg"
}, false)

// anchorをクリックしたら別窓でURLを開く。
const link = document.getElementById("site")
link.addEventListener("click", function() {
  this.setAttribute("target", "_blank")
}, false)