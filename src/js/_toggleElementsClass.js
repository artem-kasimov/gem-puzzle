const toggleElementsClass = (elements, element, className) => {
  elements.forEach(elem => elem.classList.remove(className))
  element.classList.add(className)
}

export default toggleElementsClass
