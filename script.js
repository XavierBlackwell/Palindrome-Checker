document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (input.trim() === '') {
        alert('Please input a value');
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the input is a palindrome
    const isPalindrome = sanitizedInput === sanitizedInput.split('').reverse().join('');

    // Set the result text
    if (isPalindrome) {
        resultElement.textContent = `${input} is a palindrome`;
    } else {
        resultElement.textContent = `${input} is not a palindrome`;
    }
});
