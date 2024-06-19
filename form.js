// Prevent form submission when the registration form is submitted
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values from form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventDate = document.getElementById('eventDate').value.trim();
    const tickets = document.getElementById('tickets').value.trim();

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(202[4-9]|20[3-9][0-9]|[4-9][0-9]{3})$/;

    // Validate name
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name (2-30 characters, only letters and spaces).');
        return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number in the format (123) 456-7890.');
        return;
    }

    // Validate event date
    if (!dateRegex.test(eventDate)) {
        alert('Please enter a valid date in MM/DD/YYYY format.');
        return;
    }

    // Check if the event year is 2024 or later
    const year = parseInt(eventDate.split('/')[2]);
    if (year < 2024) {
        alert('Please enter a year of 2024 or later.');
        return;
    }

    // Validate ticket quantity
    if (isNaN(tickets) || tickets < 1 || tickets > 10) {
        alert('Please enter a valid number of tickets (between 1 and 10).');
        return;
    }

    // If all validations pass, you can proceed with form submission
    alert('Form submitted successfully!');
});
