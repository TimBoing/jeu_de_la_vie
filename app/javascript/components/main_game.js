const myFunc = () => {
  const myButton = document.getElementById('start-game');
  const stopButton = document.getElementById('stop-game');
  const myCounter = document.getElementById('my-counter');
  let counter = 0;
  const board = document.querySelector('table')
  const cells = document.querySelectorAll('td');
  const lastCell = cells[cells.length -1];
  const lastCellRow = lastCell.parentElement.rowIndex;
  const lastCellColumn = lastCell.cellIndex;
  let theBoard = [];

  //create a multidimensional array with for each row and populate the multidimensional array with dead cells
  for(let i = 0; i <= lastCellRow; i += 1) {
    theBoard.push([]);
    for (let j = 0; j <= lastCellColumn; j += 1) {
      theBoard[i][j] = 0;
    }
  }

  let newBoard = theBoard.slice().map( function(row){ return row.slice(); });;

  const isAlive = (cellRow, cellColumn) => {
    let countAdj = 0;

    //console.log(`condition 1 : ${board.rows[cellRow - 1] !== undefined}`);
    // console.log(`condition 2 : ${board.rows[cellRow - 1].cells[ cellColumn - 1] !== undefined}`);

    // Check if neighbours exist and increment countAdj for living neighbours
    if((cellRow - 1) >= 0 && (cellColumn - 1) >= 0) {
      let topLeftC = theBoard[cellRow - 1][ cellColumn - 1];
      countAdj += topLeftC;

    }

    if((cellRow - 1) >= 0){
      let topC = theBoard[cellRow - 1][cellColumn];
      countAdj += topC;

    }

    if((cellRow - 1) >= 0 && (cellColumn + 1) <= lastCellColumn) {
      let topRightC = theBoard[cellRow - 1 ][cellColumn + 1];
      countAdj += topRightC;

    }

    if((cellColumn + 1) <= lastCellColumn) {
      let rightC = theBoard[cellRow][cellColumn + 1];
      countAdj += rightC;

    }

    if((cellRow + 1) <= lastCellRow && (cellColumn + 1) <= lastCellColumn) {
      let bottomRightC = theBoard[cellRow + 1][cellColumn + 1];
      countAdj += bottomRightC;

    }

    if((cellRow + 1) <= lastCellRow) {
      let bottomC = theBoard[cellRow + 1 ][cellColumn];
      countAdj += bottomC;

      // console.log("I HAVE A BOTTOM");
      // console.log(`My bottom has the value : ${bottomC}`);
      // console.log(`Therefore countAdj is : ${countAdj}`);
    }

    if((cellRow + 1) <= lastCellRow &&  (cellColumn - 1) >= 0){
      let bottomLeftC = theBoard[cellRow + 1 ][cellColumn - 1];
      countAdj += bottomLeftC;

    }

    if((cellColumn - 1) >= 0) {
      let leftC = theBoard[cellRow][cellColumn - 1];
      countAdj += leftC;

    }


    if(theBoard[cellRow][cellColumn] === 1) {
      // 2 ou 3 voisines vivantes reste vivante

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
      if(newBoard[cellRow][cellColumn] === 1) {
        return true;
      } else {
        return false;
      }
    }

    // calculer les nouveaux statuts et remplir progressivement un nouveau tableau
    theBoard.forEach((row, rowIndex) => {
      let cellRow = rowIndex;
      row.forEach((cell, colIndex) => {
        let cellColumn = colIndex;

        if(isAlive(cellRow, cellColumn)){

          newBoard[cellRow][cellColumn] = 1;

        } else {
          newBoard[cellRow][cellColumn] = 0;
        }
      });
    });

    // reassigner la valeur de ce nouveau tableau a l´ancien tableau

    theBoard = newBoard.slice().map( function(row){ return row.slice(); });;

    // itérer sur chaque cellule du tableau physique et leur donner une valeur en fonction du nouveau tableau
    cells.forEach((cell) => {
      if(isOne(cell)) {
        if(cell.classList.contains('alive')) {
          //nothing change, she stays alive
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


  // EVENT LISTENERS --------------------------------------

  // Allow to change cells status by clicking on them
  cells.forEach((cell) => {
    cell.addEventListener('click',(event) => {
      let cellRow = cell.parentElement.rowIndex;
      let cellColumn = cell.cellIndex;
      if(cell.classList.contains('alive')){
        theBoard[cellRow][cellColumn] = 0;
        cell.classList.remove('alive');
      } else {
        theBoard[cellRow][cellColumn] = 1;
        cell.classList.add('alive');
      }
    })
  })

  myButton.addEventListener(('click'), (event) => {
    const myInterval = setInterval(toggleThem, 1000);

    stopButton.addEventListener(('click'), (event) => {
      clearInterval(myInterval);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
     // Every 1 second, the `refresh` function is called.
  });

}

export { myFunc };


// instancer un tableau avec que des cellules mortes
// A FAIRE /remplir ce tableau avec quelques cellules vivantes
// calculer les nouveaux statuts et remplir progressivement un nouveau tableau
// assigner la valeur de ce nouveau tableau a l´ancien tableau
// itérer sur chaque cellule du tableau physique et leur donner une valeur en fonction du nouveau tableau

