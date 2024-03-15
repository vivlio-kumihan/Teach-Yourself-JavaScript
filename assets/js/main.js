// Q1
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

const printResult = ({ personName, time }) => {
  console.log(`${ personName }が、${ time }秒でゴール！`);
};

async function excute() {
  try {
    let result = await run("太郎");
    printResult(result);
    result = await run("次郎");
    printResult(result);
    result = await run("三郎");
    printResult(result);
  } catch({ personName }) {
    console.error(`${ personName }が転倒しました！　レースのやり直しです。`)
  }
}

excute();


run("太郎")
.then((result) => {
  printResult(result);
  return run("次郎");
})
.then((result) => {
  printResult(result);
  return run("三郎");
})
.then((result) => {
  printResult(result);
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


Promise.any([run("太郎"), run("次郎"), run("三郎")])
  .then(({ personName, time }) => {
    console.log(`${ personName }が、${ time }秒でゴール！`)})
  .catch(() => {
    console.error("レースのやり直しです。")});

excute();

Promise.any([run("太郎"), run("次郎"), run("三郎")])
  .then(({ personName, time }) => {
    console.log(`${ personName }が、${ time }秒でゴール！`)})
  .catch(() => {
    console.error("レースのやり直しです。")});


// // Q3
// function run(personName) {
//   return new Promise((resolve, reject) => {
//     const time = Math.floor(Math.random() * 11);
//     setTimeout(() => {
//       if (time % 4 === 0) {
//         reject({ personName });
//       } else {
//         resolve({ personName, time });
//       }
//     }, time);
//   });
// }

// Promise.all([run("太郎"), run("次郎"), run("三郎")])
//   .then((results) => {
//     for(const { personName, time } of results) {
//       console.log(`${ personName }のタイムは、${ time }秒です。`);
//     }
//   })
//   .catch(({ personName }) => {
//     console.error(`${ personName }が転けました。レースのやり直しです。`)});


// // Q4
// function run(personName) {
//   return new Promise((resolve, reject) => {
//     const time = Math.floor(Math.random() * 11);
//     setTimeout(() => {
//       if (time % 4 === 0) {
//         reject({ personName });
//       } else {
//         resolve({ personName, time });
//       }
//     }, time);
//   });
// }

// Promise.allSettled([run("太郎"), run("次郎"), run("三郎")])
//   .then((result) => {
//     for(const { status, value, reason } of result) {
//       if (status === "fulfilled") {
//         console.log(`${ value.personName }が${ value.time }秒でゴールしました。`);
//       } else {
//         console.error(`${ reason.personName }が転けました。`);
//       }
//     }
//   });


// // Q5
// function run(personName) {
//   return new Promise((resolve, reject) => {
//     const time = Math.floor(Math.random() * 11);
//     setTimeout(() => {
//       if (time % 4 === 0) {
//         reject({ personName });
//       } else {
//         resolve({ personName, time });
//       }
//     }, time);
//   });
// }

// Promise.race([run("太郎"), run("次郎"), run("三郎")])
//   .then(({ personName, time }) => {
//     console.log(`${ personName }が、${ time }秒でゴール！`)})
//   .catch(({ personName }) => {
//     console.error(`${ personName }が転びました。`)});



//////////////////////////////////////////////////////////










// const prom = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("この値を取り出す");
//   }, 1000);
// });

// async function asyncFunc() {

// }
// prom.then((val) => {
//   return console.log(val);
// })

// Promiseインスタンスを生成する。

// const prom = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("この値を取り出す");
//   }, 1000);
// });

// prom.then((val) => {
//   return console.log(val);
// })

// 関数の定義の中でPromiseインスタンスを使う。

// const prom = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("この値を取り出す");
//     }, 1000);
//   });
// }

// prom().then((val) => {
//   console.log(val);
// })