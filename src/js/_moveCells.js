import addEventListenerToCellsCanMove from './_addEventListenerToCellsCanMove'
import animateCellsCanMove from './_animateCellsCanMove'
import animateMove from './_animateMove'
import calcCellsCanMove from './_calcCellsCanMove'
import checkOfFinish from './_checkOfFinish'
import dragAndDrop from './_dragAndDrop'
import movesCounter from './_movesCounter'
import showPopup from './_showPopup'
import state from './_state'
import timer from './_timer'

const moveCells = () => {
  const board = document.querySelector('.board')

  const changeCellPosition = (movingCell, animation) => {
    const emptyCell = document.querySelector(
      `[data-position="${state.emptyCellPostion}"]`
    )
    const number = movingCell.querySelector('.number')

    if (animation) {
      board.style.pointerEvents = 'none'
      animateMove(movingCell, emptyCell, number)
      number.addEventListener(
        'transitionend',
        () => {
          number.style.transition = 'none'
          number.style.left = 0
          number.style.top = 0
          emptyCell.appendChild(number)
          animateCellsCanMove()
          board.style.pointerEvents = 'auto'
          emptyCell.removeEventListener('dragover', dragAndDrop.onDragOver)
          emptyCell.removeEventListener('drop', dragAndDrop.onDrop)
          dragAndDrop()
        },
        { once: true }
      )
    } else {
      emptyCell.appendChild(number)
    }

    state.emptyCellPostion = +movingCell.dataset.position
    emptyCell.dataset.number = movingCell.dataset.number
    movingCell.dataset.number = state.size
    state.cellsCanMove = calcCellsCanMove()

    addEventListenerToCellsCanMove()
    movesCounter()

    if (!animation) {
      animateCellsCanMove()
      dragAndDrop()
    }

    if (checkOfFinish()) {
      timer.pauseGame(true)
      showPopup('finish')

      if (state.sound) {
        const audio = new Audio('./assets/sounds/win.mp3')
        audio.volume = 0.7
        audio.play()
      }
    }

    if (state.sound) {
      const audio = new Audio('./assets/sounds/move.mp3')
      audio.play()
    }
  }

  addEventListenerToCellsCanMove()

  window.changeCellPosition = changeCellPosition
}

export default moveCells
