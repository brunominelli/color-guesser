const elementRGBColor = document.getElementById('rgb-color');
const elementColorGuess = document.getElementById('color-guess');

function generateRGBColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
elementRGBColor.innerText = generateRGBColors();

function createColorBall() {
  const elementDiv = document.createElement('div');
  elementDiv.className = 'ball';
  elementDiv.style.backgroundColor = generateRGBColors();
  elementColorGuess.appendChild(elementDiv);
}

for (let index = 0; index < 6; index += 1) {
  createColorBall();
}