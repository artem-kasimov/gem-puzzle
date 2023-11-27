const saveResult = result => {
  if (!localStorage.getItem('resultsList')) {
    const results = [result]
    localStorage.setItem('resultsList', JSON.stringify(results))
  } else {
    const results = JSON.parse(localStorage.getItem('resultsList'))
    results.push(result)
    results.sort((a, b) => a.moves - b.moves)
    results.sort((a, b) => {
      if (a.moves === b.moves) {
        return a.totalSeconds - b.totalSeconds
      }
    })

    if (results.length > 10) results.pop()
    localStorage.setItem('resultsList', JSON.stringify(results))
  }
}

export default saveResult
