// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();

	let isValid = true

	let name = document.getElementById('name')
	let email = document.getElementById('email')
	let password = document.getElementById('password')

	document.querySelectorAll('.error-text').forEach(el => el.remove())

	const errorForm = (message, input) => {
		let errorEl = document.createElement('div')
		errorEl.className = 'error-text'
		errorEl.textContent = message
		errorEl.style.color = 'red'
		errorEl.style.fontSize = '15px'
		isValid = false

		input.parentElement.appendChild(errorEl)
		isValid = false
	}

	if (!name.value.trim()) errorForm('Введіть ім`я', name)

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm('Введіть вірний Email', email)

	if (password.value.trim().length < 6) errorForm("Недостатньо символів", password)

	if (isValid) {
		alert('Форма успішно відправлена')
		document.getElementById('form').reset()
	}
})