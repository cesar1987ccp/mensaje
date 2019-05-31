var flexiones=["flexion1.jpg","flexion2.jpg","flexion3.jpg","flexion4.jpg"];
var contador=0;

function cambiarImagen(){
	imagen.src=flexiones[contador];
	contador++;
	if (contador >= flexiones.length) {
		contador=0;
	}
}

setInterval(cambiarImagen,8000);

function programa(){

	boton.addEventListener("click,"cambiarImagen)
}

window.addEventListener("load",programa);


function cambiarColor(){
	for (i=0;i<formulario.botonera.length;i++) {
        if(formulario.botonera[i].checked){
        	document.body.style.backgroundColor=formulario.botonera[i].value;
        	break;
        }
	}
}

function botones(){
	for(i=0;i<botonitos.botonera.length;i++){
	botonitos.botonera[i].addEventListener("change",cambiarImagen);
}

}
window.addEventListener("load",botones);