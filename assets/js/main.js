// Promise.all
// 最初にやったサンプルのように、関数を一行ずつ実行するような状態を再現できる。
// コール・スタックにグローバル・コンテキストが無くなるのをイベント・ループは検知して、
// タスク・キューにあるタスクを順に実行していく。
// ほぼ瞬時に入るので関数は一斉に発火し、延滞時間によって実行がコントロールされるように見えるわけだ。
// 延滞時間とメッセージを引数に持たせた関数をPromise.allで実行する。

const wait = (ms, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${ ms }秒後にメッセージ：${ message }を出力する。`);
      if (typeof ms !== "number" || typeof message !== "string" || message === "") {
        reject([ms, message]);
      } else { 
        resolve([ms, message]);
      }
    }, ms);
  });
};

Promise.all([wait(1000, "hello"), wait(0, "bye"), wait(2000, "はい")])
  // つまり、ここのthen関数はおまけ。なくてもいいんです。
  .then(([resolved1, resolved2, resolved3]) => {
    console.log("全てのPromiseが完了しました。");
    console.log(resolved1[0], resolved1[1], 
                resolved2[0], resolved2[1], 
                resolved3[0], resolved3[1]);
  });