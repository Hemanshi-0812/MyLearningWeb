document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      alert("Please enter username and password");
    }
  });
});
