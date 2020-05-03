const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.querySelector('.cta__button');
const invalid = document.querySelector('.invalid');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', validateForm);
email.addEventListener('invalid', validateForm);

function validateForm(e) {
    e.preventDefault();

    if(email.value === '') {
        invalidEmail('Please provide an email');
    }
    else if(regex.test(email.value) === false) {
        invalidEmail('Please provide a valid email address');
    }
    else {
        invalid.classList.add('hidden');
        email.classList.remove('invalid');
        return true;
    }
}

function invalidEmail(msg) {
    invalid.textContent = msg;
    invalid.classList.remove('hidden');
    email.classList.add('invalid');
    return false;
}