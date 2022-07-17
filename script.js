const board=document.querySelector('#board')
const SQUARE_NUMBERS=8370
const colors=[]

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('pointerover',()=>{
   setColor(square)
    })
    square.addEventListener('mouseleave',()=>{
        removeColor(square)
    })
    square.addEventListener('pointerleave',()=>{
        removeColor(square)
    })
    board.appendChild(square)
}

function setColor(element) {
    const rndColor='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    element.style.backgroundColor=rndColor
    element.style.boxShadow=`0 0 2px ${rndColor},0 0 10px ${rndColor}`
}

function removeColor(element) {
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}

