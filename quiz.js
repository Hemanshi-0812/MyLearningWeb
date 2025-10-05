document.addEventListener("DOMContentLoaded", () => {

  let timeLeft = 90; 
  const timerDisplay = document.querySelector(".timer");
  const submitBtn = document.querySelector(".btn");

  timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

  const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("⏰ Time's up! Submitting quiz automatically.");
      submitQuiz();
    }
  }, 1000);

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    clearInterval(countdown); 
    submitQuiz();
  });

  const correctAnswers = [
    "HyperText Markup Language",
    "color",
    "<script>",
    "<a>",
    "alert()"
  ];

  function submitQuiz() {
    let score = 0;
    const total = correctAnswers.length;

    document.querySelectorAll(".question").forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
      if (selected && selected.parentElement.textContent.trim() === correctAnswers[index]) {
        score++;
      }
    });

    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", total);

    window.location.href = "result.html";
  }
});