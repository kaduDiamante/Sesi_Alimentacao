var imageSource=''

function getPrimeiroDiaDaSemana(inputValue) {
    const [ano, semana] = inputValue.split('-W'); 
    const dia = new Date(ano, 0, (semana - 1) * 7 + 1);
    const diaSemana = dia.getDay();
    const segundaFeira = new Date(dia.setDate(dia.getDate() - (diaSemana === 0 ? 6 : diaSemana - 1)));
    
    return segundaFeira.toISOString().split('T')[0]; 
}


function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageSource = e.target.result;
            console.log(imageSource)
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Imagem Selecionada">`;
        }
        reader.readAsDataURL(file);
    }
}

document.getElementById('Submit_Set_Cardapio').addEventListener('click', function(event) {
    event.preventDefault(); 
    var primeiroDia = {}
    var segundoDia = {}
    
    const inputSemana = document.getElementById('input_week').value;
    primeiroDia = getPrimeiroDiaDaSemana(inputSemana);
    console.log(primeiroDia)

    const resultado = new Date(primeiroDia)
    resultado.setDate(resultado.getDate() + 4)
    segundoDia = (resultado.toISOString().split('T')[0])
    console.log(segundoDia)

    const imagePreview = document.getElementById('arquivo');
    const file = imagePreview.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('primeiroDia', primeiroDia);
    formData.append('segundoDia', segundoDia);

    axios.post('/set_cardapio',formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        console.log(response.data)
        window.alert("Cardápio enviado com SUCESSO")
        window.location.href = "/Dashboard"
    })
    .catch(error => {
        console.log(error)  
    })
});
