import { loadHome } from './home.js';
import { loadMenu } from './menu.js'
import { loadAbout } from './about.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    document.getElementById('about').addEventListener('click', loadAbout)
    document.getElementById('home').addEventListener('click', loadHome);
    document.getElementById('menu').addEventListener('click', loadMenu);
})
