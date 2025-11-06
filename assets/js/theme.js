
export function initToggleTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-mode');
        $('.theme-btn').text('🔆');
    }
    
    $('.theme-btn').click(() => { 
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        $('.theme-btn').text(isDark ? '🔆' : '🌙');
    });
}

