// fetch("sample.json")
//   .then((response) => response.json())
//   .then((data) => {
//     for(const { key, value } of data) {
//       console.log(`${ key }: ${ value }`);
//     }
//   });

// async function myFetch() {
//   const response = await fetch("sample.json");
//   const data = await response.json();
//   for(const { key, value } of data) {
//     console.log(`${ key }: ${ value }`);
//   }
// }
// myFetch();

function fetchJSON(file) {
  return fetch(file).then((res) => res.json());
}

async function main() {
  const fruits = await fetchJSON("fruit.json")
}