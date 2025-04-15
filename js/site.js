function validaInscricao(){
    if(document.frminscricao.txtnome.value==""){
        alert("Preencha o campo Nome. ");
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
    if(document.frminscricao.txtfone.value==""){
        alert("Preencha o campo Telefone. ");
        document.frminscricao.txtfone.focus();
        return false;
    }
    if(document.frminscricao.email.value==""){
        alert("Preencha o campo Email. ");
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
