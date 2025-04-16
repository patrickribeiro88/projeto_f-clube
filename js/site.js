function validaInscricao(){
    var nome = document.frminscricao.txtnome.value;
    var expRegNome = new RegExp ("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frminscricao.txtnome.focus();
        return false;
    }
    var generos = document.frminscricao.genero;
    var selecionado = false;

    for (var i=0; i < generos.length; i++){
        if(generos[i].checked){
            selecionado = true;
            break;
        }
    }
    if(!selecionado){
        alert("Selecione o campo Sexo.");
        generos[0].focus();
        return false;
    }
    if(document.frminscricao.datanascimento.value==""){
        alert("Selecione o campo Data de Nascimento. ");
        document.frminscricao.datanascimento.focus();
        return false;
    }
    var fone = document.frminscricao.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    
    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone Corretamente.");
        document.frminscricao.txtfone.focus();
        return false;
    }
    var email = document.frminscricao.email.value;
    var expRegEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$");
    
    if (!expRegEmail.test(email)) {
        alert("Preencha o campo Email Corretamente.");
        document.frminscricao.email.focus();
        return false;
    }
    if(!document.frminscricao.faclube.checked){
        alert("Selecione a opção se deseja participar do fã-clube. ");
        document.frminscricao.faclube.focus();
        return false;
    }
    if (document.frminscricao.txacomentario.value==""){
        alert("Preencha o campo Comentário.");
        document.frminscricao.txacomentario.focus();
        return false;
    }
    return true;

}
