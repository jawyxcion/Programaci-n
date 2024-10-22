document.getElementById('next-btn').addEventListener('click', function (event) {
    // Evitar la redirección por defecto del botón
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const firstName = document.getElementById('firstName');
    const lastName1 = document.getElementById('lastName1');
    const lastName2 = document.getElementById('lastName2');
    const phoneNumber = document.getElementById('phoneNumber');
    const countryCode = document.getElementById('countryCode');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const termsAccepted = document.querySelector('input[type="checkbox"]').checked; // Verificar si se aceptaron los términos

    // Limpiar mensajes de error previos
    clearErrors();

    let isValid = true;

    // Validar si los campos están vacíos y agregar alertas en el placeholder
    if (!firstName.value) {
        showErrorInPlaceholder(firstName, 'Falta Nombre');
        isValid = false;
    }
    if (!lastName1.value) {
        showErrorInPlaceholder(lastName1, 'Falta Primer Apellido');
        isValid = false;
    }
    if (!lastName2.value) {
        showErrorInPlaceholder(lastName2, 'Falta Segundo Apellido');
        isValid = false;
    }
    if (!phoneNumber.value) {
        showErrorInPlaceholder(phoneNumber, 'Falta Número');
        isValid = false;
    }
    if (!email.value) {
        showErrorInPlaceholder(email, 'Falta Correo');
        isValid = false;
    }
    if (!password.value) {
        showErrorInPlaceholder(password, 'Falta Contraseña');
        isValid = false;
    }
    if (!confirmPassword.value) {
        showErrorInPlaceholder(confirmPassword, 'Falta Verificación');
        isValid = false;
    }

    // Validar que las contraseñas coincidan
    if (password.value !== confirmPassword.value) {
        showErrorInPlaceholder(confirmPassword, 'Contraseñas no coinciden');
        isValid = false;
    }

    // Si hay algún campo inválido, no continuar
    if (!isValid) return;

    // Validar contraseña con la función validatePassword
    if (!validatePassword(password.value)) {
        return;
    }

    // Verificar si se aceptaron los términos y condiciones
    if (!termsAccepted) {
        alert('Debes aceptar los términos y condiciones.');
        return;
    }

    // Si todos los campos son válidos, guardar los datos del usuario
    const userData = {
        firstName: firstName.value,
        lastName1: lastName1.value,
        lastName2: lastName2.value,
        phoneNumber:` ${countryCode.value}${phoneNumber.value}`, // Agregar el código de país al número
        email: email.value,
        password: password.value
    };

    // Guardar los datos en localStorage como cadena JSON
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirigir a la página de verificación
    window.location.href = 'verificacion.html';
});

// Función para validar la contraseña
function validatePassword(password) {
    const validationDiv = document.getElementById('passwordValidation');
    validationDiv.innerHTML = ''; // Limpiar mensajes previos

    // Requisitos de la contraseña
    const hasUpperCase = /[A-Z]/.test(password); // Contiene al menos una mayúscula
    const hasNumber = /[0-9]/.test(password); // Contiene al menos un número
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Contiene al menos un carácter especial
    const hasMinLength = password.length >= 5; // Tiene al menos 5 caracteres
    const hasMinLetters = password.replace(/[^A-Za-z]/g, '').length >= 5; // Tiene al menos 5 letras

    // Mensajes de error según lo que falte
    let message = '';
    if (!hasUpperCase) message += '<p>Debe contener al menos una mayúscula.</p>';
    if (!hasNumber) message += '<p>Debe contener al menos un número.</p>';
    if (!hasSpecialChar) message += '<p>Debe contener al menos un carácter especial.</p>';
    if (!hasMinLength) message += '<p>Debe tener al menos 5 caracteres.</p>';
    if (!hasMinLetters) message += '<p>Debe tener al menos 5 letras.</p>';

    // Mostrar mensajes de error
    if (message) {
        validationDiv.innerHTML = message;
        return false; // Si hay errores, devolver falso
    }

    validationDiv.innerHTML = '<p style="color:green;">La contraseña es válida.</p>'; // Si la contraseña es válida, mostrar mensaje
    return true;
}

// Función para mostrar un error dentro del placeholder del input
function showErrorInPlaceholder(input, message) {
    input.placeholder = message; // Cambiar el placeholder al mensaje de error
    input.style.borderColor = 'red'; // Cambiar el borde a rojo
    input.classList.add('error-placeholder'); // Agregar clase de error
}

// Función para limpiar todos los errores previos
function clearErrors() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.placeholder = '';  // Limpiar el placeholder
        input.style.borderColor = '';  // Eliminar el color de borde de error
        input.classList.remove('error-placeholder');  // Quitar la clase de error
    });

    // Limpiar mensajes de validación de contraseña
    const validationDiv = document.getElementById('passwordValidation');
    if (validationDiv) {
        validationDiv.innerHTML = '';
    }
}

// Funcionalidad para mostrar/ocultar la contraseña
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Cambia el tipo de input entre 'password' y 'text'
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Cambia el ícono de ojo a ojo tachado
    this.classList.toggle('fa-eye-slash');
});

// Funcionalidad para mostrar/ocultar la confirmación de contraseña
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function () {
    // Cambia el tipo de input entre 'password' y 'text'
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);

    // Cambia el ícono de ojo a ojo tachado
    this.classList.toggle('fa-eye-slash');
});