import state from './_state'

const addEventListenerToCellsCanMove = () => {
  const cellsElements = document.querySelectorAll('.cell')
  const cellsCanMove = state.cellsCanMove

  cellsElements.forEach(cell => {
    const cellPosition = +cell.dataset.position
    if (cellsCanMove.includes(cellPosition)) {
      cell.setAttribute('onclick', 'changeCellPosition(this, true)')
    } else {
      cell.removeAttribute('onclick')
    }
  })
}

export default addEventListenerToCellsCanMove
