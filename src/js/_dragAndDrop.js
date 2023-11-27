import state from './_state'

const dragAndDrop = () => {
  const emptyCell = document.querySelector(
    `[data-position="${state.emptyCellPostion}"]`
  )

  const numbers = document.querySelectorAll('.number')

  let draggableNumber

  numbers.forEach(number => {
    if (number.classList.contains('canMove')) {
      number.setAttribute('draggable', 'true')
      number.addEventListener('dragstart', onDragStart)
      number.addEventListener('dragend', onDragEnd)
    } else {
      number.removeAttribute('draggable')
      number.removeEventListener('dragstart', onDragStart)
      number.removeEventListener('dragend', onDragEnd)
    }
  })

  emptyCell.addEventListener('dragover', onDragOver)

  emptyCell.addEventListener('drop', onDrop)

  function onDragStart(e) {
    draggableNumber = this
    e.target.parentElement.removeAttribute('onclick')
    e.dataTransfer.setData('numberOfCell', this.parentElement.dataset.number)
  }

  function onDragEnd(e) {
    e.target.parentElement.setAttribute(
      'onclick',
      'changeCellPosition(this, true)'
    )
  }

  function onDragOver(e) {
    e.preventDefault()
  }

  function onDrop(e) {
    emptyCell.removeEventListener('dragover', onDragOver)
    emptyCell.removeEventListener('drop', onDrop)
    const numberOfCell = e.dataTransfer.getData('numberOfcell')
    const movingCell = document.querySelector(`[data-number="${numberOfCell}"]`)

    changeCellPosition(movingCell)
  }

  dragAndDrop.onDragOver = onDragOver
  dragAndDrop.onDrop = onDrop
}

export default dragAndDrop
