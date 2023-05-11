function salvar() {
    var table = document.getElementById("myTable");
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let nascimento = document.getElementById("nascimento").value;
    let estado = document.getElementById("estado").value;
    var informations = [nome, email, nascimento, estado];
    for(let i = 0; i < 4; i++){
        var inform = informations[i].value;
        var row = table.insertRow(i + 1);
        var inform = row.insertCell(i);
        inform[i].innerHTML = inform[i];
    }
    limpar();
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("estado").value = "";
}