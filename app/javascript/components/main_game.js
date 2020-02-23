const myFunc = () => {
  const myButton = document.getElementById('start-game');
  const stopButton = document.getElementById('stop-game');
  const myCounter = document.getElementById('my-counter');
  let counter = 0;
  const board = document.querySelector('table')
  const cells = document.querySelectorAll('td');
  const lastCell = cells[cells.length -1];
  const lastCellRow = lastCell.parentElement.rowIndex;
  let theBoard = [];

  //create a multidimensional array for each row
  for(let i = 0; i <= lastCellRow; i += 1) {
    theBoard.push([]);
    console.log(i);
  }

  const isAlive = (cell) => {

    const cellRow = cell.parentElement.rowIndex;
    const cellColumn = cell.cellIndex;
    let countAdj = 0;

    //console.log(`condition 1 : ${board.rows[cellRow - 1] !== undefined}`);
    // console.log(`condition 2 : ${board.rows[cellRow - 1].cells[ cellColumn - 1] !== undefined}`);

    if(board.rows[cellRow - 1] !== undefined && board.rows[cellRow - 1].cells[ cellColumn - 1] !== undefined) {
      let topLeftC = board.rows[cellRow - 1].cells[ cellColumn - 1];
      if( topLeftC.classList.contains('alive')) { countAdj += 1 }
    }

    if(board.rows[cellRow - 1] !== undefined && board.rows[cellRow - 1].cells[ cellColumn - 1] !== undefined) {
      let topC = board.rows[cellRow - 1].cells[cellColumn];
      if( topC.classList.contains('alive')) { countAdj += 1 }
    }

    if(board.rows[cellRow - 1] !== undefined && board.rows[cellRow - 1].cells[ cellColumn + 1] !== undefined) {
      let topRightC = board.rows[cellRow - 1 ].cells[cellColumn + 1];
      if(topRightC.classList.contains('alive')) {countAdj += 1}
    }

    if(board.rows[cellRow] !== undefined && board.rows[cellRow].cells[ cellColumn + 1] !== undefined) {
      let rightC = board.rows[cellRow].cells[cellColumn + 1];
      if(rightC.classList.contains('alive')){countAdj += 1}
    }

    if(board.rows[cellRow + 1] !== undefined && board.rows[cellRow + 1].cells[ cellColumn + 1] !== undefined) {
      let bottomRightC = board.rows[cellRow + 1].cells[cellColumn + 1];
      if(bottomRightC.classList.contains('alive')){countAdj += 1}
    }

    if(board.rows[cellRow + 1] !== undefined && board.rows[cellRow + 1].cells[cellColumn] !== undefined) {
      let bottomC = board.rows[cellRow + 1 ].cells[cellColumn];
      if(bottomC.classList.contains('alive')){countAdj += 1;}
      // console.log("I HAVE A BOTTOM");
      // console.log(`My bottom has the class : ${bottomC.classList.contains('alive')}`);
      console.log(`Therefore countAdj is : ${countAdj}`);
    }

    if(board.rows[cellRow + 1] !== undefined && board.rows[cellRow + 1].cells[ cellColumn - 1] !== undefined){
      let bottomLeftC = board.rows[cellRow + 1 ].cells[cellColumn - 1];
      if(bottomLeftC.classList.contains('alive')){countAdj += 1}
    }

    if(board.rows[cellRow] !== undefined && board.rows[cellRow].cells[ cellColumn - 1] !== undefined) {
      let leftC = board.rows[cellRow].cells[cellColumn - 1];
      if(leftC.classList.contains('alive')){countAdj += 1}
    }

    if(cell.classList.contains('alive')) {
      // 2 ou 3 voisines vivantes reste vivante
      console.log('She was alive');
      if(countAdj === 2 || countAdj === 3) {
        //console.log(`I return true as the result of countAdj is : ${countAdj}`);
        return true
      } else {
        //console.log(`I return false as the result of countAdj is : ${countAdj}`);
        return false
      }
    } else {
      //Exactement 3 voisines vivantes
      if(countAdj === 3) {
        //console.log(`I return true as the result of countAdj is : ${countAdj}`);
        return true
      } else {
        //console.log(`I return false as the result of countAdj is : ${countAdj}`);
        return false
      }
    }
  }

  const toggleThem = () => {
    counter += 1;
    myCounter.innerText = counter;

    const isOne = (cell) => {
      let cellRow = cell.parentElement.rowIndex;
      let cellColumn = cell.cellIndex;
      if(theBoard[cellRow][cellColumn] === 1) {
        return true;
      } else {
        return false;
      }
    }

    cells.forEach((cell) => {
      let cellRow = cell.parentElement.rowIndex;
      let cellColumn = cell.cellIndex;
      console.log(`I am checking the cell row : ${cellRow} and column : ${cellColumn}`);
      if(isAlive(cell)) {
        theBoard[cellRow][cellColumn] = 1;
        console.log('SHE IS FUCKING ALIVE!!!!');
        console.table(theBoard);
      } else {
        theBoard[cellRow][cellColumn] = 0;
        console.table(theBoard);
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

  cells.forEach((cell) => {
    cell.addEventListener('click',(event) => {
      if(cell.classList.contains('alive')){
        cell.classList.remove('alive');
      } else {
        cell.classList.add('alive');
      }
    })
  })



  myButton.addEventListener(('click'), (event) => {
    const myInterval = setInterval(toggleThem, 1);

    stopButton.addEventListener(('click'), (event) => {
      clearInterval(myInterval);
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
     // Every 1 second, the `refresh` function is called.
  });

}

export { myFunc };


