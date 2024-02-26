function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${ ms }msの処理が完了しました。`);
      resolve(ms);
    }, ms);
  });
}

// 関数を実行した状態を初期化。
// つまりこの時点で実行されてしまうね。
const wait1 = wait(1000);
const wait2 = wait(2000);
const wait3 = wait(3000);

Promise.all([wait1, wait2, wait3])
  .then(([resolveWait1, resolveWait2, resolveWait3]) => {
    console.log("全てのPromiseが完了しました。");
    console.log(resolveWait1, resolveWait2, resolveWait3);
  });
