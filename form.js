document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventDate = document.getElementById('eventDate').value.trim();
    const tickets = document.getElementById('tickets').value.trim();

    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(202[4-9]|20[3-9][0-9]|[4-9][0-9]{3})$/;

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name (2-30 characters, only letters and spaces).');
        return;
    }


    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }


    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number in the format (123) 456-7890.');
        return;
