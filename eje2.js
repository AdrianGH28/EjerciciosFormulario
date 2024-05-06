document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var sueldobInput = document.getElementById('sueldob');
    var sueldob = parseFloat(sueldobInput.value);

    var v1Input = document.getElementById('v1');
    var v1 = parseFloat(v1Input.value);

    var v2Input = document.getElementById('v2');
    var v2 = parseFloat(v2Input.value);

    var v3Input = document.getElementById('v3');
    var v3 = parseFloat(v3Input.value);
 
    if (isNaN(sueldob) || sueldob <= 0 || isNaN(v1) || v1 < 0 || isNaN(v2) || v2 < 0 || isNaN(v3) || v3 < 0) {
        alert("Por favor, ingrese números positivos o 0 para todos los campos.");
        return;
    }

    var comision = 0.1;
    var comisiontotal = (v1 + v2 + v3) * comision;
    var total = sueldob + comisiontotal;

    document.getElementById('resultado').innerText = "El vendedor recibirá $" + total.toFixed(2) + " en total.";
});
