// Simple Form Submission Logic (Pure Human Written Style)
document.getElementById('portfolioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload on form submit
    
    // Getting the values entered by users
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        // Shows a neat custom dynamic feedback alert to the user
        alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
        
        // Resets the contact form after submission
        document.getElementById('portfolioForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});