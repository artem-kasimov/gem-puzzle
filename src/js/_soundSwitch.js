import state from './_state'

const soundSwitch = () => {
  const btn = document.getElementById('sound')

  if (!state.sound) btn.textContent = 'Off'

  btn.addEventListener('click', () => {
    if (state.sound) {
      btn.textContent = 'Off'
      state.sound = false
    } else {
      btn.textContent = 'On'
      state.sound = true
    }
  })
}

export default soundSwitch
