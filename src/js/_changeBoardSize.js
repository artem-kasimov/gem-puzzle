import drawBoard from './_drawBoard'
import reset from './_reset'
import state from './_state'
import timer from './_timer'

const sizeInfo = document.querySelector('.size-info span')

const changeBoardSize = n => {
  const sizeSqrt = Math.sqrt(n)
  drawBoard(n)
  sizeInfo.textContent = `${sizeSqrt}x${sizeSqrt}`
  reset()
  if (!state.timer.started) {
    timer.startGame()
  }
}

export default changeBoardSize
