const dateInput = document.getElementById('date-input');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');

function Set_cardapio_final_button(){
    window.alert('O Cardápio foi enviado com SUCESSO')
}

function Desperdicio_submit_btn(){
    window.alert('Os valores do desperdício foram enviados com SUCESSO')
}

function Perfil_nutri_FinalButton(){
    if (confirm('Deseja SAIR?') == true){
        window.location.href = "/pag_login.html"
    }
}

function Perfil_aluno_FinalButton(){
    if (confirm('Deseja SAIR?') == true){
        window.location.href = "/pag_login.html"
    }
}

function Refeicoes_alunos_botaoembaixo(){
    window.alert('As informações foram enviadas com SUCESSO')
}

function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Imagem Selecionada">`;
        }
        reader.readAsDataURL(file);
    }
}

function Log_In_Button(){
    const Set_cadastro = document.getElementById('cadastro').value
    console.log(Set_cadastro)
    if (Set_cadastro){
        if (Set_cadastro == 'aluno' || Set_cadastro == 'Aluno'){
            window.location.href = "/Dashboard Aluno.html"
        } else if (Set_cadastro == 'Nutricionista' || Set_cadastro == 'nutricionista'){
            window.location.href = "/Dashboard.html"
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