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
  startSketching();
}

const gridContainer = document.querySelector('.grid-container');

const newGridButton = document.querySelector('#new-grid');
const eraseButton = document.querySelector('#erase')
const rainbowToggle = document.querySelector('#rainbow-toggle');

newGridButton.addEventListener('click', () => {
  gridContainer.innerHTML = '';
  createCustomGrid();
})

eraseButton.addEventListener('click', () => {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.style.backgroundColor = '';
  })
})

let mouseDown = false;
document.addEventListener('mousedown', () => (mouseDown = true))
document.addEventListener('mouseup', () => (mouseDown = false))


let rainbowOn = false;
rainbowToggle.addEventListener('click', () => {
  rainbowOn = !rainbowOn;
  rainbowToggle.classList.toggle('active');
})

function changeColor(item) {
  if (rainbowOn) {
    item.style.backgroundColor = randomColor();
  } else {
    item.style.backgroundColor = 'white';
  }
}

function startSketching() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => { //TO-DO: Try to write changeColor function to run on 'mouseover' in tile event listener

    tile.addEventListener('click', () => {
      changeColor(tile);
    })

    tile.addEventListener('mouseover', () => {    
      if (mouseDown) {
        changeColor(tile);
      }
    })
  })
}

window.onload = () => {
  createGrid(64);
  startSketching();
}