const wrapper = document.querySelector('.wrapper')

const bubbling = () => {
	const bubble = document.createElement('div')
	bubble.classList.add('bubble')

	const reducedWindow = window.innerWidth - 7

	bubble.style.left = Math.random() * reducedWindow + "px"
	bubble.style.animationDuration = Math.random() * 25 + 4 + 's'

	wrapper.append(bubble)

	setTimeout(() => {
		bubble.remove()
	}, 6000)
}

setInterval(bubbling, 60)