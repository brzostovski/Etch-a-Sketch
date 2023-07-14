function createGrid(gridSideSize) {

  if (gridSideSize > 100) {
    gridSideSize = 100;
  }

  const gridContainer = document.querySelector('.grid-container');

  for (let i = 1; i <= gridSideSize; i++) {
    for (let j = 1; j <= gridSideSize; j++) {

      const newTile = document.createElement('div');
      newTile.classList.add('tile');
      newTile.setAttribute('id', `tile_${i}.${j}`);

      newTile.style.gridRow = i;
      newTile.style.gridColumn = j;

      gridContainer.appendChild(newTile);
    }
  }
}

function randomValue() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  const redValue = randomValue();
  const greenValue = randomValue();
  const blueValue = randomValue();
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function createCustomGrid () {
  const customSize = window.prompt('Input grid side size:');
  createGrid(customSize);
}

const gridContainer = document.querySelector('.grid-container');

const resetButton = document.querySelector('.reset');
const eraseButton = document.querySelector('.erase')
const rainbowToggle = document.querySelector('.rainbow-toggle');

resetButton.addEventListener('click', () => {
  gridContainer.innerHTML = '';
  createCustomGrid();
})

eraseButton.addEventListener('click', () => {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.style.backgroundColor = '';
  })
})

rainbowToggle.addEventListener('click', () => {
  rainbowToggle.classList.toggle('active');
})

let mouseDown = false;
document.addEventListener('mousedown', () => (mouseDown = true))
document.addEventListener('mouseup', () => (mouseDown = false))

window.onload = () => {
  createGrid(64);

  const tiles = document.querySelectorAll('.tile');

  tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
      const rainbowToggle = document.querySelector('.rainbow-toggle.active');
      
      if (mouseDown) {
        if (rainbowToggle) {
          tile.style.backgroundColor = randomColor();
        } else {
          tile.style.backgroundColor = 'white';
        }
      }
    })
  })
}