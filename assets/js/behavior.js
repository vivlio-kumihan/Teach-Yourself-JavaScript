const images = document.querySelectorAll("img")
for (image of images) {
  if (!image.hasAttribute("src")) {
    // image.setAttribute("src", "../img/p1.jpg")
    image.src = "../img/p1.jpg"
  }
}

const links = document.querySelectorAll("dd > a")
for (link of links)  {
  if (!link.hasAttribute("target")) {
    link.addEventListener("click", function() {
      // this.setAttribute("target", "_blank")
      this.target = "_blank"
    }, false)
  }
}

const email = document.getElementById("email")
document.querySelector(".item.five > input").addEventListener("click", function() {
  console.log(email.value)
  console.log(email.getAttribute("value"))
}, false)


