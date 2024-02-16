const baseURL = "https://leydih.github.io/wdd130/";
const linksURL = "https://leydih.github.io/wdd230/chamber/data/companies.json";


// LOCAL JSON FOR TESTING: const url = 'members.json';

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const directory = document.querySelector('.directory');

    companies.forEach((company) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let icon = document.createElement('img');

        h2.textContent = company.name;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        website.href = company.website;
        website.textContent = 'Visit Website';
        icon.setAttribute('src', company.icon);


        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(icon);

        directory.appendChild(card);
    });
}

getCompanyData();

// switch button to change list view of directory

document.getElementById('switchViewBtn').addEventListener('click', function() {
    var directory = document.getElementById('directory');
    
    if (directory.classList.contains('grid')) {
        directory.classList.remove('grid');
        directory.classList.add('list');
        this.innerText = 'Switch to Grid View';
    } else {
        directory.classList.remove('list');
        directory.classList.add('grid');
        this.innerText = 'Switch to List View';
    }
  });

