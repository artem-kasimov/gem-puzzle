const closePopup = () => {
  const popup = document.querySelector('.popup')
  const overlay = document.querySelector('.overlay')
  const inner = document.querySelector('.popup-inner')

  popup.classList.remove('visible')
  overlay.style.display = 'none'
  document.body.style.overflow = ''
  inner.innerHTML = ''
}

export default closePopup
