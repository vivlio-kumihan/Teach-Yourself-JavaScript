// クリックする度にスクリーン1面分ごと上げる
document.getElementById("container").addEventListener("click", function() {
  // scrollBy() => 指定した位置までスクロールする。
  // X軸は0、Y軸がブラウザに写っていて、ブラウザのヘッダー以下の画面。
  window.scrollBy(0, window.innerHeight)
}, false)


// // 通常画面と全画面を切り替える
// document.getElementById("btn").addEventListener("click", function() {
//   if (this.value === "全画面") {
//     this.setAttribute("value", "戻る")
//     document.body.requestFullscreen()
//   } else {
//     this.setAttribute("value", "全画面")
//     document.exitFullscreen()
//   }
// }, false)

