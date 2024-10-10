export function loadAbout() {
    const content = document.getElementById('content')

    content.innerHTML = ''

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('content')

    const phoneP = document.createElement('p');
    phoneP.classList.add('primary_text')
    phoneP.textContent = 'Contact: +999_XXX_XXX'

    aboutDiv.appendChild(phoneP);

    content.appendChild(aboutDiv)
}