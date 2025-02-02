// Example of using SweetAlert to provide a flashy popup on page load
document.addEventListener('DOMContentLoaded', function () {
    Swal.fire({
        title: 'Welcome to Petrix!',
        text: 'The Pet That Grows With You. :)',
        icon: 'success',
        confirmButtonText: 'Get Started',
        background: '#FF5733', // Sunset Orange
        color: '#fff',
        confirmButtonColor: '#212121', // Dark Charcoal
    });
});
