const INPUT = document.querySelector('input')
const BUTTON = document.querySelector('button')
const LIST = document.querySelector('ul')

const handleOnClickButton = () => {
  const INPUT_VALUE = INPUT.value
  const LIST_ITEM = document.createElement('li')
  LIST_ITEM.textContent = INPUT_VALUE
  LIST.appendChild(LIST_ITEM)
  INPUT.value = ''
}

BUTTON.addEventListener('click', handleOnClickButton)