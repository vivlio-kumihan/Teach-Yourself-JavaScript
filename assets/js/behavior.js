const list = document.querySelectorAll("#list a")
let pic = document.getElementById("pic")
const del = document.getElementById("delete")

for (let li of list) {
  li.addEventListener("click", function() {
    let isbn = this.getAttribute("data-isbn")
    if (isbn) {
      let img = document.createElement("img")
      img.src = `https://wings.msn.to/books/${ isbn }/${ isbn }.jpg`
      img.alt = this.textContent
      if (pic.querySelector("img")) {
        pic.replaceChild(img, pic.lastChild)
      } else {
        del.disabled = false
        pic.append(img)

      }

    }
    // console.log(isbn)

  }, false)

}