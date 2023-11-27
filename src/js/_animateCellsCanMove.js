import state from './_state'

const animateCellsCanMove = () => {
  const cellsElements = document.querySelectorAll('.cell')
  const cellsCanMove = state.cellsCanMove

  cellsElements.forEach(cell => {
    const cellPosition = +cell.dataset.position
    if (cell.querySelector('.number')) {
      if (cellsCanMove.includes(cellPosition)) {
        cell.querySelector('.number').classList.add('canMove')
      } else {
        if (cell.querySelector('.number')) {
          cell.querySelector('.number').classList.remove('canMove')
        }
      }
    }
  })
}

export default animateCellsCanMove
