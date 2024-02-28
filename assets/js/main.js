let val = 0;
// 非同期に設定する。その1 resolve()
Promise.resolve().then(() => {
  console.log(`非同期では、valの値は${ val }です。`);
})
// グローバル・スコープで関数の実行。
console.log(`グローバル・コンテキストの終了。ちなみに変数valの値は、${ val }です。`);
// 変数の更新。
val = 1;


// 非同期に設定する。その2 reject()
Promise.reject("エラーの理由").catch(error => {
  console.error(error);
})
// グローバル・スコープで関数の実行。
console.log("グローバル・コンテキストの終了。");

//=> グローバル・コンテキストの終了。ちなみに変数valの値は、0です。
//=> グローバル・コンテキストの終了。
//=> 非同期では、valの値は1です。
//=> エラーの理由