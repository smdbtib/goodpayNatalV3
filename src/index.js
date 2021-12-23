import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";
import cardsBuilder from "./moduloControlerCards.js";

adicionarBloco();

function adicionarBloco(){
    let blocoCards = cardsBuilder.addCards(cardsBuilder.selectCategoria());

    document.getElementById("cardImagem1").innerHTML = `
    <img src="${blocoCards[0].img}" class="card-img-top"/>`
    document.getElementById("cardTitulo1").innerHTML = blocoCards[0].title;
    document.getElementById("cardTexto1").innerHTML = blocoCards[0].body;
    document.getElementById("cardRodape1").innerHTML = blocoCards[0].date;

    document.getElementById("cardImagem2").innerHTML = `
    <img src="${blocoCards[1].img}" class="card-img-top"/>`
    document.getElementById("cardTitulo2").innerHTML = blocoCards[1].title;
    document.getElementById("cardTexto2").innerHTML = blocoCards[1].body;
    document.getElementById("cardRodape2").innerHTML = blocoCards[1].date;

    document.getElementById("cardImagem3").innerHTML = `
    <img src="${blocoCards[2].img}" class="card-img-top"/>`
    document.getElementById("cardTitulo3").innerHTML = blocoCards[2].title;
    document.getElementById("cardTexto3").innerHTML = blocoCards[2].body;
    document.getElementById("cardRodape3").innerHTML = blocoCards[2].date;
    
    setTimeout(adicionarBloco,2000);
}


//Trazendo elementos do Bootstrap para uso da main Javascript.
var myModal = new bootstrap.Modal(document.getElementById('myModal'))
//Ordem para executar e validar o Login.
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=>{
    let user = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user, senha);
    
    document.getElementById("titleModal").innerHTML=alertModal.title;
    document.getElementById("bodyModal").innerHTML=alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML=alertModal.b1;
    document.getElementById("btnModalSave").innerHTML=alertModal.b2;

    myModal.show();
    setTimeout(carregarPagina, 5000);
    function carregarPagina(){
        window.location.href=controleRotasApp.validaRota(localStorage.status,alertModal.idModal);
    }
});
//Ordem para criar um novo usuário.
const novoUsuario = document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click", (event) =>{
    window.location.href=controleRotasApp.validaRota("false", "usuarioNaoExiste1");
});