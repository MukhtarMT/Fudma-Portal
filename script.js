//VARIABLE DECLARATION
const fullname = document.querySelector('.fullname');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.pass');
const email2 = document.querySelector('.email2');
const password2 = document.querySelector('.pass2');
const phone = document.querySelector('.phone');
const signupBtn = document.querySelector('.signupBtn');

//FORM VALIDATION FUNCION
function validateForm() {
	if (
		email.value.length === 0 ||
		!email.value.includes('@') ||
		!email.value.includes('.')
	) {
		email.style.border = ' 2px solid red';
		return alert('Invalid email');
	} else {
		email.style.border = ' 2px solid green';
	}

	if (fullname.value.length === 0) {
		fullname.style.border = ' 2px solid red';
		return alert('fullname cannot be empty');
	} else {
		fullname.style.border = ' 2px solid green';
	}

	if (username.value.length === 0) {
		username.style.border = ' 2px solid red';
		return alert('username cannot be empty');
	} else {
		username.style.border = ' 2px solid green';
	}

	if (phone.value.length === 0) {
		phone.style.border = ' 2px solid red';
		return alert('phone cannot be empty');
	} else {
		phone.style.border = ' 2px solid green';
	}
	if (password.value.length < 6) {
		password.style.border = ' 2px solid red';
		return alert("password can't be less than 6");
	} else {
		password.style.border = ' 2px solid green';
	}
	alert('Registration successful. Kindly proceed to login.');
	window.location.href = 'login.html';
}

signupBtn.addEventListener('click', validateForm);
