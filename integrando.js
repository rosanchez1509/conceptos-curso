

document.getElementById("Boton").onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS"
    
}

document.getElementById("Boton_color").addEventListener('click', function () {
    document.body.style.backgroundColor= 'red';
    
})

document.getElementById("Boton_default").addEventListener('click', function () {
    document.body.style.backgroundColor= 'blue';
    
})

document.getElementById("Boton_ocultar").addEventListener('click', function () {
    document.getElementById('demo').style.display='none'; 
    
})