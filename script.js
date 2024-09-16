const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Check email is valid
function isValidEmail(email) {
	//const re =
	//	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	const re = /^\S+@\S+\.\S+$/;
	return re.test(String(email).toLowerCase());
}

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// Show input success message
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check required fields
function checkRequired(inputArray) {
	inputArray.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required.`);
		} else {
			showSuccess(input);
		}
	});
}

// Get Field Name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function (e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
});
