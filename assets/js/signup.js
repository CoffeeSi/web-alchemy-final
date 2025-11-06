document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (localStorage.getItem(email)) {
        alert("This user already exists!");
        return;
    }

    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration successful");
    window.location.href = "login.html";
});