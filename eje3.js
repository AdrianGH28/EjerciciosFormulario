document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();
    var precioInput = document.getElementById('inp');
    var precio = parseFloat(precioInput.value);

 
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un valor de precio positivo");
        precioInput.focus();
        return;
    }

    var descuento = 0.15;
    var total = precio - (precio * descuento);

    document.getElementById('resultado').innerText = "El precio con el descuento es de $" + total.toFixed(2);
});
