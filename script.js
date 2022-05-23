

const button = document.querySelector('.button');
const nav = document.querySelector('nav');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    nav.classList.toggle('active');
})
