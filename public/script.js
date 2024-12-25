const form = document.getElementById('notify-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Notify the user
    alert(`Thanks for signing up, ${email}!`);

    // Reset the form
    form.reset();
});
