document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message submitted! Thank you for reaching out.');
    this.reset();
});