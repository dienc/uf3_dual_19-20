diapo=1;
var num_imagenes;
function inicio() {
//	alert("hemos entrado en la funcion inicio");
	$("#diapositiva1").css("display", "block");
	
	$("#botonadelante").click( function () { avanzar();});
	$("#botonatras").click( function () { retroceder();});

	num_imagenes=$("#diapositivas").find("img").length;
//	alert("num imagenes en inicio: "+num_imagenes);
	}
function avanzar() {
	//alert(diapo);
	$("#diapositiva"+diapo).css("display", "none");

	//actualizo a la nueva diapositiva
	if (diapo==num_imagenes)
		diapo=1;
	else
		diapo++;
		
	//que aparezca la nueva diapositiva
	$("#diapositiva"+diapo).css("display", "block");	
}
function retroceder() {
	//alert(diapo);
	$("#diapositiva"+diapo).css("display", "none");

	//actualizo a la nueva diapositiva
	if (diapo==1)
		diapo=num_imagenes;
	else
		diapo--;
	
	//que aparezca la nueva diapositiva		
	$("#diapositiva"+diapo).css("display", "block");
}
$(document).ready( function () { inicio();});


