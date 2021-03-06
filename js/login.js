var form = document.getElementById("login-form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function validateLoginForm() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    fetch('https://api.mediehuset.net/token', {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => loginUser(data))
}

function loginUser(data) {
    if (data.access_token) {
        sessionStorage.setItem("loggedin", true);
        sessionStorage.setItem("bearer", data.access_token);
        sessionStorage.setItem("user_id", data.user_id);
        sessionStorage.setItem("username", data.username);
        drawLogin()
    } else {
        sessionStorage.removeItem("loggedin");
        sessionStorage.removeItem("bearer");
        sessionStorage.removeItem("user_id");
        drawLoginOnFault()
    }
}

function drawLogin() {
    location.href = "profil.html";
}

function drawLoginOnFault() {
    document.getElementById('brugernavn-label').innerHTML = '<span class="login-obligatory">Prøv igen!</span>';
    document.getElementById('adgangskode-label').innerHTML = '<span class="login-obligatory">Prøv igen!</span>';
}