// init
let getTime = document.getElementById("getTime")
const wee_day = { 0: "日", 1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土" }
// ゼロで埋める二桁位取り
function zeroDigit(num) {
  return ('00' + num).slice(-2)
}

// 現在時刻
let currentTime = new Date()
// 年
let year = currentTime.getFullYear()
// 月
let month = currentTime.getMonth() + 1
let zeroMonth = zeroDigit(month)
// 日
let day =currentTime.getDate()
let zeroDay = zeroDigit(day)
// 時
let hours = currentTime.getHours()
let zeroHours = zeroDigit(hours)
// 分
let minutes = currentTime.getMinutes()
let zeroMinutes = zeroDigit(minutes)
// 秒
let seconds = currentTime.getSeconds()
let zeroSeconds = zeroDigit(seconds)
// 曜日
let week = wee_day[currentTime.getDay()]


getTime.setAttribute("datetime", `${ year }-${ zeroMonth }-${ zeroDay } ${ zeroHours }:${ zeroMinutes }:${ zeroSeconds }`)
getTime.textContent = `${ year }年${ month }月${ day }日(${ week }) ${ zeroHours } : ${ zeroMinutes } : ${ zeroSeconds }`

// 現在時刻：new Date()
// 年　：instance.getFullYear()
// 月　：instance.getMonth() + 1
// 日　：instance.getDate()
// 曜日：instance.getDay()
// 時　：instance.getHours()
// 分　：instance.getMinutes()
// 秒　：instance.getSeconds()