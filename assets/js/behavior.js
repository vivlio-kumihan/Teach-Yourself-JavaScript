// 要素を取るやり方
const dl = document.querySelector(".wrapper.one > dl")

// HTMLCollectionを取る
console.log(dl.children)

// HTMLCollectionの子要素とその値を現す
for (ins of dl.children) {
  console.log(ins)
  console.log(ins.textContent)
}

// NodeListを取る
console.log(dl.childNodes)

// NodeListの子要素で要素ノードだけとその値を現す
for (ins of dl.childNodes) {
  if (ins.nodeType === 1) {
    console.log(ins)
    console.log(ins.textContent)
  }
}

// 要素を取る
console.log(dl.parentElement)
const nodeTest = document.querySelector(".nodeTest")
console.log(nodeTest.nextElementSibling)
// これも読みにくい
console.log(dl.firstElementChild.nextElementSibling.lastElementChild.textContent)

// Nodeウォーキング　最後の行はやりすぎで読みにくくなるだけ。
const figure = document.getElementById("cover")
console.log(figure.firstElementChild.alt)
console.log(figure.firstElementChild.src)
console.log(figure.firstElementChild.nextElementSibling.firstElementChild.href)

// 画像にマウスをかざしたら別画像に切り替える。
const pic = document.getElementById("cover")
pic.addEventListener("mouseenter", function () {
  this.firstElementChild.src = "../img/p2.jpg"
}, false)

// マウスが画像から別画像に切り替える。
pic.addEventListener("mouseleave", function () {
  this.firstElementChild.src = "../img/p3.jpg"
}, false)

// anchorをクリックしたら別窓でURLを開く。
const link = document.getElementById("site")
link.addEventListener("click", function () {
  this.setAttribute("target", "_blank")
}, false)

// ----------------------------------------------------
// 配列内の値の順をランダムにする関数
function arrShuffle(array) {
  // array.length - 1 => 最後の値のインデックス番号
  for (let i = (array.length - 1); 0 < i; i--) {
    // 0〜(i+1)未満の範囲でランダムな値を取得
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

// ターゲットとなる全てのリストを収集する。
const container = document.querySelector(".grid-container")
let lists = container.children

container.addEventListener("mouseenter", function () {
  // ランダムな順番を格納した配列を生成する。
  let nums = []
  for (let i = 1; i < lists.length + 1; i++) {
    nums.push(i)
  }
  let ramdomNums = arrShuffle(nums)

  // リストを最初から呼び出して、スタイルにランダムな数字を入れていく。
  for (let i = 0; i < lists.length; i++) {
    lists[i].setAttribute("style", `order:${ramdomNums[i]}`)
  }
})

container.addEventListener("mouseleave", function () {
  // ランダムな順番を格納した配列を生成する。
  let nums = []
  for (let i = 1; i < lists.length + 1; i++) {
    nums.push(i)
  }
  let ramdomNums = arrShuffle(nums)

  // リストを最初から呼び出して、スタイルにランダムな数字を入れていく。
  for (let i = 0; i < lists.length; i++) {
    lists[i].setAttribute("style", `order:${ramdomNums[i]}`)
  }
})



