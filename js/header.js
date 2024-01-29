const hamburguer_button = document.querySelector('i');
const nav_wrapper = document.querySelector('.nav-wrapper')
const close_button = document.querySelector('.close-button')
console.log(close_button)

hamburguer_button.addEventListener('click', () => {
    const visible = nav_wrapper.getAttribute('data-visible')

    if (visible === 'false') {
        nav_wrapper.setAttribute('data-visible', 'true')
        close_button.setAttribute('data-visible', 'true')

    } else {
        nav_wrapper.setAttribute('data-visible', 'false')
    }
})


close_button.addEventListener('click', () => {
    nav_wrapper.setAttribute('data-visible', 'false')
    close_button.setAttribute('data-visible', 'false')

})


