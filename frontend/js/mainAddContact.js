

//=============================map data================================

const addrassButton = document.getElementById("full-address")
addrassButton.disabled = true;

let map;
let marker;
let addressFull
let lat
let long


    //google maps api: display map
map = new google.maps.Map(document.getElementById('container-address'), {
    center: {lat: -3.114444, lng: -60.026583},
    zoom: 14
  });

    //google maps api: display marker with permission to move it
marker = new google.maps.Marker({
    position: { lat: -3.114444, lng: -60.026583 },
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

//==========================input image================================

const image = document.getElementById('input-add-foto')



//==========================form settings==============================

const save = document.getElementById('form')

const InputName = document.getElementById("input-nome");
const InputType = document.getElementById("input-tipo");
const InputNumber = document.getElementById("input-numero");


    //submit form

save.addEventListener('submit', function (event) {

    event.preventDefault();


    const valueInputName = InputName.value;
    const valueInputType = InputType.value;
    const valueInputNumber = InputNumber.value;
    let addressFullstring
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
    const data = {
        name: valueInputName,
        type: valueInputType,
        number: valueInputNumber,
        address: addressFullstring,
        latitude: latstring,
        longitude: longstring
    };

    const jsonData = JSON.stringify(data);

    clearErro()

    if(validateForm() && validateInput(valueInputName, valueInputType, valueInputNumber)) {
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível salvar o contato");
            }
            window.alert("Contato Salvo com sucesso!")
            return window.location.href = 'http://127.0.0.1:5500/frontend/contatos.html';
        })
        .then(data => {
            console.log("dados do contato", data);
        })
        .catch(error => {
            console.error("Erro: ", error);
        });
    }
});

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


