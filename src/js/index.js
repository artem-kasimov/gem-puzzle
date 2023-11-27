import '../styles/normalize/normalize.css'
import '../styles/style.sass'

import state from './_state'
import drawBoard from './_drawBoard'
import timer from './_timer'
import boardSizeHandler from './_boardSizeHandler'
import shuffleAndRestart from './_shuffleAndRestart'
import saveGame from './_saveGame'
import appInit from './_appInit'
import showResults from './_showResults'
import soundSwitch from './_soundSwitch'
import showPopup from './_showPopup'

const savedState = localStorage.getItem('gameState')
const savedCells = localStorage.getItem('cells')

if (savedState) {
  state = JSON.parse(savedState)
}

document.addEventListener('DOMContentLoaded', () => {
  appInit()
  drawBoard(state.size, savedCells)
  boardSizeHandler()
  timer()
  shuffleAndRestart()
  saveGame()
  showResults()
  soundSwitch()
  window.setNumOfMoves = num => {
    state.numOfMoves = num
  }
  //showPopup('greeting')
})

window.state = state
