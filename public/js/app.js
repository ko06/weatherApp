console.log('lodaed')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log('testing')
  const location = search.value
debugger

  fetch('http://localhost:3003/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      debugger
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.temp
        messageTwo.textContent = data.address
      }
    })
  })
})