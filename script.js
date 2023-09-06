alert("Welcome to Track Your Money!");


document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signInButton');
    signInButton.addEventListener('click', signIn);
});

function signIn() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    console.log('Email:', emailInput);
    console.log('Password:', passwordInput);

    if (emailInput === 'user@example.com' && passwordInput === 'password123') {
        alert('Login successful!'); 
    } else {
        alert('Invalid email or password. Please try again.');
    }
}