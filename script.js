document.addEventListener("DOMContentLoaded", function() {
    const provincias = document.querySelectorAll(".provincia");
    const colorSelector = document.getElementById("colorSelector");

    provincias.forEach(provincia => {
        provincia.addEventListener("click", function() {
            this.style.backgroundColor = colorSelector.value;
        });
    });
});
