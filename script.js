function createGrid(gridSideSize) {

  const gridContainer = document.querySelector('.grid-container');

  for (let i = 1; i <= gridSideSize; i++) {
    for (let j = 1; j <= gridSideSize; j++) {

      const newTile = document.createElement('div');
      newTile.setAttribute('class', 'blank-tile');
      newTile.setAttribute('id', `tile_${i}.${j}`);

      newTile.style.gridColumn = i;
      newTile.style.gridRow = j;

      gridContainer.appendChild(newTile);
    }
  }
}

createGrid(5);