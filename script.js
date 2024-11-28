// Toggle burger menu
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Toggles visibility of the menu
    if (menu.classList.contains('hidden')) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});


// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Alert the user
    alert('Thank you for contacting AD Investment Group. We will get back to you shortly.');

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
