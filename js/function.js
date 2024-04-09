function concatenaNumeri() {
	console.log("this detro eventListener: ", this);

	console.log("hai cliccato il carattere ", this.innerText);

	if (resultElement.innerText === "0") {
		resultElement.innerText = "";
	}
	resultElement.innerText = resultElement.innerText + this.innerText;
	console.log("resultELement.innerText: ", resultElement.innerText);
}

function calcolaRisultato() {
	secondoOperando = parseInt(resultElement.innerText);

	switch (operatoreSelezionato) {
		case "+":
			risultatoFinale = primoOperando + secondoOperando;
			break;
		case "-":
			risultatoFinale = primoOperando - secondoOperando;
			break;
		case "×":
			risultatoFinale = primoOperando * secondoOperando;
			break;
		case "÷":
			risultatoFinale = primoOperando / secondoOperando;
			break;
		case "C":
			reset();
			break;
	}

	resultElement.innerText = risultatoFinale;
}

function reset() {
	risultatoFinale = 0;
	primoOperando = 0;
	secondoOperando = 0;
}

function selezionaOperatore() {
	operatoreSelezionato = this.innerText;
	primoOperando = parseInt(resultElement.innerText);

	resultElement.innerText = "0";

	console.log("primoOperando: ", primoOperando);
	console.log("operatore selezionato: ", operatoreSelezionato);
}
