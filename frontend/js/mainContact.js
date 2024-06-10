const queryParams = new URLSearchParams(window.location.search);

const idParams = queryParams.get('id');
const nameParams = queryParams.get('name');
const typeParams = queryParams.get('type');
const numberParams = queryParams.get('number');
const address = queryParams.get('address')


const divDetails = document.getElementById('informacoes')


const nameTitle = document.createElement('h2')
nameTitle.id = 'name'
nameTitle.textContent = nameParams
divDetails.appendChild(nameTitle)

//div number
const divNumber = document.createElement('div')
divNumber.className = 'divs-details-NumberType'
divDetails.appendChild(divNumber)

const numberTitle = document.createElement('p')
numberTitle.id = 'number-title'
const numberTitleIcon = document.createElement('i')
numberTitleIcon.className = 'fa-solid fa-phone'
divNumber.appendChild(numberTitleIcon)
numberTitle.textContent = numberParams
divNumber.appendChild(numberTitle)


//div type
const divType = document.createElement('div')
divType.className = 'divs-details-NumberType'
divDetails.appendChild(divType)

const typeTitle = document.createElement('p')
typeTitle.id = 'type-title'
const typeTitleIcon = document.createElement('i')
typeTitleIcon.className = 'fa-solid fa-comments'
divType.appendChild(typeTitleIcon)
typeTitle.textContent = typeParams
divType.appendChild(typeTitle)


// div address
const divAddress = document.createElement('div')
divAddress.className = 'divs-details'
divDetails.appendChild(divAddress)

const addressTitle = document.createElement('p')
addressTitle.id = 'address-title'
const addressTitleIcon = document.createElement('i')
addressTitleIcon.className = 'fa-solid fa-location-dot'
divAddress.appendChild(addressTitleIcon)
addressTitle.textContent = address
divAddress.appendChild(addressTitle)