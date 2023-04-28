// 通常画面と全画面を切り替える
document.getElementById("btn").addEventListener("click", function() {
  if (this.value === "全画面") {
    this.setAttribute("value", "戻る")
    document.body.requestFullscreen()
  } else {
    this.setAttribute("value", "全画面")
    document.exitFullscreen()
  }
}, false)

