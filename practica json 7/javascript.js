 //ARXIU JAVASCRIPT

function inicio() {
	boton=document.getElementById('boton');
	boton.addEventListener('click', lee, false);
/*	document.getElementById('demo').innerHTML = lee()*/
}

function lee()
	{	
		//Cogemos la caja donde ira el mensaje de error
		var moneda = document.getElementById("cambio").value;
		var cantidad = document.getElementById("cantidad").value;
		if(cantidad == "")
			{
				document.getElementById("demo").innerHTML ="Debes introducir una cantidad";
			}
		else
			{
				switch(moneda) {
					case "USD":
						var valor=$.getJSON("http://data.fixer.io/api/latest?access_key=e10d76e273cc0c21019b6fc8bfffc67d&format=1", function(data){
						valor=data.rates.USD;
						var total=valor*cantidad;

						document.getElementById("demo").innerHTML = cantidad+" Euros son "+total+" "+moneda;
						//document.write(cantidad+" Euros son "+total+" "+moneda+"<br>")
						;} );
						break;
					
					case "GBP":
						var valor=$.getJSON("http://data.fixer.io/api/latest?access_key=e10d76e273cc0c21019b6fc8bfffc67d&format=1", function(data){
						valor=data.rates.GBP;
						var total=valor*cantidad;
						document.getElementById("demo").innerHTML = cantidad+" Euros son "+total+" "+moneda;
						//document.write(cantidad+" Euros son "+total+" "+moneda+"<br>")
						;} );
						break;
					
					case "AUD":
						var valor=$.getJSON("http://data.fixer.io/api/latest?access_key=e10d76e273cc0c21019b6fc8bfffc67d&format=1", function(data){
						valor=data.rates.AUD;
						var total=valor*cantidad;
						document.getElementById("demo").innerHTML = cantidad+" Euros son "+total+" "+moneda;
						//document.write(cantidad+" Euros son "+total+" "+moneda+"<br>")
						;} );
						break;
					
					case "JPY":
						var valor=$.getJSON("http://data.fixer.io/api/latest?access_key=e10d76e273cc0c21019b6fc8bfffc67d&format=1", function(data){
						valor=data.rates.JPY;
						var total=valor*cantidad;
						document.getElementById("demo").innerHTML = cantidad+" Euros son "+total+" "+moneda;
						//document.write(cantidad+" Euros son "+total+" "+moneda+"<br>")
						;} );
						break;
						
					}
				}
				
	}
window.addEventListener("load", inicio, false);
