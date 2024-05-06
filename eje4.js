document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var cal1Input = document.getElementById('cal1');
    var cal1 = parseFloat(cal1Input.value);
    var cal2Input = document.getElementById('cal2');
    var cal2 = parseFloat(cal2Input.value);
    var cal3Input = document.getElementById('cal3');
    var cal3 = parseFloat(cal3Input.value);
    var examenInput = document.getElementById('examen');
    var examenFinal = parseFloat(examenInput.value);
    var trabajoInput = document.getElementById('trabajo');
    var trabajoFinal = parseFloat(trabajoInput.value);

    if (isNaN(cal1) || cal1 < 0 || cal1 > 100 || isNaN(cal2) || cal2 < 0 || cal2 > 100 || isNaN(cal3) || cal3 < 0 || cal3 > 100 || isNaN(examenFinal) || examenFinal < 0 || examenFinal > 100 || isNaN(trabajoFinal) || trabajoFinal < 0 || trabajoFinal > 100) {
        alert("Por favor, ingrese números positivos menores o iguales a 100 para todos los campos.");
        return;
    }

    var promedioParciales = (cal1 + cal2 + cal3) / 3;
    var calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById('resultado').innerText = "La calificación final del alumno es " + calificacionFinal.toFixed(2);
});
