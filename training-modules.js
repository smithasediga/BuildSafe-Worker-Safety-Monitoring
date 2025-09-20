document.getElementById("startQuiz").addEventListener("click", () => {
  const question = "What does PPE stand for?";
  const answer = prompt(question);
  if (answer.toLowerCase() === "personal protective equipment") {
    alert("Correct! Great job.");
  } else {
    alert("Incorrect. The correct answer is 'Personal Protective Equipment'.");
  }
});
