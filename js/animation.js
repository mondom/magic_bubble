const bubbling = () => {
	const bubble = document.createElement('div')
	bubble.classList.add('bubble')

	bubble.style.left = Math.random() * window.innerWidth + 'px'
	bubble.style.animationDuration = Math.random() * 25 + 4 + 's'

	document.body.append(bubble)

	setTimeout(() => {
		bubble.remove()
	}, 6000)
}

setInterval(bubbling, 60)