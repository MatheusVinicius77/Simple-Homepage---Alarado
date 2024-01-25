const hamburguer_button = document.querySelector('i');
const hamburguer_sidebar = document.querySelector('.hamburguer-sidebar');
const nav_link = document.querySelectorAll('.nav-link').item(1);
const buttom_mode = document.querySelectorAll('.button-mode').item(1);
const close_button = document.querySelector('.close-button');
console.log(hamburguer_sidebar.innerHTML)
hamburguer_button.addEventListener('click', () => {
    hamburguer_sidebar.style.display = 'flex';
    nav_link.style.display = 'block';
    buttom_mode.style.display = 'block';
});


botoes = Array.from(buttom_mode.children)
botoes.forEach((botao) => {
    botao.addEventListener('click', (value) => {
        console.log(value.target)
        if (value.target.className === 'light-moon') {
            document.querySelectorAll('.light-moon').item(1).style.display = 'none';
            document.querySelectorAll('.dark-moon').item(1).style.display = 'inline-block';
            document.querySelectorAll('.dark-sun').item(1).style.display = 'none';
            document.querySelectorAll('.light-sun').item(1).style.display = 'inline-block';
            document.getElementsByTagName('h2').item(0).style.color = '#FFFFFF';

            document.documentElement.style.setProperty('--bg-color', '#111729');
            document.documentElement.style.setProperty('--font-gray-color', '#FFFFFF');
            document.documentElement.style.setProperty('--font-black-color', '#FFFFFF');
            document.querySelector('.fa-solid').style.color = '#FFFFFF'

            let logo_img = document.querySelector('.header__logo').children.item(0).src = 'dccl--responsive-simple-homepage/alarado_light.svg';


        } else if (value.target.className === 'light-sun') {
            document.querySelectorAll('.light-sun').item(1).style.display = 'none';
            document.querySelectorAll('.dark-sun').item(1).style.display = 'inline-block';
            document.querySelectorAll('.dark-moon').item(1).style.display = 'none';
            document.querySelectorAll('.light-moon').item(1).style.display = 'inline-block';
            document.getElementsByTagName('h2').item(0).style.color = 'hsla(210, 33%, 20%, 0.8)';

            document.documentElement.style.setProperty('--bg-color', '#F2F9FE');
            document.documentElement.style.setProperty('--font-gray-color', '#223344');
            document.documentElement.style.setProperty('--font-black-color', '#111729');
            document.querySelector('.fa-solid').style.color = '#111729'

            let logo_img = document.querySelector('.header__logo').children.item(0).src = 'dccl--responsive-simple-homepage/alarado-icon-homepage.svg';

        }
    })


})

close_button.addEventListener('click', () => {
    hamburguer_sidebar.style.display = 'none';
    nav_link.style.display = 'none';
    buttom_mode.style.display = 'none';
});

