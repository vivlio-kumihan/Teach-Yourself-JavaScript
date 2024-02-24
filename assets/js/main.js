// // `定型的`な非同期処理を`時間の経過`を追って重ねて実行できる。
// // `カウントを条件`に、`カウント数`と`時刻の取得`を`n秒ごと`に実行するコードを書けるわけ。

// function promiseFactory(count) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       count++;
//       console.log(`${ count }回目のコールです。時刻：${new Date().toTimeString() }`);
//       if (count === 3) {
//         reject(count);
//       } else {
//         resolve(count);
//       }
//     }, 1000);
//   });
// }

// promiseFactory(0)
//   .then(times => { return promiseFactory(times); })
//   .then(times => { return promiseFactory(times); })
//   .then(times => { return promiseFactory(times); })
//   .then(times => { return promiseFactory(times); })
//   .catch(errorTimes => {
//     console.error(`エラーに飛びました。現在のカウントは${ errorTimes }回目です。`);
//   })
//   .finally(() => { console.log("処理を終了します。"); });


// では、1秒ごとに2つずつ数値がインクルメントされてコンソールに表示されるプログラムを
// プロミス・チェーンを使って書く。

function promiseFactory(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // これも考え方。
      // 何でもかんでも1行で解決しようとする考えがダメ。
      // num++ * 2 とかアホかやで。
      console.log(num);
      num += 2;
      if (num > 6) {
        reject(num);
      } else {
        resolve(num);
      }
    }, 1000);
  });
}

promiseFactory(0)
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .then(number => { return promiseFactory(number); })
  .catch(errorNumber => {
    console.error(`エラーに飛びました。現在は${ errorNumber }です。`);
  })
  .finally(() => { console.log("処理を終了します。"); });

