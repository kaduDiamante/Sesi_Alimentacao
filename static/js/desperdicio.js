document.getElementById("enviar").addEventListener('click', function(){
    const desperdicio_2 = document.getElementById('segunda').value
    const desperdicio_3 = document.getElementById('terca').value
    const desperdicio_4 = document.getElementById('quarta').value
    const desperdicio_5 = document.getElementById('quinta').value
    const desperdicio_6 = document.getElementById('sexta').value
    axios.post('/desperdicio', {
        segunda: desperdicio_2,
        terca: desperdicio_3,
        quarta: desperdicio_4,
        quinta: desperdicio_5, 
        sexta: desperdicio_6,
        data: '25/01/2024'
    })
    .then(response => {
        console.log('teste pra ver se foi')
        console.log(response.data)
        alert(response.data.mensagem)
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error.response)
    })
    window.alert('Os valores do desperdício foram enviados com SUCESSO')
})