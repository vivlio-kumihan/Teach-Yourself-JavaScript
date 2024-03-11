// Q1
function run(personName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 11);
    setTimeout(() => {
      if (time % 4 === 0) {
        // データ型をどうするかは、リテラルによって決める。
        // ここでは連想配列リテラルで送っている。
        // ここの中身はそれぞれ『キー』であると認識しておく。
        reject({ personName });
      } else {
        resolve({ personName, time });
      }
    }, time);
  });
}

// Promiseチェーンの直列

// 引数を与えてPromiseの最初のインスタント生成する。
// resolveから渡ってきた引数を展開する。つまりthen関数のコール・バック関数を実行する。
// 次のインスタンスを生成させる。実行、生成の繰り返し。

// then関数で繋いでいく過程で、それぞれに独自の出力である必要で無いなら
// 関数化するのがベターなので参考として書く。
const printResult = ({ personName, time }) => {
  console.log(`${ personName }が、${ time }秒でゴール！`);
};

run("太郎")
.then((result) => {
  printResult(result);
// こういう書き方が面倒なら関数にして呼び出す。
// .then(({ personName, time }) => {
//   console.log(`${ personName }が、${ time }秒でゴール！`);
  return run("次郎");
})
.then((result) => {
  printResult(result);
// .then(({ personName, time }) => {
//   console.log(`${ personName }が、${ time }秒でゴール！`);
  return run("三郎");
})
.then((result) => {
  printResult(result);
// .then(({ personName, time }) => {
//   console.log(`${ personName }が、${ time }秒でゴール！`);
})
.catch(({ personName }) => {
  console.error(`${ personName }が転倒しました！　レースのやり直しです。`)
});

// Q2
function run(personName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 11);
    setTimeout(() => {
      if (time % 4 === 0) {
        reject({ personName });
      } else {
        resolve({ personName, time });
      }
    }, time);
  });
}

// 反対に、関数化しても行数が増えるだけならこの形式でやる。
// つまり、臨機応変に対応できないといけないということ。
Promise.any([run("太郎"), run("次郎"), run("三郎")])
  .then(({ personName, time }) => {
    console.log(`${ personName }が、${ time }秒でゴール！`)})
  .catch(() => {
    console.error("レースのやり直しです。")});

// Q3
function run(personName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 11);
    setTimeout(() => {
      if (time % 4 === 0) {
        reject({ personName });
      } else {
        resolve({ personName, time });
      }
    }, time);
  });
}

Promise.all([run("太郎"), run("次郎"), run("三郎")])
  .then((results) => {
    for(const { personName, time } of results) {
      console.log(`${ personName }のタイムは、${ time }秒です。`);
    }
  })
  .catch(({ personName }) => {
    console.error(`${ personName }が転けました。レースのやり直しです。`)});

// Q4
function run(personName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 11);
    setTimeout(() => {
      if (time % 4 === 0) {
        reject({ personName });
      } else {
        resolve({ personName, time });
      }
    }, time);
  });
}

// status, value, reasonの使い分けを意識できないとallSettledは覚えられないよ。
Promise.allSettled([run("太郎"), run("次郎"), run("三郎")])
  .then((result) => {
    for(const { status, value, reason } of result) {
      if (status === "fulfilled") {
        console.log(`${ value.personName }が${ value.time }秒でゴールしました。`);
      } else {
        console.error(`${ reason.personName }が転けました。`);
      }
    }
  });

// Q5
function run(personName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 11);
    setTimeout(() => {
      if (time % 4 === 0) {
        reject({ personName });
      } else {
        resolve({ personName, time });
      }
    }, time);
  });
}

Promise.race([run("太郎"), run("次郎"), run("三郎")])
  .then(({ personName, time }) => {
    console.log(`${ personName }が、${ time }秒でゴール！`)})
  .catch(({ personName }) => {
    console.error(`${ personName }が転びました。`)});