document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
    alert("User not found. Sign-in again");
    return;
    }

    const user = JSON.parse(storedUser);

    if (user.password !== password) {
    alert("User not found. Try again");
    return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Welcome, " + user.name + "!");

    window.location.href = "index.html"; 
});