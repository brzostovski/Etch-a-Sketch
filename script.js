function createGrid(gridSideSize) {

  const gridContainer = document.querySelector('.grid-container');
  //gridContainer.style.height = ;
  //gridContainer.style.width = ;

  for (let i = 1; i <= gridSideSize; i++) {
    for (let j = 1; j <= gridSideSize; j++) {

      const newTile = document.createElement('div');
      newTile.setAttribute('class', 'blank-tile');
      newTile.setAttribute('id', `tile_${i}.${j}`);

      newTile.style.gridRow = i;
      newTile.style.gridColumn = j;

      gridContainer.appendChild(newTile);
    }
  }
}

createGrid(5);