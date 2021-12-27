import cards from "./moduloCardsDados.js";

class CardsBuilder{
   selectCategoria() {
        const selectCategoria = cards.map((cards) => cards.categoria);
        const uniqueCategoria = [...new Set(selectCategoria)];
        const idDategoria = Math.floor(Math.random() * uniqueCategoria.length)
        if (localStorage.getItem("cardCategoria") !== uniqueCategoria[idDategoria]) {
            localStorage.setItem("cardCategoria", `${uniqueCategoria[idDategoria]}`)
            return uniqueCategoria[idDategoria]
        } else {
            return this.selectCategoria();
        }
    }
    addCards(){ 
        let categoria = this.selectCategoria()
        const filtroBloco = cards.filter((cards)=> cards.categoria === categoria);
        console.log(filtroBloco);
        return filtroBloco;
    } 
}
const cardsBuilder = new CardsBuilder();
export default cardsBuilder;
