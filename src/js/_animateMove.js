const animateMove = (movingCell, emptyCell, number) => {
  const gapSize = parseInt(
    window.getComputedStyle(document.querySelector('.board')).gap
  )

  const numberWidth = parseInt(window.getComputedStyle(number).width)

  const offset = numberWidth + gapSize

  number.style.transition = 'all 0.15s'

  switch (+movingCell.dataset.position - +emptyCell.dataset.position) {
    case 1:
      number.style.left = -offset + 'px'
      break
    case -1:
      number.style.left = offset + 'px'
      break
    case -Math.sqrt(state.size):
      number.style.top = offset + 'px'
      break
    case Math.sqrt(state.size):
      number.style.top = -offset + 'px'
      break
  }
}

export default animateMove
