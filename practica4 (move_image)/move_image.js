 $(function() {
$( "#accordion" ).accordion();
});

var diapo;

function inicio() {
	link_right=document.getElementById("right-arrow");
	link_right.addEventListener("click",derecha,false);

	link_left=document.getElementById("left-arrow");
	link_left.addEventListener("click",izquierda,false);

	link_up=document.getElementById("up-arrow");
	link_up.addEventListener("click",arriba,false);

	link_down=document.getElementById("down-arrow");
	link_down.addEventListener("click",abajo,false);
	
	diapo=document.getElementById("diapo10");
	diapo.style.position = "relative";
	diapo.style.top = '0px';
	diapo.style.left = '0px';	
}

function derecha() {
	m = parseInt(diapo.style.left);
	if (m>=360) {		//aquí no variamos left, solo en else
	} else {
		diapo.style.left = parseInt(diapo.style.left) + 40 + 'px';
	}
}

function izquierda() {
}

function arriba() {
}

function abajo() {
}

window.addEventListener('load', inicio, false);