const buttonEdit = document.getElementById('button-editar')

buttonEdit.addEventListener("click", function () {
    fetch(`${api}/${idParams}`)
        .then(response => response.json())
        .then(data => {
            window.location.href = `${windowEdit}?id=${data.id}&name=${data.name}&type=${data.type}&number=${data.number}&address=${data.address}&latitude=${data.latitude}&longitude=${data.longitude}`;
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
});

//x