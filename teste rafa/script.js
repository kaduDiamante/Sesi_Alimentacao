document.getElementById('submitButton').addEventListener('click', function() {
    // Captura o arquivo inserido
    const fileInput = document.getElementById('customFileInput');
    console.log(fileInput)
    const file = fileInput.files[0];
    console.log(file)
    if (!file) {
        alert("Por favor, selecione uma imagem.");
        return;
    }

    // Cria um FormData para enviar a imagem
    const formData = new FormData();
    console.log(formData)
    formData.append('file', file);
    console.log(formData[0])

    // Envia a imagem para o servidor usando Axios
    axios.post('http://127.0.0.1:5000/disp', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function(response) {
        console.log('Sucesso!', response.data);
    })
    .catch(function(error) {
        console.error('Erro ao enviar a imagem:', error);
        alert('Falha no upload da imagem.');
    });
});
