let pwd = document.getElementById('pwd');
let pwdConfirm = document.getElementById('pwd_confirm');
let button = document.getElementById('button');
let warning = document.getElementById('warning');
let confirmation = document.getElementById('confirmation');

function matchPasswords() {
    if (pwd.value != pwdConfirm.value && pwd.value!="") {
        pwdConfirm.setAttribute('title', "Passwords do not match");
        warning.textContent = "Passwords do not match";
        pwdConfirm.style.border = "1px solid red";
        return false;
    } else if (pwd.value!="") {
        confirmation.textContent = "Your account has been created";
        alert("Your account has been created");
    }
};
button.addEventListener('click', matchPasswords);
