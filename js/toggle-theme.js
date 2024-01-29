const button_dark = document.querySelector('.button-dark');
const button_light = document.querySelector('.button-light');

button_dark.addEventListener('click', (value) => {
    if (value.target.className === 'light-moon') {
        document.querySelector('.light-moon').style.display = 'none';
        document.querySelector('.dark-moon').style.display = 'inline-block';
        document.querySelector('.button-light').children.item(0).style.display = 'none';
        document.querySelector('.button-light').children.item(1).style.display = 'block';
        document.getElementsByTagName('h2').item(0).style.color = '#FFFFFF';

        document.documentElement.style.setProperty('--bg-color', '#111729');
        document.documentElement.style.setProperty('--font-gray-color', '#111729');
        document.documentElement.style.setProperty('--font-black-color', '#FFFFFF');
        document.querySelector('.fa-solid').style.color = '#FFFFFF'
        let logo_img = document.querySelector('.header__logo').children.item(0).src = 'dccl--responsive-simple-homepage/alarado_light.svg';
    }
})

button_light.addEventListener('click', (value) => {
    if (value.target.className === 'light-sun') {
        document.querySelector('.light-sun').style.display = 'none';
        document.querySelector('.dark-sun').style.display = 'inline-block';
        document.querySelector('.button-dark').children.item(1).style.display = 'none';
        document.querySelector('.button-dark').children.item(0).style.display = 'block';
        document.getElementsByTagName('h2').item(0).style.color = 'hsla(210, 33%, 20%, 0.8)';

        document.documentElement.style.setProperty('--bg-color', '#F2F9FE');
        document.documentElement.style.setProperty('--font-gray-color', '#223344');
        document.documentElement.style.setProperty('--font-black-color', '#111729');
        document.querySelector('.fa-solid').style.color = '#111729'

        let logo_img = document.querySelector('.header__logo').children.item(0).src = 'dccl--responsive-simple-homepage/alarado-icon-homepage.svg';

    }

})
