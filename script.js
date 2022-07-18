const board=document.querySelector('#board')
const SQUARE_NUMBERS=8370
const colors=[]

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',setColor)
    square.addEventListener('pointerover',setColor)
    square.addEventListener('mouseleave',removeColor)
    square.addEventListener('pointerleave', removeColor)
    board.appendChild(square)
}

function setColor(event) {
    const element=event.target
    const rndColor='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    element.style.backgroundColor=rndColor
    element.style.boxShadow=`0 0 2px ${rndColor},0 0 10px ${rndColor}`
}

function removeColor(event) {
    const element=event.target
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}

