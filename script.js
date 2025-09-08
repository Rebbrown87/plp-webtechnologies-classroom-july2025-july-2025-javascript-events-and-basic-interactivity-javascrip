// 🌗 Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🧮 Qubit Counter
let qubitCount = 0;
const qubitDisplay = document.getElementById("qubitDisplay");

document.getElementById("incrementQubit").addEventListener("click", () => {
  qubitCount++;
  qubitDisplay.textContent = qubitCount;
});

document.getElementById("resetQubit").addEventListener("click", () => {
  qubitCount = 0;
  qubitDisplay.textContent = qubitCount;
});

// ❓ FAQ Toggle
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// 🧾 Form Validation
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  let errors = [];

  if (name === "") errors.push("Name is required.");
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) errors.push("Enter a valid email.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length > 0) {
    feedback.innerHTML = `<ul>${errors.map(e => `<li>${e}</li>`).join("")}</ul>`;
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Signup successful! Welcome to the quantum realm.";
    feedback.style.color = "green";
  }
});
