const formEL = document.getElementById("form");
const inputEL = document.getElementById("input");
const scoreEL=document.getElementById("score");
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEL.innerText=`Score: ${score}`;

const questionEL = document.getElementById("question");
questionEL.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

formEL.addEventListener("submit", () => {
  const userAns = +inputEL.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage()
  } else {
    score--;
    updateLocalStorage()
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}


