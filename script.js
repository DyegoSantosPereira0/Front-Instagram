const userField = document.getElementById('user');
const passField = document.getElementById('pass');
const loginBtn = document.getElementById('loginBtn');

function validate() {
    // No Instagram moderno, o botão ativa com qualquer user e senha >= 6
    if (userField.value.length > 0 && passField.value.length >= 6) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}

userField.addEventListener('input', validate);
passField.addEventListener('input', validate);