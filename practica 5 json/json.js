$(function() {
$( "#accordion" ).accordion();
});

function inicio() {
	var entradas = JSON.parse(dades1);

	form2=document.getElementById("form2");
	for(i=0;i<entradas.length; i++){
		//alert("entradas "+entradas.length);
		switch(entradas[i].caja) {
  			case "text":
    			form2.innerHTML+="<br/><label class='label'>" + entradas[i].text + "<input type='text' id='"+entradas[i].id+"box' class='input'></input></label><input type='text' id='Val_"+entradas[i].id+"' value='' disabled='disabled'></input>";
    			break;
  			case "password":
    			form2.innerHTML+="<br/><label class='label'>" + entradas[i].text + "<input type='password' id='"+entradas[i].id+"box' class='input' size='8'></input></label><input type='text' id='Val_"+entradas[i].id+"' value='' disabled='disabled'></input>";						
    			break;
  			case "select":
  				var valores = entradas[i].valors.split("+");
				texto_select="<br/><label class='label'>"+entradas[i].text+"<select id='"+entradas[i].id+"box'>";
  				for(j=0;j<valores.length;j++){
  					texto_select+="<option value='"+valores[j]+"'>"+valores[j]+"</option>";
  				}
				texto_select+="</select></label>";
				//alert(";"+texto_select);
				form2.innerHTML+=texto_select;
    			break;

			default:
    // code block
}
	}
	form2.innerHTML+="<br/><input type='button' id='button3' value='ENVIA'></input></input>";
/*	para=document.getElementById("para");
	para.innerHTML='<p>espero que esto aparezca2</p>'; FUNCIONA!!*/
}

/*
function alternativa_ajax() {

var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
}
*/

window.addEventListener('load', inicio, false);