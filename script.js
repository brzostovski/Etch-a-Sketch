const GRID_CONTAINER = document.querySelector('.grid-container');
const NEW_GRID_BUTTON = document.querySelector('#new-grid');
const ERASE_BUTTON = document.querySelector('#erase')
const RAINBOW_TOGGLE = document.querySelector('#rainbow-toggle');
const SHADOW_TOGGLE = document.querySelector('#shadow-toggle');

let mouseDown = false;
  document.addEventListener('mousedown', () => (mouseDown = true))
  document.addEventListener('mouseup', () => (mouseDown = false))
let rainbowOn = false;
  RAINBOW_TOGGLE.addEventListener('click', () => {
    rainbowOn = !rainbowOn;
    RAINBOW_TOGGLE.classList.toggle('active');
  })
let shadowOn = false;
  SHADOW_TOGGLE.addEventListener('click', () => {
    shadowOn = !shadowOn;
    SHADOW_TOGGLE.classList.toggle('active');
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
  const valueR = randomValue(255);
  const valueG = randomValue(255);
  const valueB = randomValue(255);
  return `rgb(${valueR}, ${valueG}, ${valueB})`;
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
  switch (rainbowOn) {
    case true:
      element.style.backgroundColor = randomColor();
      break;
    case false:
      element.style.backgroundColor = 'white';
      break;
  }
  /*if (rainbowOn) {
    element.style.backgroundColor = randomColor();
  } else {
    element.style.backgroundColor = 'white';
  }*/
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

NEW_GRID_BUTTON.addEventListener('click', () => {
  GRID_CONTAINER.innerHTML = '';
  createCustomGrid();
})

ERASE_BUTTON.addEventListener('click', () => {
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