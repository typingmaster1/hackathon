document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Define correct answers
  var correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "c",
    q4: "b",
    q5: "a",
  };

  // Get selected answers
  var selectedAnswers = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
    q4: document.querySelector('input[name="q4"]:checked').value,
    q5: document.querySelector('input[name="q5"]:checked').value,
    // Add more questions here
  };

  // Calculate marks
  var marks = 0;
  for (var question in selectedAnswers) {
    if (selectedAnswers[question] == correctAnswers[question]) {
      marks += 10; // Increment marks by 10 for each correct answer
    }
  }

  // Store marks in localStorage
  localStorage.setItem("marks", marks);

  // Redirect to result.html
  window.location.href = "SessionS.html";
});
