
export function initToggleTheme() {
    const themeBtn = document.getElementById('theme-change');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    }

    themeBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

