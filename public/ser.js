//ser.js

window.onload = function () {
    let but = document.getElementById("but");
    if (but) {
        but.onclick = function () {
            window.location.href = "/index"; // Redirects to index.html
        };
    }
};