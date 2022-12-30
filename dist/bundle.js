/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQixZQUFZLGNBQWMscUJBQXFCO0FBQ3RHO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50cnknKTtcbmNvbnN0IGNvdW50cnlFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5ICsgc3Bhbi5lcnJvcicpO1xuXG5jb25zdCB6aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjemlwJyk7XG5jb25zdCB6aXBFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXAgKyBzcGFuLmVycm9yJyk7XG5cbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsICsgc3Bhbi5lcnJvcicpO1xuXG5jb25zdCBwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwMScpO1xuY29uc3QgcDFFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwMSArIHNwYW4uZXJyb3InKTtcblxuY29uc3QgcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcDInKTtcbmNvbnN0IHAyRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcDIgKyBzcGFuLmVycm9yJyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihub2RlLCBtZXNzYWdlKSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBub2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvcihub2RlKSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSAnJztcbiAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBzaG93RXJyb3IoXG4gICAgICBjb3VudHJ5RXJyb3IsXG4gICAgICBgY291bnRyeSBzaG91bGQgYmUgYXQgbGVhc3QgJHtjb3VudHJ5Lm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHtjb3VudHJ5LnZhbHVlLmxlbmd0aH1gXG4gICAgKTtcbiAgfSBlbHNlIGlmIChjb3VudHJ5LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNob3dFcnJvcihjb3VudHJ5RXJyb3IsICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlRXJyb3IoY291bnRyeUVycm9yKTtcbiAgfVxufSk7XG5cbnppcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgaWYgKHppcC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICBzaG93RXJyb3IoemlwRXJyb3IsICdaaXAgQ29kZSBtdXN0IGJlIGluIHRoZSBmb3JtIEExQSAxQTEnKTtcbiAgfSBlbHNlIGlmICh6aXAudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgc2hvd0Vycm9yKHppcEVycm9yLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUVycm9yKHppcEVycm9yKTtcbiAgfVxufSk7XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgc2hvd0Vycm9yKGVtYWlsRXJyb3IsICdFbnRlcmVkIHZhbHVlIG11c3QgYmUgYW4gZW1haWwgYWRkcmVzcycpO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNob3dFcnJvcihlbWFpbEVycm9yLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUVycm9yKGVtYWlsRXJyb3IpO1xuICB9XG59KTtcblxucDEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGlmIChwMS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICBzaG93RXJyb3IocDFFcnJvciwgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiA4IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSBsZXR0ZXIgYW5kIG9uZSBudW1iZXInKTtcbiAgfSBlbHNlIGlmIChwMS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBzaG93RXJyb3IocDFFcnJvciwgJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVFcnJvcihwMUVycm9yKTtcbiAgfVxufSk7XG5cbnAyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBpZiAocDIudmFsdWUgIT09IHAxLnZhbHVlKSB7XG4gICAgc2hvd0Vycm9yKHAyRXJyb3IsICdQYXNzd29yZHMgbXVzdCBtYXRjaCcpO1xuICB9IGVsc2UgaWYgKHAyLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNob3dFcnJvcihwMkVycm9yLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUVycm9yKHAyRXJyb3IpO1xuICB9XG59KTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBhbGVydCgnZ29vZCBqb2IgYnJvIScpO1xuICB9XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9