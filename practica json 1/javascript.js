
function load_json(){
	var cotxes = JSON.parse(dades);
	document.write("Llista de coches<br>");
	for(i=0;i<cotxes.length; i++){
		
		
		document.write("Cotxe "+i+": "+cotxes[i].marca+" "+cotxes[i].model+" de "+cotxes[i].cavalls+"<br>")
	}
}

window.addEventListener("load", load_json, false);