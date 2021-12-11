/* Constantes e Variáveis */
const elementRGBColor = document.getElementById('rgb-color');
const elementColorGuess = document.getElementById('color-guess');
const elementAnswer = document.getElementById('answer');
const elementScore = document.getElementById('score');
const ballColor = document.getElementsByClassName('ball');
const buttonStartGame = document.getElementById('reset-game');
const amount = 6;
const goal = 'Acertou!';
const miss = 'Errou! Tente novamente!';
let score = 0;

/* Implementação do placar do jogo */
elementScore.innerHTML = `Placar: ${score}`;

/* Função: generateRPGColors
-- Gera cores aleatórias no formato RGB */
function generateRGBColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

/* Função: createColorBall
-- Cria elementos HTML DIV de cor aleatória */
function createColorBall() {
  for (let index = 0; index < amount; index += 1) {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'ball';
    elementDiv.style.backgroundColor = generateRGBColors();
    elementColorGuess.appendChild(elementDiv);
  }
}
createColorBall();

/* Função: removeColorBall
-- Remove elementos HTML DIV de cor aleatória */
function removeColorBall() {
  for (let index = elementColorGuess.childNodes.length - 1; index >= 0; index -= 1) {
    elementColorGuess.removeChild(elementColorGuess.childNodes[index]);
    elementAnswer.innerText = 'Escolha uma cor';
  }
}

/* Função: rightColor
-- Define aleatóriamente qual é a cor correta */
function rightColor() {
  elementRGBColor.innerHTML = ballColor[Math.floor(Math.random() * amount)].style.backgroundColor;
}
rightColor();

/* Função: playerScore
-- Incrementa a pontuação a pessoa jogadora a cada acerto. */
function playerScore(string) {
  if (string === goal) {
    elementAnswer.innerText = string;
    score += 3;
  } else elementAnswer.innerText = miss;
  elementAnswer.innerHTML = string;
  return score;
}

/* Define se a pessoa usuária acertou ou errou após escolher uma cor */
function chooseAnswer() {
  for (let index = 0; index < amount; index += 1) {
    ballColor[index].addEventListener('click', () => {
      const rightAnswer = ballColor[index].style.backgroundColor;
      const rgb = elementRGBColor.innerHTML;
      if (rightAnswer === rgb) {
        elementAnswer.innerText = goal;
        elementScore.innerText = `Placar: ${playerScore(goal)}`;
      } else {
        elementAnswer.innerText = miss;
      }
    });
  }
}
chooseAnswer();

/* Evento que inicia/reinicia o jogo */
function playGame() {
  buttonStartGame.addEventListener('click', () => {
    removeColorBall();
    createColorBall();
    rightColor();
    chooseAnswer();
  });
}
playGame();