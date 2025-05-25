const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Regex Patterns
const nameRegex = /^[A-Za-z\s]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!nameRegex.test(fullName)) {
    message.textContent = "Please enter a valid full name (letters and spaces only).";
    return;
  }

  if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  if (!usernameRegex.test(username)) {
    message.textContent = "Username must be 4–15 characters and contain only letters and numbers.";
    return;
  }

  if (!passwordRegex.test(password)) {
    message.textContent = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    return;
  }

  if (!phoneRegex.test(phone)) {
    message.textContent = "Enter a valid phone number (e.g., +250788123456).";
    return;
  }

  message.style.color = "green";
  message.textContent = "Registration successful!";
  form.reset();
});
