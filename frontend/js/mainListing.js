//===============getting contact list=============================
function doGet(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

const data = doGet(api);
const listContacts = JSON.parse(data);

const table = document.getElementsByTagName("tbody")[0]



//=============add dynamic elements to the table==================

function mountContactList(dataContact) {

    let name = dataContact.name
    let id = dataContact.id
    

    // second row of the table body
    const secondLine = document.createElement("tr")
    secondLine.className = "outras-linhas"
    table.appendChild(secondLine)

    // cell "one" in the second line, contains the contact's name
    const cellOne = document.createElement("td")
    cellOne.className = "celula-nomes"
    const cellOneText = document.createTextNode(name)
    cellOne.appendChild(cellOneText)
    secondLine.appendChild(cellOne)

    // cell "two" of the second line, contains contact details button 
    const cellTuo = document.createElement("td")
    cellTuo.className = "celula-botoes"
    const linkbuttonDetails = document.createElement("a")
    linkbuttonDetails.className = "link-details"
    cellTuo.appendChild(linkbuttonDetails)
    const buttondetails = document.createElement('button')
    const iconButtonDetails = document.createElement('i')
    iconButtonDetails.className = "fa-solid fa-list"
    buttondetails.appendChild(iconButtonDetails)
    const buttondetailsText = document.createTextNode("Detalhes")
    buttondetails.appendChild(buttondetailsText)
    buttondetails.id = `details-${id}`
    secondLine.appendChild(cellTuo)
    linkbuttonDetails.appendChild(buttondetails)

        // send parameters via url to access button details
    document.getElementById(`details-${id}`).addEventListener('click', function() {
           
        fetch(`${api}/${id}`)
            .then(response => response.json())
            .then(data => {
                window.location.href = `${windowDetails}?id=${data.id}&name=${data.name}&type=${data.type}&number=${data.number}&address=${data.address}&latitude=${data.latitude}&longitude=${data.longitude}`;
            })
            .catch(error => {
                console.error('Erro ao obter dados:', error);
            });
    });
}




//===================pagination=================================

    //current page, items per page, total pages
const statePage = {
    page: 1,
    perPage: 6,
    totalPage: Math.ceil(listContacts.length / 6)
}

    //script wraps list for pagination
let page = statePage.page - 1
let start = page * statePage.perPage
let end = start + statePage.perPage


let listContactsPage = listContacts.slice(start, end)


        //Back and go to next page controls
const controls = {
    next() {
        statePage.page++
        if (statePage.page > statePage.totalPage) {
            statePage.page = statePage.totalPage
        }
        let page = statePage.page - 1
        let start = page * statePage.perPage
        let end = start + statePage.perPage
        let listContactsPage = listContacts.slice(start, end)
        table.innerHTML = ""
        for(let dataContact of listContactsPage) {
            mountContactList(dataContact)
        }
        
    },

    back() {
        statePage.page--
        if (statePage.page < 1) {
                statePage.page = 1
        }
        let page = statePage.page - 1
        let start = page * statePage.perPage
        let end = start + statePage.perPage
        let listContactsPage = listContacts.slice(start, end)
        table.innerHTML = ""
        for(let dataContact of listContactsPage) {
            mountContactList(dataContact)
        }
        
    }
}

    //captures the element I want to add a next page and previous page event

    function get(Element){
        return document.getElementById(Element);
    }
        //I attribute this capture to variables
    const more = get("more")
    const less = get("less")

        //I add the event that calls the button control
    more.onclick = function () {
        controls.next()
    }
    less.onclick = function () {
        controls.back()
    }


//================main project=====================
function main() {

    for(let dataContact of listContactsPage) {
        mountContactList(dataContact)
    }

    
};

main();






