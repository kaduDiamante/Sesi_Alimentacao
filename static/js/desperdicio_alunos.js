function alterarFundo() {
    var h1 = document.getElementsByClassName('numero');
    var fundo = document.getElementsByClassName('blocoEs');
    console.log(h1)
    console.log(fundo)
    console.log(h1.length)
    var numero = parseInt(h1.textContent, 10);

    for (let index = 0; index < h1.length; index++) {
        var numero = parseFloat(h1[index].textContent);
        
        if (numero > 0 && numero <= 3 ) {
            fundo[index].style.backgroundColor = 'green ';
        }
        else if (numero > 3 && numero <= 5 ) {
            fundo[index].style.backgroundColor = 'yellow ';
        }
        else {
            fundo[index].style.backgroundColor = 'red';
        }
    }
}

alterarFundo() 