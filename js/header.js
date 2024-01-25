const hamburguer_button = document.querySelector('i');
const hamburguer_sidebar = document.querySelector('.hamburguer-sidebar');
const nav_link = document.querySelectorAll('.nav-link').item(1);
const buttom_mode = document.querySelectorAll('.button-mode').item(1);
const close_button = document.querySelector('.close-button');

hamburguer_button.addEventListener('click', () => {
    hamburguer_sidebar.style.display = 'flex';
    nav_link.style.display = 'block';
    buttom_mode.style.display = 'block';
});

close_button.addEventListener('click', () => {
    hamburguer_sidebar.style.display = 'none';
    nav_link.style.display = 'none';
    buttom_mode.style.display = 'none';
});

