let njrMenu = document.getElementById('overlay-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

njrMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

