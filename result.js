document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username"); 
  const score = localStorage.getItem("quizScore");   
  const total = localStorage.getItem("quizTotal");   

  const resultDiv = document.querySelector(".quiz-result");

  if (!username || !score || !total) {
    resultDiv.innerHTML = "<h2>No result found. Please attempt the quiz again.</h2>";
    return;
  }

  resultDiv.innerHTML = `
    <h2>Congratulations, ${username}!</h2>
    <p>Your score: <strong>${score}</strong> / ${total}</p>
  `;

  fetch("store_result.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${encodeURIComponent(username)}&score=${encodeURIComponent(score)}&total=${encodeURIComponent(total)}`
  })
  .then(response => response.text())
  .then(data => console.log("Server:", data))
  .catch(error => console.error("Error:", error));
});
