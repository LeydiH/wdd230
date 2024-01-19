// Display current date
document.getElementById('date').innerText = new Date().toDateString();

// Display copyright year and last modification date
document.getElementById('footerText').innerText = `Copyright ${new Date().getFullYear()} The Mountain Chamber - WDD 230 Project - Leydi Hernandez - Last Modified: ${document.lastModified}`;

// Toggle the navigation menu
document.getElementById('menuBtn').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Display banner on Mondays and Tuesdays
let currentDate = new Date();
let currentDay = currentDate.getDay(); // getDay() returns a number between 0 (Sunday) and 6 (Saturday)

if (currentDay === 1 || currentDay === 2) { // 1 is Monday, 2 is Tuesday
    document.getElementById('banner').style.display = "block"; // display banner
} else {
    document.getElementById('banner').style.display = "none"; // hide banner
}
