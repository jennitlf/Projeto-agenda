const queryParamsEdit = new URLSearchParams(window.location.search);

const idEdit = queryParamsEdit.get('id');
const nameEdit = queryParamsEdit.get('name');
const typeEdit = queryParamsEdit.get('type');
const numberEdit = queryParamsEdit.get('number');
const addressEdit = queryParamsEdit.get('address');
const latEdit = parseFloat(queryParamsEdit.get('latitude'));
const longEdit = parseFloat(queryParamsEdit.get('longitude'));


//=============================map data================================

const addrassButton = document.getElementById("full-address")
addrassButton.disabled = true;

let map;
let marker;


    //google maps api: display map
map = new google.maps.Map(document.getElementById('container-address'), {
    center: {lat: latEdit, lng: longEdit},
    zoom: 16
  });

    //google maps api: display marker with permission to move it
marker = new google.maps.Marker({
    position: {lat: latEdit, lng: longEdit},
    map: map,
    draggable: true, // Allows the marker to be dragged
});

    //by moving the marker we will get latitude and longitude
google.maps.event.addListener(marker, 'dragend', function(event) {
    lat = this.getPosition().lat()
    long = this.getPosition().lng()
    
    const geocoder = new google.maps.Geocoder();

    //Geocoordinates api: we obtain the address using latitude and longitude
    geocoder.geocode({'location': event.latLng}, function(results, status){

        if(status === 'OK') {
            if (results[0]) {
                addressFull = results[0].formatted_address;
                addrassButton.value = results[0].formatted_address;
            } else {
                addrassButton.value = 'Endereço não encontrado';
                
            }
        } else {
            console.error('Erro ao obter o endereço: ' + status)
        }
})

});


const save = document.getElementById('form')

save.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("oi")
    const valueInputNameEdit = document.getElementById("input-nome").value;
    const valueInputTypeEdit = document.getElementById("input-tipo").value;
    const valueInputNumberEdit = document.getElementById("input-numero").value;
    let addressFullstring = addressEdit
    let latstring
    let longstring

    if (addressFull || lat || long ) {
        addressFullstring = addressFull.toString();
        latstring = lat.toString();
        longstring = long.toString()
    } else {
        let div = document.createElement('div');
            div.className = 'erro-validation';
            let msg = document.createElement('h5');
            msg.className = 'erro-validation-text';
            msg.textContent = 'Campo obrigatório';
            div.appendChild(msg);
            addrassButton.insertAdjacentElement('afterend', div)
    }

    const dataEditValue = {
        name: valueInputNameEdit,
        type: valueInputTypeEdit,
        number: valueInputNumberEdit,
        address: addressFullstring,
        latitude: latstring,
        longitude: longstring
    };

    const jsonDataEditValue = JSON.stringify(dataEditValue);

    clearErro()

    if(validateForm() && validateInput(valueInputNameEdit, valueInputTypeEdit, valueInputNumberEdit)) {
        fetch(`${api}/${idEdit}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonDataEditValue
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível salvar o contato");
            }
            window.alert("Alterações salvas.")
                //the return redirects to the contact details page updated with the changes
            return fetch(`${api}/${idEdit}`)
                    .then(response => response.json())
                    .then(data => {
                        window.location.href = `${windowDetails}?id=${data.id}&name=${data.name}&type=${data.type}&number=${data.number}&address=${data.address}&latitude=${data.latitude}&longitude=${data.longitude}`;
                    })
            .catch(error => {
                console.error('Erro ao obter dados:', error);
            });
        })
        .then(data => {
            console.log("dados do contato", data);
        })
        .catch(error => {
            console.error("Erro: ", error);
        });
    }
});


const nameInputValue = document.getElementById('input-nome').value = nameEdit
const typeInputValue = document.getElementById('input-tipo').value = typeEdit
const numberInputValue = document.getElementById('input-numero').value = numberEdit
addrassButton.value = addressEdit

const backToDetailsContact = document.getElementById('button-voltar').addEventListener('click', function () {

    fetch(`${api}/${idEdit}`)
        .then(response => response.json())
        .then(data => {
            //disable window.alert
            const originalAlert = window.alert;
            window.alert = function() {};
            window.location.href = `${windowDetails}?id=${data.id}&name=${data.name}&type=${data.type}&number=${data.number}&address=${data.address}&latitude=${data.latitude}&longitude=${data.longitude}`;
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
})


// validates empty fields
function validateForm () {
    let valid = true
    for (let field of save.querySelectorAll('.validateField')) {
        if (!field.value) {
            valid = false
            let div = document.createElement('div');
            div.className = 'erro-validation';
            let msg = document.createElement('h5');
            msg.className = 'erro-validation-text';
            msg.textContent = 'Campo obrigatório';
            div.appendChild(msg);
            field.insertAdjacentElement('afterend', div)
        }
    }
    return valid
}

// validates minimum number of characters
function validateInput (valueInputName, valueInputType, valueInputNumber) {
    let inputOk = true

    if (valueInputName.length < 3) {
        console.log(valueInputName)
        let divName = document.createElement('div');
        divName.className = 'erro-validation';
        let msgName = document.createElement('h5');
        msgName.textContent = 'Minimo 3 caractéres';
        divName.appendChild(msgName)
        InputName.insertAdjacentElement('afterend', divName)
        inputOk = false
    } 

    if (valueInputType.length < 5) {
        console.log(valueInputType)
        let divType = document.createElement('div');
        divType.className = 'erro-validation';
        let msgType = document.createElement('h5');
        msgType.textContent = 'Minimo 5 caractéres';
        divType.appendChild(msgType)
        InputType.insertAdjacentElement('afterend', divType)
        inputOk = false
    }

    if (valueInputNumber.length < 9) {
        console.log(valueInputNumber)
        let divNumber = document.createElement('div');
        divNumber.className = 'erro-validation';
        let msgNumber = document.createElement('h5');
        msgNumber.textContent = 'Minimo 9 caractéres';
        divNumber.appendChild(msgNumber)
        InputNumber.insertAdjacentElement('afterend', divNumber)
        inputOk = false
    }
   

    if (inputOk) {
        return true
    } else {
        return false
    }
}

// clears the display of errors
function clearErro(){

    for(let erroValidation of save.querySelectorAll('.erro-validation')){
        erroValidation.remove();
    }
}
