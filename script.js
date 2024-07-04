// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value; 
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        // You can add a functionality to send form data to a server here.
        alert('Thank you for your message!');
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
  