console.log("A");

setTimeout(() => {
  queueMicrotask(() => console.log("B"));
  console.log("C");
});

Promise.resolve().then(() => console.log("D"));

console.log("E");

// A -> E -> D -> C -> B

// A、Eのみ同期的に実行されるため、まずA → Eの順でログが表示されます。
// 次に、Dはジョブキュー、Cはタスクキューなので、Dのジョブから実行されます。
// その後、setTimeoutのコールバック関数が実行されますが、
// Bはジョブキューに登録されるので、さらに非同期で実行されます。
// そのため、Cの実行が同期的に行われてから、Bが実行されます。