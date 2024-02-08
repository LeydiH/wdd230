const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // For testing
    displayProphets(data.prophets);
  }
  
  getProphetData();


// Function to display the prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create the elements
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthdate = document.createElement('h3');
    let birthplace = document.createElement('h3');
    let portrait = document.createElement('img');

    // Set the text content and attributes
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `${prophet.birthdate}`;
    birthplace.textContent = `${prophet.birthplace}`;
  

    // Set the attributes for the portrait
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the elements to the card
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Append the card to the cards element
    cards.appendChild(card);
  });
};