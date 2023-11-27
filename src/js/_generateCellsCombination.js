import calcCellsCanMove from './_calcCellsCanMove'
import state from './_state'

const generateCellsCombination = (n, numOfMoves) => {
  let cellNumbers = []
  state.emptyCellPostion = n

  for (let i = 1; i <= n; i++) {
    cellNumbers.push(i)
  }

  numOfMoves = state.numOfMoves || ((Math.random() + 100) * n) / 2

  let lastMoved

  for (let i = 0; i < numOfMoves; i++) {
    let cellsCanMove = calcCellsCanMove()
    let cellToMove =
      cellsCanMove[Math.floor(Math.random() * cellsCanMove.length)]

    while (cellNumbers.indexOf(lastMoved) + 1 === cellToMove) {
      cellToMove = cellsCanMove[Math.floor(Math.random() * cellsCanMove.length)]
    }

    lastMoved = cellToMove

    let indexOfEmptyCell = cellNumbers.indexOf(n)

    let temp = cellNumbers[indexOfEmptyCell]
    cellNumbers[indexOfEmptyCell] = cellNumbers[cellToMove - 1]
    cellNumbers[cellToMove - 1] = temp

    state.emptyCellPostion = cellToMove
  }

  return cellNumbers
}

export default generateCellsCombination
