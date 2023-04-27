let arr = [1, 2, 3, 4, 5, 6]

let randomNum = arr.sort(function () {
  return Math.random() - 0.5
})

console.log(randomNum)


let strArr = []
arr.map(function (num) {
  this.push(String(num))
}, strArr)

let randomStr = strArr.sort(function () {
  return Math.random() - 0.5
})

console.log(randomStr)