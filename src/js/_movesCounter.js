import state from './_state'

const movesCounter = () => {
  const moves = document.getElementById('moves')
  state.moves += 1
  moves.textContent = state.moves
}

export default movesCounter
