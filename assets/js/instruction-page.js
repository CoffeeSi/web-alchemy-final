import { initToggleTheme } from './theme.js';

const fromHelpToHome = document.querySelector('#toHome');
//redirect logic
function returnToHome() {
    window.location.href = 'index.html';
}

if (fromHelpToHome) fromHelpToHome.addEventListener("click", returnToHome);

const fromHomeToLogIn = document.querySelector("#log-in-page");

function returnToLogIn(){
    window.location.href = "log_in.html";
}

if(fromHomeToLogIn) fromHomeToLogIn.addEventListener("click", returnToLogIn);


initToggleTheme();