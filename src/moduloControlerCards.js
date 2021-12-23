import cards from "./moduloCardsDados.js";

class CardsBuilder{

    selectCategoria(){
        const selectCategoria = cards.map((cards)=> cards.categoria);
        const idDategoria = Math.floor(Math.random() * selectCategoria.length)
        return selectCategoria[idDategoria];
    }
    
    addCards(){ 
        let categoria = this.selectCategoria()
        const filtroBloco1 = cards.filter((cards)=> cards.categoria === categoria);
        return filtroBloco1;
    }
}

const cardsBuilder = new CardsBuilder();
export default cardsBuilder;
