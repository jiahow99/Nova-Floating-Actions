import Tool from './pages/Tool'

Nova.booting((app, store) => {
	Nova.inertia('FloatingActions', Tool)

	// Load
	window.onload = () => {
		console.log('Floating action loaded')
		initFloatingAction()
	}
})

function initFloatingAction() {
	// Only make floating in details page
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (!isDetailPage()) return
			
			let action_header = document.querySelector('div[resource]')
			if (!action_header) return

			const wrapper = action_header.parentElement.parentElement.parentElement
			if (wrapper.classList.contains('action-sticky')) return

			// Add style
			wrapper.style.position = 'sticky'
			wrapper.style.top = '0'
			wrapper.classList.add('action-sticky')

			// Change bg color on scroll
			window.addEventListener('scroll', () => changeBackground(wrapper))
		})
	})
	observer.observe(document.body, { childList: true, subtree: true })
}

function isDetailPage() {
	const url = window.location.href
	const regex = /\/resources\/[^\/]+\/\d+$/
	return regex.test(url)
}

function changeBackground(wrapper) {
	const rect = wrapper.getBoundingClientRect()
	if (rect.bottom > 0 && rect.top < document.documentElement.clientHeight) {
		wrapper.classList.add('bg-gray-800', 'py-4')
	}
}
