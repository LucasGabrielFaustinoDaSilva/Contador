function enviar() {

  let number = Number(document.getElementById('num').value)

  let pula = Number(document.getElementById('pula').value)
  let res = document.getElementById('res')

  res.innerHTML = ''

  if (number < 0 || pula < 0 || pula > number) {
    alert('Digite valores validos')
  } else {
    for (let i = 0; i <= number; i += pula) {
      res.innerHTML += `(${i}) `

    }
    res.innerHTML += `<br><br>o numero é ${number} e pula de ${pula} em ${pula}`
  }




}
