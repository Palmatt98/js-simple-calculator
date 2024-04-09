let operatoreSelezionato = null;
let primoOperando = 0;
let secondoOperando = 0;
let risultatoFinale = 0;

const resultElement = document.getElementById("result");

const operatori = document.querySelector(".operators").children;
console.log(operatori);
// elemento.children mi restituisce un array  contenente i figli di elelemento
const buttonsArray = document.querySelector(".numbers").children;
console.log(buttonsArray);

console.log("this iniziale: ", this);  //il this nel contesto globale mi restituisce window invece se messo all'interno di adeventlistener mi ritorna l'elemento html.

for (let i = 0; i < buttonsArray.length; i++) {
	if (buttonsArray[i].innerText === "=") {
		buttonsArray[i].addEventListener("click", calcolaRisultato);
	} else {
		buttonsArray[i].addEventListener("click", concatenaNumeri);
	}
}



for (let i = 0; i < operatori.length; i++) {
	operatori[i].addEventListener("click", selezionaOperatore);
}
