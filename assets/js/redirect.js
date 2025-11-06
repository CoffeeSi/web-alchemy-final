
export function initRedirect() {
    // redirect to login page
    $('#toLogin').click(function() {
        window.location.href = "login.html";
    });

    // redirect to instruction page
    $('#toHelp').click(function() {
        window.location.href = 'instructions.html';
    })

    // redirect to main page
    $('#toHome').click(function() {
        window.location.href = 'game.html';
    })
}