

function login() {
  firebase.auth().signInWithEmailAndPassword(
      form.email().value, form.password().value
  ).then(response => {
      window.location.href = "../cadastro/dashboard.html";
  }).catch(error => {
      alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
      return "Usuário nao encontrado";
  }
  return error.message;
}

function register() {
  window.location.href = "pages/register/register.html";
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
      return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  return form.password().value ? true : false;
}

const form = {
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 