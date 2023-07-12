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

function etchASketch (gridSideSize) {

  createGrid(gridSideSize);

  const tiles = document.querySelectorAll('.tile');

  tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
      //tile.classList.add('activated');
      tile.style.backgroundColor = randomColor();
    })
  })
}

function createCustomGrid () {
  const customSize = window.prompt('Input grid side size:');
  etchASketch(customSize);
}

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {

  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  createCustomGrid();

  resetButton.textContent = 'Reset';
})