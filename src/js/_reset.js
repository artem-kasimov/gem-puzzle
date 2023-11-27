import state from './_state'
import appInit from './_appInit'

const reset = () => {
  state.timer.time = 0
  state.timer.seconds = 0
  state.timer.minutes = 0
  state.moves = 0
  moves.textContent = state.moves
  appInit()
}

export default reset
