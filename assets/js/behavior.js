// Nodeを抽出する。
// 複数ある場合は最初に引っかかったNodeを抽出物する。
const lang = document.querySelector(":lang(en)")
console.log(lang)

// NodeListを抽出する。
const anchors = document.querySelectorAll(".external")

// メンバーで値を参照する。
// Listの長さ
console.log(anchors.length)
// Listのインデックス番号で参照
console.log(anchors.item(1))
// 参照したインスタンスの属性を参照
console.log(anchors.item(1).href)
console.log(anchors[1].href)
// entries(), keys(), values()については値が取れない。
console.log(anchors.entries())
console.log(anchors.keys())
console.log(anchors.values())

// for...of listsでの処理
for(ac of anchors) {
  console.log(ac.href)
}