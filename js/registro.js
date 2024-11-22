let formulario = document.querySelector(".contact-form");

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#rePassword");

let errorFullName = document.querySelector(".fullName");
let errorEmail = document.querySelector(".email");
let errorPhone = document.querySelector(".phone");
let errorPassword = document.querySelector(".password");
let errorRePassword = document.querySelector(".rePassword");

let emptyErrorMessage = "El campo no puede estar vacio";
let errorPhoneLength = "El telefono debe tener al menos 8 caracteres";
let passwordError = "La contraseña debe tener al menos 3 caracteres";
let rePasswordError = "Ambas contrase`ñas deben ser iguales.";

let erroresBool = false;
// ejemplo de validacion on time:
rePassword.addEventListener("input", function () {
  if (password.value != rePassword.value) {
    errorRePassword.style.display = "block";
    errorRePassword.innerText = rePasswordError;
  } else {
    errorRePassword.style.display = "none";
  }
});
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (fullName.value == "") {
    errorFullName.style.display = "block";
    errorFullName.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorFullName.style.display = "none";
  }
  if (email.value == "") {
    errorEmail.style.display = "block";
    errorEmail.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorEmail.style.display = "none";
  }
  if (phone.value == "") {
    errorPhone.style.display = "block";
    errorPhone.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorPhone.style.display = "none";
  }
  if (password.value == "") {
    errorPassword.style.display = "block";
    errorPassword.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorPassword.style.display = "none";
  }
  if (rePassword.value == "") {
    errorRePassword.style.display = "block";
    errorRePassword.innerText = emptyErrorMessage;
    erroresBool = true;
  } else {
    errorRePassword.style.display = "none";
  }
  if (rePassword.value != password.value) {
    errorRePassword.style.display = "block";
    errorRePassword.innerText = rePasswordError;
    erroresBool = true;
  } else {
    errorRePassword.style.display = "none";
  }
  if (phone.value.length < 8) {
    errorPhone.style.display = "block";
    errorPhone.innerText = errorPhoneLength;
    erroresBool = true;
  } else {
    errorPhone.style.display = "none";
  }
  if (password.value.length < 3) {
    errorPassword.style.display = "block";
    errorPassword.innerText = passwordError;
    erroresBool = true;
  } else {
    errorPassword.style.display = "none";
  }

  if (erroresBool == false) {
    this.submit();
  }
});