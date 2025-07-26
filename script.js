function enviar() {

  let number = Number(document.getElementById('num').value)

  let pula = Number(document.getElementById('pula').value)
  let res = document.getElementById('res')
  for (let i = 1; i <= number; i += pula) {
    res.innerHTML += `${i}<br>`
  } 
  res.innerHTML += `<br>o numero é ${number} e pula ${pula}`

}

function apagar(){
  let res = document.getElementById('res')
  res.innerHTML = ''
}