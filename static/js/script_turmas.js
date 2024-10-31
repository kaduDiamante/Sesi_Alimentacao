const diaSelect = document.getElementById('dia');
const refeicoesDiv = document.getElementById('refeicoes');

diaSelect.addEventListener('change', function() {
    const diasSelecionados = Array.from(diaSelect.selectedOptions).map(option => option.value);
    refeicoesDiv.style.display = diasSelecionados.length > 0 ? 'block' : 'none';
});

function registrarRefeicao() {
    const turma = document.getElementById('turma');
    const diasSelecionados = Array.from(diaSelect.selectedOptions).map(option => option.value);
    const refeicoes = Array.from(document.querySelectorAll('#refeicoes input:checked')).map(input => input.value);
    console.log(turma.options)

    for (var i = 0; i < turma.length; i++) {
        if (turma[i].selected) {
            console.log(turma[i].value);
        }
    }

    if (!turma || diasSelecionados.length === 0 || refeicoes.length === 0) {
        alert("Por favor, selecione uma turma, um ou mais dias, e pelo menos uma refeição.");
        return;
    }

    alert(`Refeições registradas para ${turma} nos dias ${diasSelecionados.join(', ')}: ${refeicoes.join(', ')}`);
    
    document.getElementById('turma').value = '';
    Array.from(diaSelect.options).forEach(option => option.selected = false);
    refeicoesDiv.style.display = 'none';
    document.querySelectorAll('#refeicoes input').forEach(input => input.checked = false);
    
    window.history.back();
}
