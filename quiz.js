
const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];




//accesing element 
let questionEL=document.getElementById("question");
let optionEl = document.getElementById("options");
let scoreEl = document.getElementById("score");
let nextEl=document.getElementById("next");

//changing inner element 





//variable declaration
let score=0;
let currentQuestion=0;
let totalmarks=quesJSON.length;


showQuestion();
// deconstructing of Object
function showQuestion(){
  let{correctAnswer,options,question}=quesJSON[currentQuestion]
questionEL.innerHTML = question;

let shuffledOptions = shuffleoptions(options);

shuffledOptions.forEach((opt) => {
  let btn = document.createElement("button");
  btn.innerHTML = opt;
  optionEl.appendChild(btn);

  btn.addEventListener("click", function () {
    if (opt == correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    scoreEl.innerHTML = `Score ${score}/ ${totalmarks}`;
    nextQuestion();
  });
});

}
function nextQuestion(){
  currentQuestion++;
  optionEl.innerHTML='';

  if(currentQuestion>=quesJSON.length)
  {
    questionEL.innerHTML='Quiz Completed !!!';
    nextEl.remove();
  }
  else {
    showQuestion();
  }
}



nextEl.addEventListener('click',()=>{
      scoreEl.innerHTML = `Score ${score}/ ${totalmarks}`;
      nextQuestion();;
});

//shuffeling of elemnts
function shuffleoptions(options) {
  for (let i = options.length-1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
};


//shuffeling of question
function shuffleQuestion(question) {
  for (let i = quesJSON.length-1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i);
    [question[i], question[j]] = [question[j], question[i]];
  }
  return question;
};




