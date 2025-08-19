import './components/navbar/navbar.component.js';

const title = document.querySelector('#title');
const app = document.querySelector('#app');
const header = document.querySelector('header');
const footer = document.querySelector('#footer');

title.textContent = 'Heriberto | Desarrollador Web';

const navbar = document.createElement('navbar-component');
app.appendChild(navbar);