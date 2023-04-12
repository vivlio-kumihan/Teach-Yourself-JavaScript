// ファイル選択（複数可）
let sendPkg = document.getElementById("sendPkg")
let preWord = document.getElementById("preWord")
let fileName = document.getElementById("fileName")

sendPkg.addEventListener("change", function() {
  let files = sendPkg.files
  let tmpNames = []
  for (let file of files) {
    tmpNames.push(file.name)
    console.log(file)
    // console.log(file.type)
    // console.log(new Date(file.lastModified))
    // console.log(file.name)
    // console.log(file.size)
    // console.log(file.type)
  }
  preWord.textContent = "選択したファイルは"
  fileName.textContent = tmpNames.join("／")
}, false)

// ------------------------------------------------------------

// ファイル内容の表示
let sendText = document.getElementById("sendText")
let preText = document.getElementById("preText")
let textTitle = document.getElementById("textTitle")
let view = document.querySelector(".result")
let reader = new FileReader()

sendText.addEventListener("change", function() {
  preText.textContent = "選択したファイルは"
  textTitle.textContent = sendText.files[0].name

  reader.addEventListener("load", function() {
    view.classList.add("active")
    view.innerText = reader.result
    // view.textContent = reader.result
  })

  document.querySelector('input[type="button"]').addEventListener("click", function() {
    reader.readAsText(sendText.files[0], 'utf-8')
  })
})

// ------------------------------------------------------------

// MDN sample
// function previewFile() {
//   const content = document.querySelector('.content');
//   const [file] = document.querySelector('input[type=file]').files;
//   const reader = new FileReader();

//   reader.addEventListener("load", () => {
//     // this will then display a text file
//     content.innerText = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsText(file);
//   }
// }

// ------------------------------------------------------------