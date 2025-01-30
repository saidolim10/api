let cards = document.querySelector('.cards');
let body = document.querySelector('body');

// Dark/Light Mode toggle button
let toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark/Light Mode';
toggleButton.style.position = 'absolute';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = 'cyan';
toggleButton.style.border = 'none';
toggleButton.style.color = 'black';
toggleButton.style.cursor = 'pointer';
toggleButton.style.fontSize = '16px';

body.append(toggleButton);

// Set initial dark mode state
let isDarkMode = true;

function applyDarkMode() {
    body.style.backgroundColor = '#1F242D';
    body.style.color = 'white';
    cards.style.backgroundColor = '#2C333A';  // Dark background for the card container
}

function applyLightMode() {
    body.style.backgroundColor = '#FFFFFF';
    body.style.color = 'black';
    cards.style.backgroundColor = '#F4F4F4';  // Light background for the card container
}

function toggleMode() {
    if (isDarkMode) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
    isDarkMode = !isDarkMode;  // Toggle the mode
}

toggleButton.addEventListener('click', toggleMode);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            let img = document.createElement('img');
            let card = document.createElement('div');
            let h1 = document.createElement('h1');
            let p = document.createElement('h2');
            let h2 = document.createElement('h2');

            h1.textContent = 'Name: ' + e.name;
            p.textContent = 'Email: ' + e.email;
            h2.textContent = 'UserName: ' + e.username;
            img.setAttribute('src', "./images-modified.png");

            card.style.width = '450px';
            card.style.height = '370px';
            card.style.borderRadius = '30px';
            card.style.backgroundColor = 'black';
            card.style.display = 'flex';
            card.style.justifyContent = 'center';
            card.style.alignItems = 'center';
            card.style.flexDirection = 'column';
            card.style.gap = '30px';
            card.style.color = 'white';
            card.style.boxShadow = '5px 10px 10px orange';
            card.style.marginTop = '100px';
            card.style.paddingBottom = '40px';

            cards.append(card);
            card.append(img, h1, p, h2);
        });

        // Apply dark mode initially when the page loads
        applyDarkMode();
    });
