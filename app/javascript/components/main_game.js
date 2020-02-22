const myFunc = () => {
  const myButton = document.getElementById('start-game');
  const board = document.querySelector('table')
  const cells = document.querySelectorAll('td');

  const isAlive = (cell) => {

    const cellRow = cell.parentElement.rowIndex;
    const cellColumn = cell.cellIndex;

    if(board.rows[cellRow - 1] !== undefined && board.rows[cellRow - 1].cells[ cellColumn - 1] !== undefined) {
      let topLeftC = board.rows[cellRow - 1].cells[ cellColumn - 1];
    }

    if(board.rows[cellRow - 1] !== undefined && board.rows[cellRow - 1].cells[ cellColumn - 1] !== undefined) {
      let topC = board.rows[cellRow - 1].cells[cellColumn];
    }

    if(board.rows[cellRow - 1] !== undefined && board.rows[cellRow - 1].cells[ cellColumn + 1] !== undefined) {
      let topRightC = board.rows[cellRow - 1 ].cells[cellColumn + 1];
    }

    if(board.rows[cellRow] !== undefined && board.rows[cellRow].cells[ cellColumn + 1] !== undefined) {
      let rightC = board.rows[cellRow].cells[cellColumn + 1];
    }

    if(board.rows[cellRow + 1] !== undefined && board.rows[cellRow + 1].cells[ cellColumn + 1] !== undefined) {
      let bottomRightC = board.rows[cellRow + 1].cells[cellColumn + 1];
    }

    if(board.rows[cellRow + 1] !== undefined && board.rows[cellRow + 1].cells[cellColumn] !== undefined) {
      let bottomC = board.rows[cellRow + 1 ].cells[cellColumn];
    }

    if(board.rows[cellRow + 1] !== undefined && board.rows[cellRow + 1].cells[ cellColumn - 1] !== undefined){
      let bottomLeftC = board.rows[cellRow + 1 ].cells[cellColumn - 1];
    }

    if(board.rows[cellRow] !== undefined && board.rows[cellRow].cells[ cellColumn - 1] !== undefined) {
      let leftC = board.rows[cellRow].cells[cellColumn - 1];
    }

    let countAdj = 0;
    if(typeof topLeftC !== 'undefined') {
      if( topLeftC.classList.contains('alive')) { countAdj += 1 }

    }
    if(typeof topC !== 'undefined') {
      if( topC.classList.contains('alive')) { countAdj += 1 }

    }
    if(typeof topRightC !== 'undefined') {
      if(topRightC.classList.contains('alive')) {countAdj += 1}
    }
    if(typeof rightC !== 'undefined') {
      if(rightC.classList.contains('alive')){countAdj += 1}
    }
    if(typeof bottomRightC !== 'undefined') {
      if(bottomRightC.classList.contains('alive')){countAdj += 1}
    }
    if(typeof bottomC !== 'undefined') {
      if(bottomC.classList.contains('alive')){countAdj += 1}
    }
    if(typeof bottomLeftC !== 'undefined') {
      if(bottomLeftC.classList.contains('alive')){countAdj += 1}
    }
    if(typeof leftC !== 'undefined') {
      if(leftC.classList.contains('alive')){countAdj += 1}
    }

    if(cell.classList.contains('alive')) {
      // 2 ou 3 voisines vivantes reste vivante
      if(countAdj === 2 || countAdj === 3) {
        return true
      } else {
        return false
      }
    } else {
      //Exactement 3 voisines vivantes
      if(countAdj === 3) {
        return true
      } else {
        return false
      }
    }
  }

  const toggleThem = () => {
    const theBoard = [];

    const isOne = (cell) => {
      let cellRow = cell.parentElement.rowIndex;
      let cellColumn = cell.cellIndex;
      if(theBoard[cellRow, cellColumn] === 1) {
        return true;
      } else {
        return false;
      }
     }

    cells.forEach((cell) => {
      let cellRow = cell.parentElement.rowIndex;
      let cellColumn = cell.cellIndex;
      if(isAlive(cell)) {
        theBoard[cellRow, cellColumn] = 1;
      } else {
        theBoard[cellRow, cellColumn] = 0;
      }
    });

    cells.forEach((cell) => {
      if(isOne(cell)) {
        if(cell.classList.contains('alive')) {
        } else {
          cell.classList.add('alive');
        }
      } else {
        if(cell.classList.contains('alive')) {
          cell.classList.remove('alive');
        }
      }
    });
  }



  myButton.addEventListener(('click'), (event) => {
    setInterval(toggleThem, 1000);
  });

  document.addEventListener("DOMContentLoaded", () => {
     // Every 1 second, the `refresh` function is called.
  });

}

export { myFunc };


