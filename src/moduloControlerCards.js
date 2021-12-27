import cards from "./moduloCardsDados.js";

class CardsBuilder {
    selectCategoria() {
        const selectCategoria = cards.map((cards) => cards.categoria);
        const uniqueCategoria = [...new Set(selectCategoria)];
        const idDategoria = Math.floor(Math.random() * uniqueCategoria.length)
        if (localStorage.getItem("cardCategoria") !== uniqueCategoria[idDategoria]) {
            localStorage.setItem("cardCategoria", `${uniqueCategoria[idDategoria]}`)
            return uniqueCategoria[idDategoria]
        } else {
            this.selectCategoria();
        }
    }
    addCards() {
        let categoria = this.selectCategoria()
        const filtroBloco1 = cards.filter((cards) => cards.categoria === categoria);
        return filtroBloco1;
    }
}

const cardsBuilder = new CardsBuilder();
export default cardsBuilder;
