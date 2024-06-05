const queryParams = new URLSearchParams(window.location.search);

const idParams = queryParams.get('id');
const nameParams = queryParams.get('name');
const typeParams = queryParams.get('type');
const numberParams = queryParams.get('number');


const divDetails = document.getElementById('informacoes')

const nameTitle = document.createElement('h2')
nameTitle.id = 'name'
nameTitle.textContent = nameParams
divDetails.appendChild(nameTitle)

const numberTitle = document.createElement('h2')
numberTitle.id = 'number'
const numberTitleIcon = document.createElement('i')
numberTitleIcon.className = 'fa-solid fa-phone'
numberTitle.appendChild(numberTitleIcon)
numberTitle.textContent = numberParams
divDetails.appendChild(numberTitle)

const typeTitle = document.createElement('h2')
typeTitle.id = 'type'
const typeTitleIcon = document.createElement('i')
typeTitleIcon.className = 'fa-solid fa-comments'
typeTitle.appendChild(typeTitleIcon)
typeTitle.textContent = typeParams
divDetails.appendChild(typeTitle)