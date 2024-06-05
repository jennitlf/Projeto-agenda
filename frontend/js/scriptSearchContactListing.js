const buttonSearch = document.getElementById("nome-pesquisar")

buttonSearch.addEventListener ('input', function () {
    const valueSought = document.getElementById("nome-pesquisar").value.toLowerCase();

    console.log(Boolean(valueSought))

    function searchByName(list, nameSearched) {
        
        listWithItens = []

        if (valueSought == "" || valueSought == " ") {
            console.log('entrou aqui')
            return listContacts
        }

        for (let i = 0; i < list.length; i++) {
            if (list[i].name.toLowerCase().includes(nameSearched) ){
                listWithItens.push(list[i])
            }
        }
        
        return listWithItens;
    }
    
   
    // base list, with items returned in search
    const indexFound = searchByName(listContacts, valueSought);
    console.log(indexFound.length)
    
    table.innerHTML = ""

        //===================pagination=================================

        //current page, items per page, total pages
    const statePage = {
        page: 1,
        perPage: 6,
        totalPage: Math.ceil(indexFound.length / 6)
    }

        //script wraps list for pagination
    let page = statePage.page - 1
    let start = page * statePage.perPage
    let end = start + statePage.perPage

    //list prepared for pagination
    let listContactsPage1 = indexFound.slice(start, end)


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
            let listContactsPage1 = indexFound.slice(start, end)
            table.innerHTML = ""
            for(let dataContact of listContactsPage1) {
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
            let listContactsPage1 = indexFound.slice(start, end)
            table.innerHTML = ""
            for(let dataContact of listContactsPage1) {
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



   
    for(let dataContact of listContactsPage1) {
        mountContactList(dataContact)
    }





    
})


