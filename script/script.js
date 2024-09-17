const dateInput = document.getElementById('date-input');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');

function Set_cardapio_final_button(){
    window.alert('O Cardápio foi enviado com SUCESSO')
    window.location.href = "/Dashboard.html"
}

function Set_Desperdicio_final_button(){
    window.alert('O Desperdício da Semana foi enviado com SUCESSO')
    window.location.href = "/Dashboard.html"
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
    window.location.href = "/Dashboard Aluno.html"
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