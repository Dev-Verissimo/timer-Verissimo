function setTimeSeconds(s) {
  const data = new Date(s * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'GMT'
  })
}

let relogio = document.getElementsByClassName('relogio')[0]
let buttonStart = document.getElementsByClassName('iniciar')[0]
let buttonPause = document.getElementsByClassName('pausar')[0]
let buttonZero = document.getElementsByClassName('zerar')[0]
let seconds = 0
let timer
 
function startTime() {
  timer = setInterval(()=>{
    seconds++
    relogio.innerHTML = setTimeSeconds(seconds)
  }, 1000)
}


buttonPause.addEventListener('click', (e) =>{

  e.preventDefault()
  relogio.style.color = 'red'

  clearInterval(timer)


})

buttonStart.addEventListener('click', (e) => {

  e.preventDefault()
  relogio.style.color = 'white'

  clearInterval(timer)
  startTime()

  

})

buttonZero.addEventListener('click', (e) => {
  relogio.style.color = 'white'

  clearInterval(timer)

  relogio.innerHTML = '00:00:00'
  seconds = 0
})