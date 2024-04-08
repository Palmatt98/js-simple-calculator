let operatoreSelezionato = null;
let primoOperando = null;

const buttonsArray = document.querySelector(".numbers").children;
// elemento.children mi restituisce un array  contenente i figli di elelemento
console.log(buttonsArray);

for (let i = 0; i < buttonsArray.length; i++) {
	buttonsArray[i].addEventListener("click", function (event) {
		console.log("hai cliccato il carattere ", event.target.innerText);

		const resultELement = document.getElementById("result");
		console.log(resultELement.innerText);
		console.log(event.target.innerText);
		if (resultELement.innerText === "0") {
			resultELement.innerText = "";
		}
		resultELement.innerText = resultELement.innerText + event.target.innerText;
	});
}

const operatori = document.querySelector(".operators").children;
console.log(operatori);

for (let i = 0; i < operatori.length; i++) {
	operatori[i].addEventListener("click", function (event) {
		operatoreSelezionato = event.target.innerText;
		resultELement = document.getElementById("result");
		primoOperando = resultELement.innerText;

		resultELement.innerText = "0";

		console.log("primoOperando: ", primoOperando);
		console.log("operatore selezionato: ", operatoreSelezionato);
	});
}
