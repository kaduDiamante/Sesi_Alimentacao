const currentDate = document.getElementById('date-input');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

var dias = {}

const formatDate = (date) => {
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
};

function getUltimaSegundaFeira() {
    const hoje = new Date();
    const diaDaSemana = hoje.getDay();
    const diasParaRetroceder = diaDaSemana === 0 ? 6 : diaDaSemana - 1;
    hoje.setDate(hoje.getDate() - diasParaRetroceder);

    let first_day = new Date(hoje)

    dias[formatDate(hoje)] = [null, null, null]
    dias[formatDate(new Date(first_day.setDate(first_day.getDate() + 1)))] = [null, null, null]
    dias[formatDate(new Date(first_day.setDate(first_day.getDate() + 1)))] = [null, null, null]
    dias[formatDate(new Date(first_day.setDate(first_day.getDate() + 1)))] = [null, null, null]
    dias[formatDate(new Date(first_day.setDate(first_day.getDate() + 1)))] = [null, null, null]
    
    console.log(dias)

    return hoje;
}

const updateDateInput = () => {
    currentDate.value = formatDate(getUltimaSegundaFeira());
};

const convertToDateObject = (dateStr) => {
    const [dia, mes, ano] = dateStr.split('/').map(num => parseInt(num, 10));
    return new Date(ano, mes - 1, dia);
};

function dic_save() {
    check_cafe = document.getElementById('check_cafe').checked
    check_almoco = document.getElementById('check_almoco').checked
    check_lanche = document.getElementById('check_lanche').checked

    dias[checkDay][0] = check_cafe
    dias[checkDay][1] = check_almoco
    dias[checkDay][2] = check_lanche
}

prevDayBtn.addEventListener('click', () => {
    checkDay = document.getElementById('date-input').value
    
    let chaves = Object.keys(dias)
    let dia = parseInt(chaves[0][0]+chaves[0][1])

    const current = convertToDateObject(currentDate.value);
    console.log('Dia atual:', checkDay)
    console.log('Dia final:', dia)

    current.setDate(current.getDate() - 1)
    console.log('Próximo dia:', current.getDate())

    if (current.getDate() < dia){
        dic_save()
        window.alert('O DIA ANTERIOR FOI NA SEMANA PASSADA')
        
    } else {
        dic_save()
        currentDate.value = formatDate(current); 
    }
    console.log(dias)
});

nextDayBtn.addEventListener('click', () => {
    checkDay = document.getElementById('date-input').value
    
    let chaves = Object.keys(dias)
    let dia = parseInt(chaves[4][0]+chaves[4][1])

    const current = convertToDateObject(currentDate.value);
    console.log('Dia atual:', checkDay)
    console.log('Dia final:', dia)

    current.setDate(current.getDate() + 1)
    console.log('Próximo dia:', current.getDate())

    if (current.getDate() > dia){
        dic_save()
        window.alert('O PRÓXIMO DIA SERA NA PRÓXIMA SEMANA')
        
    } else {
        dic_save()
        currentDate.value = formatDate(current); 
    }
    console.log(dias)
});

updateDateInput();

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('expandable-image');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');
    
    image.addEventListener('click', () => {
        overlay.style.display = 'flex';
        const clone = image.cloneNode(true);
        overlay.innerHTML = '';
        overlay.appendChild(clone);
        overlay.appendChild(closeButton); 
        clone.style.maxWidth = '100%';
        clone.style.maxHeight = '100%';
    });

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlay.innerHTML = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            overlay.innerHTML = '';
        }
    });
});

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// DESMARCAR OS CHECKS - BOXS //

document.getElementById('prev-day').addEventListener('click', clearAllCheckboxes);
document.getElementById('next-day').addEventListener('click', clearAllCheckboxes);

function clearAllCheckboxes() {
    const checkboxes = document.querySelectorAll('.clearCheckbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function Refeicoes_alunos_botaoembaixo(){
    let chaves = Object.keys(dias)

    if (Object.values(dias).some(array => array.includes(null))){
        window.alert('ALGUM DIA NÃO FOI RESPONDIDO, POR VAFOR RESPONDA DE NOVO OS CAMPOS CORRETAMENTE')
    } else {
        axios.post('/refeicaoAgendada', {
            id_usuario: '3',
            refeicoes: [
                {'data': chaves[0], 'cafe_manha': dias[chaves[0]][0], 'almoco': dias[chaves[0]][1], 'cafe_tarde': dias[chaves[0]][2]},
                {'data': chaves[1], 'cafe_manha': dias[chaves[1]][0], 'almoco': dias[chaves[1]][1], 'cafe_tarde': dias[chaves[1]][2]},
                {'data': chaves[2], 'cafe_manha': dias[chaves[2]][0], 'almoco': dias[chaves[2]][1], 'cafe_tarde': dias[chaves[2]][2]},
                {'data': chaves[3], 'cafe_manha': dias[chaves[3]][0], 'almoco': dias[chaves[3]][1], 'cafe_tarde': dias[chaves[3]][2]},
                {'data': chaves[4], 'cafe_manha': dias[chaves[4]][0], 'almoco': dias[chaves[4]][1], 'cafe_tarde': dias[chaves[4]][2]}
            ]
        })
        .then(function(response) {
            window.alert('As informações foram enviadas com SUCESSO')
            window.location.href = "/Dashboard_Aluno"
        })
        .catch(function(error){
            console.log('Erro:', error)
        })
    }


    
}