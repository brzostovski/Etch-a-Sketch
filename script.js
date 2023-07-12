function createGrid(gridSideSize) {
  const gridContainer = document.querySelector('.grid-container');
  for (let i = 1; i <= gridSideSize; i++) {

    const newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');
    newRow.setAttribute('id', `row_${i}`);
    gridContainer.appendChild(newRow);

    for (let j = 1; j <= gridSideSize; j++) {

      const newTile = document.createElement('div');
      newTile.setAttribute('class', 'blank-tile');
      newTile.setAttribute('id', `tile_${i}.${j}`);
      newRow.appendChild(newTile);
    }
  }
}

createGrid(4);