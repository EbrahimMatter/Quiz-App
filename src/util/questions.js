export const DUMMY_QUESTIONS = [
  {
    questionText: "What is the HTML tag for the largest heading?",
    answerOptions: [
      { answerText: "<h6>", isCorrect: false },
      { answerText: "<heading>", isCorrect: false },
      { answerText: "<h1>", isCorrect: true },
      { answerText: "<head>", isCorrect: false },
    ],
  },
  {
    questionText: "Which CSS property is used to change the text color?",
    answerOptions: [
      { answerText: "background-color", isCorrect: false },
      { answerText: "color", isCorrect: true },
      { answerText: "font-color", isCorrect: false },
      { answerText: "text-color", isCorrect: false },
    ],
  },
  {
    questionText: "What does HTML stand for?",
    answerOptions: [
      { answerText: "Hyper Text Markup Language", isCorrect: true },
      { answerText: "Home Tool Markup Language", isCorrect: false },
      { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answerText: "Hyper Tool Markup Language", isCorrect: false },
    ],
  },
  {
    questionText: "How do you write a simple popup message in JavaScript?",
    answerOptions: [
      { answerText: "console.log('Hello');", isCorrect: false },
      { answerText: "msg('Hello');", isCorrect: false },
      { answerText: "popup('Hello');", isCorrect: false },
      { answerText: "alert('Hello');", isCorrect: true },
    ],
  },
];
