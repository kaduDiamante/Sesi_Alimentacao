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

function Perfil_nutri_FinalButtonED(){
    window.location.href = "/Editar_nutri"
}

function Perfil_aluno_FinalButtonED(){
    window.location.href = "/Editar_aluno"
}

function Perfil_nutri_confirmar(){
    if (confirm('Deseja CONFIRMAR?') == true){
        window.location.href = "/Perfil_nutricionista"
    }
}

function Perfil_aluno_confirmar(){
    if (confirm('Deseja CONFIRMAR?') == true){
        window.location.href = "/Perfil_Aluno"
    }
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