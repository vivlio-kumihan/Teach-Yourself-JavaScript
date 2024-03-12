async function asyncFunction() {
  return "hello";
}

asyncFunction().then((arg) => {
  console.log(arg);
});

const asyncFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    })
  }, 0);
};

asyncFunction().then((arg) => {
  console.log(arg);
});
