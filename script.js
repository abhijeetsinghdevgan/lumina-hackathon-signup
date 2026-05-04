document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');

    // Password strength meter
    passwordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;

        strengthBar.className = 'strength-bar';
        
        if (password.length > 0) {
            if (strength <= 1) {
                strengthBar.classList.add('strength-weak');
            } else if (strength <= 2) {
                strengthBar.classList.add('strength-medium');
            } else {
                strengthBar.classList.add('strength-strong');
            }
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation reset
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => input.parentElement.classList.remove('error'));

        let isValid = true;

        inputs.forEach(input => {
            if (input.required && !input.value) {
                input.parentElement.classList.add('error');
                isValid = false;
            }
        });

        if (isValid) {
            // Simulate API call
            submitBtn.classList.add('loading');
            
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                form.reset();
                strengthBar.className = 'strength-bar';
                successMessage.classList.add('active');
            }, 1500);
        }
    });
});
