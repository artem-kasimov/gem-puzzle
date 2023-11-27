const checkOfFinish = () => {
  const cells = document.querySelectorAll('.cell')

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].dataset.position !== cells[i].dataset.number) {
      return false
    }
  }

  return true
}

export default checkOfFinish
