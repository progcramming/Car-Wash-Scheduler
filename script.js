document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const confirmation = document.getElementById('confirmation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      alert('Your appointment has been successfully booked!')
      confirmation.classList.remove('hidden');
      setTimeout(() => {
        confirmation.classList.add('hidden');
        form.reset();
      }, 3000); // Hide confirmation after 3 seconds
    });
  });
  