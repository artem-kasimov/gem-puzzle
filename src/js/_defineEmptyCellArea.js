import state from '../../../gem-puzzle/src/js/_state'

const defineEmptyCellArea = () => {
  const size = state.size
  const sizeSqrt = Math.sqrt(size)
  const emptyCellPos = state.emptyCellPostion
  const leftTop = 1
  const rightTop = sizeSqrt
  const leftBot = size - sizeSqrt + 1
  const rightBot = size
  const leftCenter = []
  const rightCenter = []

  let leftCenterItem = leftBot - sizeSqrt

  while (leftCenterItem > leftTop) {
    leftCenter.push(leftCenterItem)
    leftCenterItem -= sizeSqrt
  }

  let rightCenterItem = rightBot - sizeSqrt

  while (rightCenterItem > rightTop) {
    rightCenter.push(rightCenterItem)
    rightCenterItem -= sizeSqrt
  }

  if (emptyCellPos === leftTop) return 'leftTop'
  if (emptyCellPos === rightTop) return 'rightTop'
  if (emptyCellPos === leftBot) return 'leftBot'
  if (emptyCellPos === rightBot) return 'rightBot'
  if (emptyCellPos > 1 && emptyCellPos < sizeSqrt) return 'topCenter'
  if (emptyCellPos > leftBot && emptyCellPos < rightBot) return 'botCenter'
  if (leftCenter.includes(emptyCellPos)) return 'leftCenter'
  if (rightCenter.includes(emptyCellPos)) return 'rightCenter'
  return 'center'
}

export default defineEmptyCellArea
