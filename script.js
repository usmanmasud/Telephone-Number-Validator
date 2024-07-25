const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div')
 
const validationFunction = () => {}



checkBtn.addEventListener('click', () => {
    if (!userInput.value) {
        alert("Please provide a phone number")
        result.innerText = ''
    } else {
        validationFunction()
    }
})


clearBtn.addEventListener('click', () => {
   result.innerText = ''
})