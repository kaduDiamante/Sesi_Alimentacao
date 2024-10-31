const quadrados = Array.from(document.querySelectorAll('.choiseDiv'))

quadrados.forEach(div => {
    div.addEventListener("click", () => {
        div.classList.toggle("Vermelho");
        div.classList.toggle("Verde");
    })
})

function getPrimeiroDiaDaSemana(inputValue) {
    const [ano, semana] = inputValue.split('-W'); 
    const dia = new Date(ano, 0, (semana - 1) * 7 + 1);
    const diaSemana = dia.getDay();
    const segundaFeira = new Date(dia.setDate(dia.getDate() - (diaSemana === 0 ? 6 : diaSemana - 1)));
    
    return segundaFeira.toISOString().split('T')[0]; 
}

document.getElementById('Submit_Set_Agenda').addEventListener('click', function(event) {
    event.preventDefault(); 
    var Segunda = {}
    var Terca = {}
    var Quarta = {}
    var Quinta = {}
    var Sexta = {}
    
    const inputSemana = document.getElementById('input_week').value;
    Segunda = getPrimeiroDiaDaSemana(inputSemana);
    const [SegundaAno, SegundaMes, SegundaDia] = String(Segunda).split("-")
    Segunda = `${SegundaDia}/${SegundaMes}/${SegundaAno}`

    teste = getPrimeiroDiaDaSemana(inputSemana)
    const resultado = new Date(teste)
    
    resultado.setDate(resultado.getDate() + 1)
    Terca = (resultado.toISOString().split('T')[0])
    const [TercaAno, TercaMes, TercaDia] = String(Terca).split('-')
    Terca = `${TercaDia}/${TercaMes}/${TercaAno}`

    resultado.setDate(resultado.getDate() + 1)
    Quarta = (resultado.toISOString().split('T')[0])
    const [QuartaAno, QuartaMes, QuartaDia] = String(Quarta).split('-')
    Quarta = `${QuartaDia}/${QuartaMes}/${QuartaAno}`

    resultado.setDate(resultado.getDate() + 1)
    Quinta = (resultado.toISOString().split('T')[0])
    const [QuintaAno, QuintaMes, QuintaDia] = String(Quinta).split('-')
    Quinta = `${QuintaDia}/${QuintaMes}/${QuintaAno}`

    resultado.setDate(resultado.getDate() + 1)
    Sexta = (resultado.toISOString().split('T')[0])
    const [SextaAno, SextaMes, SextaDia] = String(Sexta).split('-')
    Sexta = `${SextaDia}/${SextaMes}/${SextaAno}`

    document.getElementById('segunda').textContent = Segunda
    document.getElementById('terca').textContent = Terca
    document.getElementById('quarta').textContent = Quarta
    document.getElementById('quinta').textContent = Quinta
    document.getElementById('sexta').textContent = Sexta
});