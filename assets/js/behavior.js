let arr = [1, 2, 3, 4, 5, 6]
let strArr = []
arr.map(function (num) {
  this.push(String(num))
}, strArr)
console.log(strArr)