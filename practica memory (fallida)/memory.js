//17 marzo --> PENDIENTE DE ACABAR!!!
caso=0;
array_fotos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function inicio() {
	link1 = document.getElementById("diapo1");
	link1.addEventListener('click',function() {cambiar_foto(1)},false);
	link2 = document.getElementById("diapo2");
	link2.addEventListener('click',function() {cambiar_foto(2)},false);

}

function cambiar_foto(foto) {
	nomfoto="diapo"+foto;
//	alert("foto "+nomfoto);
	caso++;
	if (caso == 3) {
		caso = 0;
		link_a = document.getElementById(foto_descubierta);
		link_a.src = "images/reverso.jpg";
		link_b = document.getElementById(foto_descubierta2);
		link_b.src = "images/reverso.jpg";
		return;
	}
	img=document.getElementById(nomfoto);
	switch(foto) {
		case 1:
			img.src="images/1.jpg";
			foto_descubierta="A";
		case 2:
			img.src="images/1.jpg";
			foto_descubierta = "A";
	}

	if (caso == 1) {
		mem_foto = foto_descubierta;
		mem_imagen = foto;
	} else if (caso == 2) {
		if (mem_foto == foto_descubierta) {
			alert("1a foto "+mem_imagen);
			alert("2a foto "+foto);
			pos1 = foto - 1; 
			array_fotos[pos1]=0;
			pos2 = mem_imagen - 1;
			array_fotos[pos2]=0;
			alert(array_fotos);
			caso = 0;
		}
	}
}

window.addEventListener("load", inicio, false);