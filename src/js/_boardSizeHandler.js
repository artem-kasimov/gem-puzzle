import changeBoardSize from './_changeBoardSize'
import state from './_state'
import toggleElementsClass from './_toggleElementsClass'

const sizeBtns = document.querySelectorAll('.sizes span')

const boardSizeHandler = () => {
  sizeBtns.forEach(btn => {
    const size = Math.pow(+btn.dataset.size, 2)

    btn.addEventListener('click', () => {
      state.size = size

      if (!btn.classList.contains('active')) {
        changeBoardSize(state.size)
        toggleElementsClass(sizeBtns, btn, 'active')
      }
    })
  })
}

export default boardSizeHandler
