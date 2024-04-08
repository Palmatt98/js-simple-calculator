const buttonsArray = document.querySelector(".numbers").children;
// elemento.children mi restituisce un array  contenente i figli di elelemento
console.log(buttonsArray);

for (let i = 0; i < buttonsArray.length; i++) {
	buttonsArray[i].addEventListener("click", function (event) {
		console.log("hai cliccato il carattere ", event.target.innerText);

		const resultELement = document.getElementById("result");
		console.log(resultELement.innerText);
		console.log(event.target.innerText);
		if (resultELement.innerText === "0"){
			resultELement.innerText = ""
		}
		resultELement.innerText = resultELement.innerText + event.target.innerText;
	});
}
