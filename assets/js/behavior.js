// // 要素の収集
// const heading = document.querySelectorAll("article[id^='part']")
// console.log(heading)

// クリックする度に次の章へスクロールする　scrollIntoView
// scrollIntoView
document.getElementById("container").addEventListener("click", function(e) {
  let currentChapter = e.target.closest("[id^='part']")
  if (currentChapter) {
    let previous = currentChapter.id.split("-")[0]
    let follow = Number(currentChapter.id.split("-")[1]) + 1
    let nextChapter = `#${ previous }-${ String(follow) }`
    console.log(nextChapter)
    document.querySelector(nextChapter)?.scrollIntoView(true)
  }
}, false)


// // クリックする度にスクリーン1面分ごと上げる
// document.getElementById("container").addEventListener("click", function() {
//   // scrollBy() => 指定した位置までスクロールする。
//   // X軸は0、Y軸がブラウザに写っていて、ブラウザのヘッダー以下の画面。
//   window.scrollBy(0, window.innerHeight)
// }, false)


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

