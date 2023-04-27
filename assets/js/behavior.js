let paragraphs = Array.from(document.getElementById("article").children)

paragraphs.forEach((p, idx) => {
  let para = p.textContent
  if (para.length >= 31) {
    p.innerHTML = `${ idx + 1 }. ${ para.slice(0, 30) }…`
  }
})