document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to a server or an email service
    // For now, we'll just display a thank you message
    document.getElementById('response').innerText = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear the form
    this.reset();
});
``