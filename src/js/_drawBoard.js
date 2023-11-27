import animateCellsCanMove from './_animateCellsCanMove'
import dragAndDrop from './_dragAndDrop'
import generateCells from './_generateCells'
import moveCells from './_moveCells'

const boardEl = document.querySelector('.board')

const drawBoard = (n = 16, cells) => {
  const columns = Math.sqrt(n)

  boardEl.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
  boardEl.style.gridTemplateRows = `repeat(${columns}, 1fr)`

  if (!cells) {
    cells = generateCells(n)
    boardEl.innerHTML = ''
    boardEl.appendChild(cells)
  } else {
    boardEl.innerHTML = cells
  }

  animateCellsCanMove()
  moveCells()
  dragAndDrop()
}

export default drawBoard
