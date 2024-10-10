import pizzaImage from './images/pizza.png';

export function loadHome() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const primaryText = document.createElement('p');
    primaryText.classList.add('primary_text');
    primaryText.textContent = 'Modern Pizza'

    const secondaryText = document.createElement('p');
    secondaryText.classList.add('secondary_text');
    secondaryText.textContent = 'Italian';

    descriptionDiv.appendChild(primaryText)
    descriptionDiv.appendChild(secondaryText)

    const pizzaimg = document.createElement('img');
    pizzaimg.id = 'pizza';
    pizzaimg.src = pizzaImage
    pizzaimg.alt = 'pizza';

    content.appendChild(descriptionDiv)
    content.appendChild(pizzaimg)
}

    