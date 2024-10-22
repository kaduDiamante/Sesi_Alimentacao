function getPrimeiroDiaDaSemana(inputValue) {
    const [ano, semana] = inputValue.split('-W'); 
    const dia = new Date(ano, 0, (semana - 1) * 7 + 1);
    const diaSemana = dia.getDay();
    const segundaFeira = new Date(dia.setDate(dia.getDate() - (diaSemana === 0 ? 6 : diaSemana - 1)));
    
    return segundaFeira.toISOString().split('T')[0]; 
}

document.getElementById('submit_date_button').addEventListener('click', function(event) {
    event.preventDefault(); 
    var primeiroDia = {}
    var segundoDia = {}
    var codigoMae = {}
    
    const inputSemana = document.getElementById('input_week').value;
    primeiroDia = getPrimeiroDiaDaSemana(inputSemana);
    console.log(primeiroDia)

    const resultado = new Date(primeiroDia)
    resultado.setDate(resultado.getDate() + 4)
    segundoDia = (resultado.toISOString().split('T')[0])
    console.log(segundoDia)

    axios.post('/Set_agenda', {
        data_inicial: primeiroDia,
        data_final: segundoDia
    })
    .then(function(response) {
        codigoMae = response.data
        
        let new_img = document.createElement('img')
        new_img.src = (`data:image/jpeg;base64,${codigoMae}`)
        new_img.alt = 'Imagem do Cardápio'
        new_img.style = 'style_new_img'
        
        let div_container = document.getElementById('container')
        
        div_container.innerHTML = ''
        div_container.appendChild(new_img)
    })
    .catch(function(error) {
        console.error('Erro ao buscar imagens:', error);
    });
});