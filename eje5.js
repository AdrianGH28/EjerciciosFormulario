document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var estudiantesInput = document.getElementById('estudiantes');
    var estudiantes = parseFloat(estudiantesInput.value);
    var hombresInput = document.getElementById('hom');
    var hombres = parseFloat(hombresInput.value);
    var mujeresInput = document.getElementById('muj');
    var mujeres = parseFloat(mujeresInput.value);

    if (isNaN(estudiantes) || estudiantes <= 0 || isNaN(hombres) || hombres < 0 || isNaN(mujeres) || mujeres < 0) {
        alert("Por favor, ingrese números positivos para todos los campos.");
        return;
    }

    if (estudiantes !== hombres + mujeres) {
        alert("El número total de estudiantes debe ser igual a la suma de la cantidad de estudiantes");
        return;
    }

    var porcentajeHombres = (hombres / estudiantes) * 100;
    var porcentajeMujeres = (mujeres / estudiantes) * 100;

    document.getElementById('resultado').innerText = "El porcentaje de hombres es de " + porcentajeHombres.toFixed(2) + "% y el de mujeres es de " + porcentajeMujeres.toFixed(2) + "%";
});
