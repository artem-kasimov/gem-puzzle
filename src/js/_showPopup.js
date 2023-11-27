import closePopup from './_closePopup'
import saveResult from './_saveResult'
import state from './_state'
import shuffleAndRestart from './_shuffleAndRestart'

const showPopup = type => {
  const popup = document.querySelector('.popup')
  const overlay = document.querySelector('.overlay')
  const inner = document.querySelector('.popup-inner')
  const btn = document.querySelector('.popup button')

  const min = String(state.timer.minutes).padStart(2, 0)
  const sec = String(state.timer.seconds).padStart(2, 0)
  const result = {
    time: `${min}:${sec}`,
    moves: state.moves,
    totalSeconds: state.timer.time,
  }

  if (type === 'finish') {
    inner.textContent = `Hooray! You solved the puzzle in ${result.time} and ${result.moves} moves!`
    saveResult(result)
    btn.addEventListener('click', shuffleAndRestart.handler, { once: true })
  }

  if (type === 'results') {
    const results = JSON.parse(localStorage.getItem('resultsList'))
    if (results) {
      const ul = document.createElement('ul')
      ul.style.listStyle = 'none'
      for (let i = 0; i < results.length; i++) {
        const li = document.createElement('li')
        li.textContent = `${i + 1}. ${results[i].time} and ${
          results[i].moves
        } moves`
        ul.appendChild(li)
      }
      inner.appendChild(ul)
    } else {
      inner.textContent = 'No results to show.'
    }
  }

  if (type === 'greeting') {
    inner.innerHTML =
      'Привет! Есть возможность быстро решить головоломку, чтобы тратить меньше времени на проверку:) <br> Если хочешь ей воспользоваться - открой консоль и введи команду <code>setNumOfMoves(n)</code>, где вместо <code>n</code> напиши число ходов, которое сделает компьютер, "замешивая" числа. После чего нажми на "Shuffle and restart". Если хочешь отменить эту команду и вернуть исходное состояние - перезагрузи страницу'
  }

  popup.classList.add('visible')
  overlay.style.display = 'block'
  document.body.style.overflow = 'hidden'

  btn.addEventListener('click', closePopup)
}

export default showPopup
