import state from '../../../gem-puzzle/src/js/_state'
import defineEmptyCellArea from './_defineEmptyCellArea'

const calcCellsCanMove = () => {
  const size = state.size
  const sizeSqrt = Math.sqrt(size)
  const emptyCellPos = state.emptyCellPostion

  const emptyCellArea = defineEmptyCellArea()

  const cellsCanMove = {
    leftTop: [emptyCellPos + 1, emptyCellPos + sizeSqrt],
    rightTop: [emptyCellPos - 1, emptyCellPos + sizeSqrt],
    leftBot: [emptyCellPos - sizeSqrt, emptyCellPos + 1],
    rightBot: [emptyCellPos - sizeSqrt, emptyCellPos - 1],
    topCenter: [emptyCellPos - 1, emptyCellPos + 1, emptyCellPos + sizeSqrt],
    botCenter: [emptyCellPos - 1, emptyCellPos - sizeSqrt, emptyCellPos + 1],
    leftCenter: [
      emptyCellPos - sizeSqrt,
      emptyCellPos + 1,
      emptyCellPos + sizeSqrt,
    ],
    rightCenter: [
      emptyCellPos - sizeSqrt,
      emptyCellPos - 1,
      emptyCellPos + sizeSqrt,
    ],
    center: [
      emptyCellPos - 1,
      emptyCellPos + 1,
      emptyCellPos - sizeSqrt,
      emptyCellPos + sizeSqrt,
    ],
  }

  return cellsCanMove[emptyCellArea]
}

export default calcCellsCanMove
