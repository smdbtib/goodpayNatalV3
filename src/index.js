import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";
import cardsBuilder from "./moduloControlerCards.js";

/* ADD DE CARDS */
adicionarBloco();
function adicionarBloco(){
    let blocoCards = cardsBuilder.addCards();
    blocoCards.forEach((cards, index) => {
    document.querySelector(`#cardImagem${index+1}`).innerHTML = `
    <img src="${cards.img}" class="card-img-top"/>`
    document.getElementById(`cardTitulo${index+1}`).innerHTML = cards.title;
    document.getElementById(`cardTexto${index+1}`).innerHTML = cards.body;
    document.getElementById(`cardRodape${index+1}`).innerHTML = cards.date;
});
    
   setTimeout(adicionarBloco, 2000); true 
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