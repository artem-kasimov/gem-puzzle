import drawBoard from './_drawBoard'
import reset from './_reset'
import state from './_state'
import timer from './_timer'

const shuffleAndRestart = () => {
  const btn = document.getElementById('shuffle-btn')

  const handler = () => {
    if (!state.timer.started) {
      timer.startGame()
    }
    reset()
    drawBoard(state.size)
  }

  btn.addEventListener('click', handler)

  shuffleAndRestart.handler = handler
}

export default shuffleAndRestart
