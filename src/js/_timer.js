import state from './_state'

const timer = () => {
  const pauseBtn = document.getElementById('pause-btn')
  const timeEl = document.getElementById('time')
  const pauseOverlay = document.querySelector('.pause-overlay')
  let interval = setInterval(start, 1000)

  function start() {
    state.timer.started = true
    state.timer.time += 1
    timeEl.textContent = state.timer.time

    state.timer.minutes = Math.floor(state.timer.time / 60)
    state.timer.seconds = state.timer.time % 60

    let seconds = String(state.timer.seconds).padStart(2, 0)
    let minutes = String(state.timer.minutes).padStart(2, 0)
    timeEl.textContent = `${minutes}:${seconds}`
    pauseBtn.textContent = 'Pause'
    pauseOverlay.style.display = 'none'
  }

  function stop(finish) {
    state.timer.started = false
    pauseBtn.textContent = 'Continue'

    if (!finish) {
      pauseOverlay.style.display = 'flex'
    }
  }

  function startGame() {
    interval = setInterval(start, 1000)
    start()
  }

  function pauseGame(finish) {
    clearInterval(interval)
    stop(finish)
  }

  pauseBtn.addEventListener('click', () => {
    if (state.timer.started) {
      pauseGame()
    } else {
      startGame()
    }
  })

  timer.pauseGame = pauseGame
  timer.startGame = startGame
}

export default timer
