const quizData = [
  {
    que: "What is National bird of India?",
    a: "Peacock",
    b: "Swan",
    c: "Sparrow",
    d: "Hen",
    ans: "a",
  },
  {
    que: "What is National aniaml of India",
    a: "Elephant",
    b: "Tiger",
    c: "Lion",
    d: "Zibra",
    ans: "c",
  },
];

const questionEl = document.getElementById("question");
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const submit = document.getElementById("submit");

let currentPointer = 0;
let score = 0;

const unselectall = () => {
  const options = document.querySelectorAll(".ans");

  options.forEach((data) => {
    data.checked = false;
  });
};

const load = () => {
  unselectall();
  const currentData = quizData[currentPointer];
  questionEl.innerText = currentData.que;
  a_option.innerText = currentData.a;
  b_option.innerText = currentData.b;
  c_option.innerText = currentData.c;
  d_option.innerText = currentData.d;
};

const check = () => {
  const options = document.querySelectorAll(".ans");
  let id;
  //   console.log(options);
  options.forEach((data) => {
    if (data.checked) {
      id = data.id;
    }
  });
  return id;
};

submit.addEventListener("click", () => {
  const id = check();
  if (id) {
    if (id === quizData[currentPointer].ans) {
      score += 1;
    }
    currentPointer += 1;

    if (quizData.length === currentPointer) {
      //   alert(score);
      document.querySelector(
        ".quiz-container"
      ).innerHTML = `Congratulation your score is ${score}`;
    } else {
      load();
    }
  }
});

load();
