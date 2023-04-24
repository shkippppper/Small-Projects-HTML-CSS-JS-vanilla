const quizData = [
    {
      question: "Which language runs in a web browser?",
      answers: ["Java", "C", "Python", "JavaScript"],
      correctIndex: 3,
    },
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Making Links",
        "Hyper Text Marking Links",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is not a valid JavaScript data type?",
      answers: ["Number", "Boolean", "String", "Float"],
      correctIndex: 3,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const submitButton = document.querySelector(".submit-wrapper");
  const resultElement = document.getElementById("result-text");
  const resultWrapper = document.getElementById("result-wrapper");
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
  
    currentQuestion.answers.forEach((answer, index) => {
      const answerElement = document.createElement("div");
      answerElement.classList.add("answer", `opt-${index + 1}`);
      answerElement.innerHTML = `
        <input type="radio" name="answer-option" value="${index}">
        ${answer}
      `;
      answersElement.appendChild(answerElement);
    });
  }
  
  function checkAnswer() {
    const selectedAnswerIndex = Number(
      document.querySelector('input[name="answer-option"]:checked').value
    );
    const currentQuestion = quizData[currentQuestionIndex];
  
    if (selectedAnswerIndex === currentQuestion.correctIndex) {
      score++;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Wrong!";
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = `Quiz complete! You got ${score} out of ${quizData.length} questions correct.`;
    answersElement.innerHTML = "";
    submitButton.innerHTML = "Reload";
    submitButton.addEventListener("click", function(){
      location.reload();
    })
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  showQuestion();