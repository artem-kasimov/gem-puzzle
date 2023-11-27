import calcCellsCanMove from './_calcCellsCanMove'
import generateCellsCombination from './_generateCellsCombination'
import state from './_state'

const generateCells = n => {
  const randomNumbers = generateCellsCombination(n)
  const fragment = document.createDocumentFragment()

  const createCell = () => {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    const randomNumber = randomNumbers.shift()

    if (randomNumber !== n) {
      const cellNumber = document.createElement('div')
      cellNumber.classList.add('number')
      cellNumber.textContent = randomNumber
      cell.appendChild(cellNumber)
    }

    cell.dataset.number = randomNumber

    return cell
  }

  for (let i = 1; i <= n; i++) {
    const cell = createCell()
    cell.dataset.position = i
    fragment.appendChild(cell)

    if (+cell.dataset.number === state.size) {
      state.emptyCellPostion = i
    }
  }

  state.cellsCanMove = calcCellsCanMove()

  return fragment
}

export default generateCells
