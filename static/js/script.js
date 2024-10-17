const { default: axios, Axios } = require("axios");

const dateInput = document.getElementById('date-input');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');

document.getElementById("enviar").addEventListener('click', function(){
    console.log('chamou')
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


function Desperdicio_submit_btn(){
    window.alert('Os valores do desperdício foram enviados com SUCESSO')
}

function Perfil_nutri_FinalButton(){
    if (confirm('Deseja SAIR?') == true){
        window.location.href = "/"
    }
}

function Perfil_aluno_FinalButton(){
    if (confirm('Deseja SAIR?') == true){
        window.location.href = "/"
    }
}

function Refeicoes_alunos_botaoembaixo(){
    window.alert('As informações foram enviadas com SUCESSO')
    window.location.href = "/Dashboard_Aluno"
}

var imageSource = {}

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

function Set_cardapio_final_button(){
    axios.post('/cardapio',{
        imgSource: imageSource
    })
    .then(response => {
        console.log(response.data)
        alert(response.data.mensagem)
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error.response)
    })
}

function Log_In_Button(){
    const Set_cadastro = document.getElementById('cadastro').value
    console.log(Set_cadastro)
    if (Set_cadastro){
        if (Set_cadastro == 'aluno' || Set_cadastro == 'Aluno'){
            window.location.href = "/Dashboard_Aluno"
        } else if (Set_cadastro == 'Nutricionista' || Set_cadastro == 'nutricionista'){
            window.location.href = "/Dashboard"
        }
    } else {
        window.alert('Insira valores')
    }
}

//  Atualizar o campo de data //

let currentDate = new Date();

const formatDate = (date) =>`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const updateDateInput = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    dateInput.value = formatDate(currentDate);
    prevDayBtn.disabled = currentDate.getDate() === 1;
    nextDayBtn.disabled = currentDate.getDate() === daysInMonth;
};

prevDayBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateInput();
});

nextDayBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDateInput();
});

updateDateInput();

// FIM DO CAMPO DE DATA //

// DAR ZOOM NA IMAGEM DO CARDÁPIO //

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

// ------------------------------------ //

// DESMARCAR OS CHECKS - BOXS //

document.getElementById('prev-day').addEventListener('click', clearAllCheckboxes);
document.getElementById('next-day').addEventListener('click', clearAllCheckboxes);

function clearAllCheckboxes() {
    const checkboxes = document.querySelectorAll('.clearCheckbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

// ------------------------------------ //