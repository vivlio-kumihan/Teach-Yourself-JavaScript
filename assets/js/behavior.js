const template = document.getElementById("todo-item-tmple").content;
const todoList = document.querySelector("#todo-list");

const createTodoItem = (value) => {
  const newItem = template.cloneNode(true);
  const newTitle = newItem.querySelector(".todo__item-title"); 
  console.log(newTitle);
  newTitle.textContent = value;
  todoList.append(newItem);
}

createTodoItem("1つ目"); 
createTodoItem("2つ目");
createTodoItem("3つ目");

const deleteTodoItem = (item) => {
  item.remove();
};

const compTodoItem = (item) => {
  item.classList.toggle("processed")
};

// setTimeout(() => {
//   compTodoItem(todoList.firstElementChild);
// }, 2000);



// const template = document.getElementById("todo-item-tmple").content;
// const todoList = document.querySelector("#todo-list");

// const createTodoItem = (title) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (title === "") {
//         reject();
//       } else {
//         const newItem = template.cloneNode(true);
//         const newTitle = newItem.querySelector(".todo__item-title"); 
//         newTitle.textContent = title;
//         todoList.append(newItem);
//         resolve();
//       }
//     }, 1000);
//   });
// };

// async function createList() {
//   try { 
//     await createTodoItem("1つ目"); 
//     await createTodoItem("2つ目");
//     await createTodoItem("3つ目");
//     await createTodoItem("4つ目");
//     await createTodoItem("");
//     await createTodoItem("5つ目");
//   } catch (error) {
//     console.error("error: 空文字列です。処理を中断しました。");
//   } finally {
//     console.log("処理は終了しました。");
//   }
// };

// createList()


// データを配列にしないとダメなのではと思う。
// このコードは残す。

// const template = document.getElementById("todo-item-tmple").content;
// const todoList = document.getElementById("todo-list");

// let todos = [
//   "買い物をする", "掃除する", "仕事する", "食事する"
// ];

// const createTodoItem = (title) => {
//   todos.push(title);
// };
// createTodoItem("bye");

// const removeTodoItem = (arr, idx) => {
//   return arr.filter((_, i) => i !== idx);
// };
// todos = removeTodoItem(todos, 2);

// const compTodoItem = () => {
//   const compBtn = document.querySelector("todo__item-btn.complete");
//   compBtn.classList.add("processed");
// };

// for (const todo of todos) {
//   const clone = template.cloneNode(true);
//   clone.querySelector(".todo__item-title").textContent = todo;
//   todoList.appendChild(clone);
// }