
const buttonDelete = document.getElementById('button-excluir')


function deleteItem(id) {
    fetch(`${api}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao deletar item');
        }
        window.alert("Contato excluído com sucesso")
        return window.location.href = windowList;
    })
    .then(data => {
        console.log('Item deletado:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}



buttonDelete.addEventListener('click', function() {
    if (confirm('tem certeza que deseja exluir esse contato?')) {
        deleteItem(idParams)
    }
});


