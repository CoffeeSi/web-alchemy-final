import { initToggleTheme } from './theme.js';

const fromHelpToHome = document.querySelector('#toHome');

function returnToHome() {
    window.location.href = 'index.html';
}

if (fromHelpToHome) fromHelpToHome.addEventListener("click", returnToHome);

initToggleTheme();