import showPopup from './_showPopup'

const showResults = () => {
  const btn = document.getElementById('results-btn')

  btn.addEventListener('click', () => {
    showPopup('results')
  })
}

export default showResults
