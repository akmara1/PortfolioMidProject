const btn = document.querySelector('.form__btn')
const hiden = document.querySelector('.form-hiden')

btn.addEventListener('click', () => {
    hiden.classList.toggle('active')
    // if (hiden.classList.contains('active')){
        
    // }
})

const yes = document.querySelector('#yes')
const no = document.querySelector('#no')
const yes_text = document.querySelector('#yes-text')
const no_text = document.querySelector('#no-text')

yes.addEventListener('click', () => {
    yes_text.classList.toggle('active')
})
no.addEventListener('click', () => {
    no_text.classList.toggle('active')
})

const close1 = document.querySelector('#close1')
const close2 = document.querySelector('#close2')

const open = document.querySelector('.form-open')


close1.addEventListener('click', () => {
    open.innerHTML = ''
    location.reload()
})

close2.addEventListener('click', () => {
    open.innerHTML = ''
    location.reload()
})
