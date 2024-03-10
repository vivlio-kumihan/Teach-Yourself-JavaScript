const myResolve1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolve1が『呼ばれる』。");
    console.log("myResolve1の『実行』が終了。");
  }, 1000);
});

const myResolve2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolve2が『呼ばれる』。");
    console.log("myResolve2の『実行』が終了。");
  }, 100);
});

const myResolve3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolve3が『呼ばれる』。");
    console.log("myResolve3の『実行』が終了。");
  }, 10);
});

const myReject1 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("reject1が『呼ばれる』。");
    console.log("myReject1の『実行』が終了。");
  }, 2000);
});

const myReject2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("reject2が『呼ばれる』。");
    console.log("myReject2の『実行』が終了。");
  }, 200);
});

const myReject3 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("reject3が『呼ばれる』。");
    console.log("myReject3の『実行』が終了。");
  }, 0);
});


Promise.allSettled([myResolve1, myResolve2, myResolve3, myReject1, myReject2, myReject3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("全ての処理が終了しました。");
  });