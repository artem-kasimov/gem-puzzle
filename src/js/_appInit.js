import state from './_state'
import toggleElementsClass from './_toggleElementsClass'

const appInit = () => {
  const sizeSqrt = Math.sqrt(state.size)
  const sizeBtns = document.querySelectorAll('.sizes span')
  const activeBtn = document.querySelector(`[data-size="${sizeSqrt}"]`)
  let seconds = String(state.timer.seconds).padStart(2, 0)
  let minutes = String(state.timer.minutes).padStart(2, 0)

  document.getElementById('moves').textContent = state.moves
  document.getElementById('time').textContent = `${minutes}:${seconds}`
  document.querySelector(
    '.size-info span'
  ).textContent = `${sizeSqrt}x${sizeSqrt}`
  toggleElementsClass(sizeBtns, activeBtn, 'active')
}

export default appInit
