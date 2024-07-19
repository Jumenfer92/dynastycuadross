document.addEventListener("DOMContentLoaded", function() {
    const provincias = document.querySelectorAll(".provincia");
    const colorSelector = document.getElementById("colorSelector");

    provincias.forEach(provincia => {
        provincia.addEventListener("click", function() {
            this.style.backgroundColor = colorSelector.value;
        });
    });
});

function tirarDado() {
	let min = 1;
	let max = 6;
	let numero = Math.floor(Math.random() * (max - min) + min;
	console.log(numero);
	return numero;
}
