const gridContainer = document.querySelector('.grid-container');
const newGridButton = document.querySelector('#new-grid');
const eraseButton = document.querySelector('#erase')
const rainbowToggle = document.querySelector('#rainbow-toggle');
const shadowToggle = document.querySelector('#shadow-toggle');

let mouseDown = false;
  document.addEventListener('mousedown', () => (mouseDown = true))
  document.addEventListener('mouseup', () => (mouseDown = false))
let rainbowOn = false;
  rainbowToggle.addEventListener('click', () => {
    rainbowOn = !rainbowOn;
    rainbowToggle.classList.toggle('active');
  })
let shadowOn = false;
  shadowToggle.addEventListener('click', () => {
    shadowOn = !shadowOn;
    shadowToggle.classList.toggle('active');
  })

function createGrid(gridSideSize) {
  const gridContainer = document.querySelector('.grid-container');
  if (gridSideSize > 100) {
    gridSideSize = 100;
  }
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

function createCustomGrid () {
  const customSize = window.prompt('Input grid side size:');
  createGrid(customSize);
  startSketching();
}

function randomValue(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}

function randomColor() {
  const redValue = randomValue(255);
  const greenValue = randomValue(255);
  const blueValue = randomValue(255);
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function changeOpacity(element) {
  let newOpacity = 0;
  let currentOpacity = parseFloat(element.style.opacity);
  if (shadowOn === false) {
    newOpacity = 1;
  } else if (Number.isNaN(currentOpacity)) {
    newOpacity = .1;
  } else {
    newOpacity = currentOpacity + 0.1;
  }
  element.style.opacity = newOpacity;
}

function changeColor(element) {
  if (rainbowOn) {
    element.style.backgroundColor = randomColor();
  } else {
    element.style.backgroundColor = 'white';
  }
}

function startSketching() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      changeOpacity(tile);
      changeColor(tile);
    })
    tile.addEventListener('mouseover', () => {
      if (mouseDown) {
        changeOpacity(tile);
        changeColor(tile);
      }
    })
  })
}

newGridButton.addEventListener('click', () => {
  gridContainer.innerHTML = '';
  createCustomGrid();
})

eraseButton.addEventListener('click', () => {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.style.backgroundColor = '';
    tile.style.opacity = '';
  })
})

window.onload = () => {
  createGrid(64);
  startSketching();
}