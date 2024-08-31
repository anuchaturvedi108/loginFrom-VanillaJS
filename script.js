const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

loginForm.addEventListener('submit', function (event) {
  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    emailError.style.display = 'block';
    event.preventDefault(); // Prevent form submission if email is invalid
  } else {
    emailError.style.display = 'none';
    alert('Email:' + emailInput.value + ' Password:' + passwordInput.value);
  }
});

emailInput.addEventListener('input', function () {
  if (validateEmail(emailInput.value.trim())) {
    emailError.style.display = 'none';
  }
});
