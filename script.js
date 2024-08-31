document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const room = document.getElementById('room').value;

        if (name === '' || email === '' || checkin === '' || checkout === '' || room === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Example of handling form submission (you can replace this with actual form submission logic)
        alert(`Booking confirmed for ${name} (${email}) in a ${room}. Check-in: ${checkin}, Check-out: ${checkout}`);
        form.reset();
    });
});
