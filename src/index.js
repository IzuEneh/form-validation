const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error');

const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span.error');

const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');

const p1 = document.querySelector('#p1');
const p1Error = document.querySelector('#p1 + span.error');

const p2 = document.querySelector('#p2');
const p2Error = document.querySelector('#p2 + span.error');

const form = document.querySelector('form');

function showError(node, message) {
  node.textContent = message;
  node.classList.add('active');
}

function removeError(node) {
  node.textContent = '';
  node.classList.remove('active');
}

country.addEventListener('input', () => {
  if (country.validity.tooShort) {
    showError(
      countryError,
      `country should be at least ${country.minLength} characters; you entered ${country.value.length}`
    );
  } else if (country.validity.valueMissing) {
    showError(countryError, 'This field is required');
  } else {
    removeError(countryError);
  }
});

zip.addEventListener('input', () => {
  if (zip.validity.patternMismatch) {
    showError(zipError, 'Zip Code must be in the form A1A 1A1');
  } else if (zip.validity.valueMissing) {
    showError(zipError, 'This field is required');
  } else {
    removeError(zipError);
  }
});

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    showError(emailError, 'Entered value must be an email address');
  } else if (email.validity.valueMissing) {
    showError(emailError, 'This field is required');
  } else {
    removeError(emailError);
  }
});

p1.addEventListener('input', () => {
  if (p1.validity.patternMismatch) {
    showError(p1Error, 'Password must contain 8 characters, at least one letter and one number');
  } else if (p1.validity.valueMissing) {
    showError(p1Error, 'This field is required');
  } else {
    removeError(p1Error);
  }
});

p2.addEventListener('input', () => {
  if (p2.value !== p1.value) {
    showError(p2Error, 'Passwords must match');
  } else if (p2.validity.valueMissing) {
    showError(p2Error, 'This field is required');
  } else {
    removeError(p2Error);
  }
});

form.addEventListener('submit', (e) => {
  if (form.checkValidity()) {
    alert('good job bro!');
  }
  e.preventDefault();
});
