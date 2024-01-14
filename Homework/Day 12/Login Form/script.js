const form = document.querySelector("#formId");
const emailVal = document.getElementById('email');
const passwordVal = document.getElementById('password');

function submitForm(event) {
    console.log(emailVal.value);
    console.log(passwordVal.value);
    event.preventDefault();
}

form.addEventListener('submit', submitForm);
