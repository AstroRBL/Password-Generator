const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const errorElement = document.getElementById("error"); // Added error element reference

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  const length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 4) {
    showError("Minimum password length is 4 characters.");
    return;
  }

  if (length > 15) {
    showError("Maximum password length is 15 characters.");
    return;
  }

  errorElement.textContent = ""; // Clear any previous error messages

  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

function showError(message) {
  errorElement.textContent = message;
}
