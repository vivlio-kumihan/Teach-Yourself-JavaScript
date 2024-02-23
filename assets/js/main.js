// 非同期処理をネストさせるためにPromiseを使う。
// ### 0. 最初の一歩

// Promiseは初期状態で、`resolve`, `reject`という関数を持つ。
// `resolve関数`は`then`メソッドがある。
// `reject関数`は`catch`メソッドがある。
// `resolve`, `reject`の引数は、それぞれ`then`メソッド, `catch`メソッドに
// 渡っていく。
let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 0から10までの整数をランダムに生成させる。
    const rand = Math.floor(Math.random() * 11);
    if (rand < 5) {
      reject(rand);
    } else {
      resolve(rand);
    }
  }, 1000)
});

instance = instance.then((value) => {
  console.log(`5以上の値${value}が渡ってきました。`);
});

instance = instance.catch((errorValue) => {
  console.log(`5未満の値${errorValue}が渡ってきたのでエラー表示。`);
});

instance = instance.finally(() => {
  console.log("処理を終了します。");
});


let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 0から10までの整数をランダムに生成させる。
    const setTime = new Date().getSeconds();
    console.log(setTime);
    if (setTime % 2 === 0) {
      resolve(setTime);
    } else {
      reject(setTime);
    }
  }, 1000)
});


instance = instance.then((value) => {
  console.log(`${value}は、偶数のため成功とします。`);
});

instance = instance.catch((errorValue) => {
  console.log(`${errorValue}は、奇数のためエラーとします。`);
});

instance = instance.finally(() => {
  console.log("処理を終了します。");
});


instance = instance
  .then(value => console.log(`${value}は、偶数のため成功とします。`))
  .catch(errorValue => console.log(`${errorValue}は、奇数のためエラーとします。`))
  .finally(() => console.log("処理を終了します。"));