
document.getElementById('sumar').addEventListener('click',function () {
    let Numero1 = document.getElementById('numero1').value;
    let Numero2 = document.getElementById('numero2').value;
    let resultado = sumar (parseInt(Numero1), parseInt(Numero2));

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
    
})

function sumar(a,b) {
    return a + b;
    
}