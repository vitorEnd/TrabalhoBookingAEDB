document.addEventListener('DOMContentLoaded', () => {   


 
    const loginForm = document.querySelector('#login-form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const googleButton = document.querySelector('#btn-google');
    const themeToggle = document.querySelector('#tema');
    const body = document.body;

    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        if (emailValue === '' || passwordValue === '') {
            alert('Por favor, preencha o e-mail e a senha.');
        } else {
            console.log('Email:', emailValue);
            console.log('Senha:', passwordValue);
            alert('Login enviado com sucesso!');
        }
    });

    
    googleButton.addEventListener('click', () => {
        alert('Não temos API do Google ainda');
    });

   
    function setTheme(dark) {
        if (dark) {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
            localStorage.setItem('tema', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙';
            localStorage.setItem('tema', 'light');
        }
    }

    
    const savedTheme = localStorage.getItem('tema');
    setTheme(savedTheme === 'dark');

   
    themeToggle.addEventListener('click', () => {
        setTheme(!body.classList.contains('dark-mode'));
    });
});