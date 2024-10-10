export function loadMenu() {

    const content = document.getElementById('content');

    content.innerHTML = '';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu')

    const item1 = document.createElement('div');
    item1.classList.add('item');

    const pizzaName1 = document.createElement('div')
    pizzaName1.classList.add('primary_text')
    pizzaName1.textContent = 'Peperoni'

    const pizzaPrice1 = document.createElement('div');
    pizzaPrice1.classList.add('secondary_text');
    pizzaPrice1.textContent = '$2.49'

    item1.appendChild(pizzaName1)
    item1.appendChild(pizzaPrice1)

    menuDiv.appendChild(item1)

    // const descriptionDiv = document.createElement('div');
    // descriptionDiv.classList.add('description');

    // const primaryText = document.createElement('p');
    // primaryText.classList.add('primary_text');
    // primaryText.textContent = 'Modern Pizza'

    // const secondaryText = document.createElement('p');
    // secondaryText.classList.add('secondary_text');
    // secondaryText.textContent = 'Italian';

    // descriptionDiv.appendChild(primaryText)
    // descriptionDiv.appendChild(secondaryText)

    

    content.appendChild(menuDiv)
}
