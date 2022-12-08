const quizData = [
  {
    que: "Who is the Father of our Nation?",
    a: "Mahatma Gandhi",
    b: "Rajendra Prasad",
    c: "Homi Bhabha",
    d: "Dr. Rajendra Prasad",
    ans: "a",
  },
  {
    que: "Who was the first Prime Minister of India?",
    a: "Sardar Patel",
    b: "Lala Lajpat Rai",
    c: "Jawaharlal Nehru",
    d: "APJ Abdul Kalam",
    ans: "c",
  },
  {
    que: "Who invented Computer?",
    a: "John Dalton",
    b: "Charles Babbage",
    c: "Georg Simon Ohm",
    d: "John Dalton",
    ans: "b",
  },
  {
    que: "Brain of computer is?",
    a: "KeyBoard",
    b: "Mouse",
    c: "Monitor",
    d: "CPU",
    ans: "d",
  },
  {
    que: "India lies in which continent?",
    a: "Africa",
    b: "Asia",
    c: "Antarctica",
    d: "Europe",
    ans: "b",
  },
  {
    que: "Which is the longest river on the earth?",
    a: "Amazon River",
    b: "Mekong River",
    c: "Congo River",
    d: "Nile",
    ans: "d",
  },
  {
    que: "Gir National Park in Gujarat is famous for?",
    a: "Lion",
    b: "Elephant",
    c: "Tiger",
    d: "Zibra",
    ans: "a",
  },
  {
    que: "Smallest state of India is?",
    a: "Goa",
    b: "Mizoram",
    c: "Sikkim ",
    d: "Tripura",
    ans: "a",
  },
  {
    que: " Fastest animal on earth is?",
    a: "Lion",
    b: "Tiger",
    c: "Cheetah",
    d: "Zibra",
    ans: "c",
  },
  {
    que: "National Tree of India is? ",
    a: "Neem",
    b: "Amla",
    c: "Banyan",
    d: "Peepal",
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
      ).innerHTML = `<h3>Congratulation your score is ${score}/${quizData.length}</h3>

      <button onClick="location.reload()">Reload</button>
      
      `;
    } else {
      load();
    }
  }
});

load();
