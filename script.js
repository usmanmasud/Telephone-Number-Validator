const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div')
 
const validationFunction = () => {   
    const numberPattern =  /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    if (numberPattern.test(userInput.value)) {
        result.innerText = `Valid US number: ${userInput.value}`
    } else {
        result.innerText = `Invalid US number: ${userInput.value}`
    }
}


checkBtn.addEventListener('click', () => {
    if (!userInput.value) {
        alert("Please provide a phone number")
        return
    } else {
        validationFunction()
    }
})


clearBtn.addEventListener('click', () => {
   result.innerText = ''
})