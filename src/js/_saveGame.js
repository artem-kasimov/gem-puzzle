import state from './_state'

const saveGame = () => {
  const btn = document.getElementById('save-btn')

  const handler = () => {
    localStorage.setItem('gameState', JSON.stringify(state))
    localStorage.setItem('cells', document.querySelector('.board').innerHTML)
  }

  btn.addEventListener('click', handler)
}

export default saveGame
