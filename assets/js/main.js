// 引数に値を入れて、非同期関数のコールバックで色々処理して
// 結果を同時に送ることができるということかな？
function wait(ms, greet) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${ ms }msの処理が完了しました。`);
      console.log(`${ greet }`);
      resolve([ms, greet]);
    }, ms);
  });
}

// 関数を実行した状態を初期化。
// 1. とりあえず実行されてしまうのは仕方ないね。
const wait1 = wait(400, "hello");
const wait2 = wait(500, "hi");
const wait3 = wait(600, "bye");

// 2. 非同期で実行される部分
Promise.all([wait1, wait2, wait3])
  .then(([resolved1, resolved2, resolved3]) => {
    console.log("全てのPromiseが完了しました。");
    console.log(resolved1[0], resolved1[1], 
                resolved2[0], resolved2[1], 
                resolved3[0], resolved3[1]);
  });
  
//   1.
//=> 400msの処理が完了しました。
//=> hello
//=> 500msの処理が完了しました。
//=> hi
//=> 600msの処理が完了しました。
//=> bye

//   2.
//=> 全てのPromiseが完了しました。
//=> 400 'hello' 500 'hi' 600 'bye'