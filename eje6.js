document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nacimientoInput = document.getElementById('nacimiento');
    var nacimiento = new Date(nacimientoInput.value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        alert("La fecha de nacimiento debe ser válida.");
        return;
    }

    if (isNaN(nacimiento.getTime())) {
        alert("Por favor, ingrese una fecha de nacimiento válida.");
        return;
    }

    document.getElementById('resultado').innerText = "La persona tiene " + edad + " años";
});
