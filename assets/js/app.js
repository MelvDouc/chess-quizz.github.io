import { data } from "./data.js";
import Elmt from "./components/Elmt.js";
import Radio from "./components/Radio.js";

const section_mainLeft = document.getElementById("main-left");
const section_question = document.getElementById("question");
const section_choices = document.getElementById("choices");
const submitBtn = document.querySelector("#submit button");
let is_gameOver = false;
let questionIndex = 0;
let userAnswer = "";
let userScore = 0;

function setQuestion() {
  section_mainLeft.style.backgroundImage = `url(./assets/img/positions/pos-${data[questionIndex].imageIndex}.jpg)`;
  section_question.innerHTML = data[questionIndex].question.replace(" ?", "&nbsp;?");
  const choices = data[questionIndex].answers;
  section_choices.innerHTML = "";
  choices.forEach((choice, i) => {
    const radio = new Radio(choice, `Q-${questionIndex}`, `A-${i}`);
    section_choices.append(radio);
  });
}

function getUserAnswer() {
  const choice = section_choices.querySelector("input:checked")?.nextElementSibling.textContent;
  if (!choice) {
    alert("Veuillez choisir une réponse.");
    return false;
  }
  return choice;
}

function saveAnswer() {
  userAnswer = getUserAnswer();
  if (userAnswer === data[questionIndex].answer)
    ++userScore;
}

setQuestion();

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if (is_gameOver || !getUserAnswer()) return;
  saveAnswer();
  if (questionIndex >= data.length - 1) {
    alert(`Session terminée.\n\nScore final : ${userScore}/${data.length}`);
    is_gameOver = true;
    return;
  }
  ++questionIndex;
  setQuestion();
});