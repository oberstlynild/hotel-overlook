if (sessionStorage.getItem('loggedin')) {
    document.getElementsByClassName('nav-login')[0].innerHTML = "Profil";
    document.getElementsByClassName('nav-login')[0].href = "profil.html";
}

function logUd() {
    sessionStorage.removeItem('loggedin');
    location.href = "login.html";
}