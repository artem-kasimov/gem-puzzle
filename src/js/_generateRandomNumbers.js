const generateRandomNumbers = n => {
  let numbers = []

  while (numbers.length < n) {
    let random = Math.ceil(Math.random() * n)

    if (!numbers.includes(random)) {
      numbers.push(random)
    }
  }

  return numbers
}

export default generateRandomNumbers
