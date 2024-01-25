
const navElement = document.querySelector('#nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	navElement.classList.toggle('hide');
	hambutton.classList.toggle('show');
});

console.log(document.lastModified)
document.querySelector('#lastModified').innerHTML = document.lastModified;
document.addEventListener('DOMContentLoaded', function () {
	const modeToggleBtn = document.getElementById('modeToggleBtn');
	const body = document.body;

	modeToggleBtn.addEventListener('click', function () {
		body.classList.toggle('dark-mode');
	});
});

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== null) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit to our site.`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
