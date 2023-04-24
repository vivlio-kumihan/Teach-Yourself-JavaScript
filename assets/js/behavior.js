let paragraphs = Array.from(document.getElementById("article").children)
paragraphs.forEach(p => {
  tmpStr = ""
  for (let char of p.textContent) {
    tmpStr += `<span>${ char }</span>`
  } 
  const pattern = /<span>(。|、)<\/span>/g
  p.innerHTML = tmpStr.replaceAll(pattern, '<span class="right-align">$1</span>')
})