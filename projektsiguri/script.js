const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const feedback = document.getElementById('strength-feedback');
const suggestions = document.getElementById('suggestions');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const result = evaluatePasswordStrength(password);

    // Update strength bar
    strengthBar.style.width = `${result.score * 20}%`;
    strengthBar.className = `strength-bar ${result.class}`;

    // Update feedback and suggestions
    feedback.textContent = `Strength: ${result.feedback}`;
    suggestions.textContent = result.suggestions.join(' ');
});

function evaluatePasswordStrength(password) {
    let score = 0;
    let suggestions = [];

    if (password.length >= 8) {
        score++;
    } else {
        suggestions.push('Use at least 8 characters.');
    }

    if (/[a-z]/.test(password)) {
        score++;
    } else {
        suggestions.push('Add lowercase letters.');
    }

    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        suggestions.push('Add uppercase letters.');
    }

    if (/[0-9]/.test(password)) {
        score++;
    } else {
        suggestions.push('Include numbers.');
    }

    if (/[@$!%*?&#]/.test(password)) {
        score++;
    } else {
        suggestions.push('Include special characters.');
    }

    let feedback = 'Weak';
    let strengthClass = 'weak';

    if (score >= 4) {
        feedback = 'Strong';
        strengthClass = 'strong';
    } else if (score >= 2) {
        feedback = 'Moderate';
        strengthClass = 'moderate';
    }

    return {
        score,
        feedback,
        class: strengthClass,
        suggestions
    };
}
