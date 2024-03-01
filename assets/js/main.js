// function delay(fn, msg, ms) {
//   setTimeout(function() {
//     fn(msg);
//   }, ms);
// }

// delay(console.log, "hello", 1000);
// delay(alert, "bye", 2000);
// delay(console.log, "こんにちは", 500);



// function delay(fn, msg, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fn(msg);
//       resolve();
//     }, ms);
//   });
// }

// delay(console.log, "hello", 1000)
//   .then(() => {
//     console.log("Delay finished");
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   })
//   .finally(console.log("処理を終了します。"));


// // delay((msg) => {
// //   console.log(msg);
// //   delay((msg) => {
// //     console.log(msg);
// //   }, "さらに、1秒経ちました。", 1000);
// // }, "1秒経ちました。", 1000);


function delay(fn, msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fn(msg);
      if (typeof fn !== "function" || msg === "" || ms === 0) {
        reject();
      } else {
        resolve();
      }
    }, ms);
  });
}

delay(console.log, "hello", 1000)
  .then(() => delay(console.log, "bye", 1000))
  .then(() => delay(console.log, "", 1000))
  .then(() => delay(alert, "こんにちは", 1000))
  .catch((error) => {
    console.error("エラーが発生:", error);
  })
  .finally(() => {
    console.log("処理は終了しました。")
  });
