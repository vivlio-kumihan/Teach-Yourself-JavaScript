let figs = document.querySelectorAll("figure")

for (fig of figs) {
  fig.addEventListener("mouseenter", function () {
    console.log("enter!")
    console.log(this.firstElementChild)
    this.classList.add("border-none")
    this.firstElementChild.classList.add("active")
    this.lastElementChild.classList.add("disappear")
  }, false)
  
  fig.addEventListener("mouseleave", function () {
    console.log("leave!")
    console.log(this.firstElementChild)
    this.classList.remove("border-none")
    this.firstElementChild.classList.remove("active")
    this.lastElementChild.classList.remove("disappear")
  }, false)
}