const quizData = [
    {
      question: "What is the capital of India?",
      a: "Mumbai",
      b: "Kolkata",
      c: "New Delhi",
      d: "Chennai",
      correct: "c"
    },
    {
      question: "HTML stands for?",
      a: "HighText Machine Language",
      b: "HyperText Markup Language",
      c: "HyperText Markdown Language",
      d: "None of these",
      correct: "b"
    },
    {
      question: "Which language is used for styling web pages?",
      a: "HTML",
      b: "JQuery",
      c: "CSS",
      d: "XML",
      correct: "c"
    },
    {
      question: "Which is not a JavaScript Framework?",
      a: "React",
      b: "Angular",
      c: "Vue",
      d: "Cassandra",
      correct: "d"
    }
  ];
  
  const quiz = document.getElementById('quiz');
  const questionEl = document.getElementById('question');
  const answerEls = document.querySelectorAll('.answer');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(el => {
      if (el.checked) {
        answer = el.id;
      }
    });
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You scored ${score} out of ${quizData.length}!</h2>
          <button onclick="location.reload()">Try Again</button>
        `;
      }
    }
  });
  