const elementRGBColor = document.getElementById('rgb-color');
const elementColorGuess = document.getElementById('color-guess');
const elementAnswer = document.getElementById('answer');
const ballColor = document.getElementsByClassName('ball');
const buttonStartGame = document.getElementById('reset-game');

/* Gera cores aleatórias no formato RGB */
function generateRGBColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

/* Cria bolas coloridas */
function createColorBall() {
  const elementDiv = document.createElement('div');
  elementDiv.className = 'ball';
  elementDiv.style.backgroundColor = generateRGBColors();
  elementColorGuess.appendChild(elementDiv);
}

/* Implementa as bolas coloridas no HTML */
for (let index = 0; index < 6; index += 1) {
  createColorBall();
}

/* Define aleatóriamente qual é a cor correta */
function rightColor() {
  elementRGBColor.innerHTML = ballColor[Math.floor(Math.random() * 6)].style.backgroundColor;
}
rightColor();

/* Define se a pessoa usuária acertou ou errou após escolher uma cor */
function chooseAnswer() {
  for (let index = 0; index < ballColor.length; index += 1) {
    ballColor[index].addEventListener('click', () => {
      const rightAnswer = ballColor[index].style.backgroundColor;
      const rgb = elementRGBColor.innerHTML;
      if (rightAnswer === rgb) {
        elementAnswer.innerHTML = 'Acertou!';
      } else elementAnswer.innerHTML = 'Errou! Tente novamente!';
    });
  }
}
chooseAnswer();
buttonStartGame.addEventListener('click', () => {
  for (let index = elementColorGuess.childNodes.length - 1; index >= 0; index -= 1) {
    elementColorGuess.removeChild(elementColorGuess.childNodes[index]);
    createColorBall();
    rightColor();
    chooseAnswer();
    elementAnswer.innerHTML = 'Escolha uma cor';
  }
});
