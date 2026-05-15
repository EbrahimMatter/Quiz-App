export const DUMMY_QUESTIONS = [
  {
    questionText: "What is the HTML tag for the largest heading?",
    answerOptions: [
      { id: 1, answerText: "<h6>", isCorrect: false },
      { id: 2, answerText: "<heading>", isCorrect: false },
      { id: 3, answerText: "<h1>", isCorrect: true },
      { id: 4, answerText: "<head>", isCorrect: false },
    ],
  },
  {
    questionText: "Which CSS property is used to change the text color?",
    answerOptions: [
      { id: 5, answerText: "background-color", isCorrect: false },
      { id: 6, answerText: "color", isCorrect: true },
      { id: 7, answerText: "font-color", isCorrect: false },
      { id: 8, answerText: "text-color", isCorrect: false },
    ],
  },
  {
    questionText: "What does HTML stand for?",
    answerOptions: [
      { id: 9, answerText: "Hyper Text Markup Language", isCorrect: true },
      { id: 10, answerText: "Home Tool Markup Language", isCorrect: false },
      {
        id: 11,
        answerText: "Hyperlinks and Text Markup Language",
        isCorrect: false,
      },
      { id: 12, answerText: "Hyper Tool Markup Language", isCorrect: false },
    ],
  },
  {
    questionText: "How do you write a simple popup message in JavaScript?",
    answerOptions: [
      { id: 13, answerText: "console.log('Hello');", isCorrect: false },
      { id: 14, answerText: "msg('Hello');", isCorrect: false },
      { id: 15, answerText: "popup('Hello');", isCorrect: false },
      { id: 16, answerText: "alert('Hello');", isCorrect: true },
    ],
  },
];
