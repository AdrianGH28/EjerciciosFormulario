document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var capitalInput = document.getElementById('capital');
    var capital = parseFloat(capitalInput.value);


    if (isNaN(capital) || capital <= 0) {
        alert("Por favor, ingrese un número positivo para el capital.");
        capitalInput.focus();
        return;
    }
    var capital = parseFloat(document.getElementById('capital').value);
    var interes = 0.02;
    var total = capital * interes;
    document.getElementById('result').innerText = "A razón de 2% mensual usted ganará $" + total;
});
