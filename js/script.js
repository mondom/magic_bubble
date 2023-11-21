const input = document.querySelector('.question')
const error = document.querySelector('.error')
const answer = document.querySelector('.answer')
const bubble = document.querySelector('.big-bubble')

let typeOfAnswers = [
	'Tak!',
	'Nie!',
	'Całkiem prawdopodobne!',
	'Oczywiście, że nie!',
	'Oczywiście, że tak!',
	'Bądź dobrej myśli...',
	'Jest na to spora szansa',
	'Nie żartuj!',
	'Nie pytaj nawet o takie rzeczy...',
	'Całkiem możliwe!',
]

const bubbleMove = () => {
	bubble.classList.add('big-bubble-action')
	setTimeout(checkInput, 2500)
	answer.textContent = ''
	
}

const drawAnswers = () => {
	const number = Math.floor(Math.random() * typeOfAnswers.length)
	answer.textContent = typeOfAnswers[number]
}

const checkInput = () => {
	const pattern = /\b(czy|kiedy|co|dlaczego|czemu|po co|jak|skąd|gdzie)\b/gi;

	if (input.value.slice(-1) === '?' && pattern.test(input.value)) {
		error.classList.remove('show-error')
		drawAnswers()
		input.value = ''
	} else if (pattern.test(input.value) && input.value.slice(-1) !== '?') {
		error.textContent = 'Dodaj znak zapytania na końcu!'
		error.classList.add('show-error')
	} else if (input.value === '') {
		error.textContent = 'Wprowadź jakieś pytanie.'
		error.classList.add('show-error')
	} else {
		error.textContent = 'Dodaj słowo pytające na początku...'
		error.classList.add('show-error')
	}
	bubble.classList.remove('big-bubble-action')
	
}

bubble.addEventListener('click', bubbleMove)
