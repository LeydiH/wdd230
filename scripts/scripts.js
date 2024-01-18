// JavaScript for Hamburger Menu
document.addEventListener("DOMContentLoaded", function() {
    var hamburgerButton = document.getElementById('hamburger-button');
    var mainMenu = document.getElementById('menu'); // Assuming the main menu has this ID

    hamburgerButton.addEventListener('click', function() {
        mainMenu.classList.toggle('showMenu');
        hamburgerButton.textContent = hamburgerButton.textContent === 'X' ? '☰' : 'X';
    });
});

// JavaScript for Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function() {
    var darkModeButton = document.getElementById('dark-mode-button');
    var mainArea = document.querySelector('main'); // Target the main area

    darkModeButton.addEventListener('click', function() {
        mainArea.classList.toggle('dark-mode');
        // Update button text based on mode
        darkModeButton.textContent = mainArea.classList.contains('dark-mode') ? '⚙️ Light Mode' : '⚙️ Dark Mode';
    });
});
