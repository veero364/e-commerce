//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function (e) {  });
//var varLink=undefined;

function validatePerfil()
{
	var priNombre = document.f2.first_name.value;//creo una variable que almacena el valor ingresado en el campo usuario. f2 =name del form
	var segNombre = document.f2.second_name.value;//creo una variable que almacena el valor ingresado en el campo usuario. f2 =name del form
	var priAp = document.f3.first_lastName.value;
	var segAp = document.f3.second_lastName.value;
	var Edad = document.f4.nameEdad.value;
	var Telph = document.f4.nameTelefono.value;
	var varLink = document.f5.nameLink.value;
	

	
	
	// Chequeo que soporte el browser
	
	if (typeof(Storage) !== "undefined") 
	{
		// Si hay algo definido lo almaceno
		localStorage.setItem("priNom", priNombre);//guardar es setItem
		localStorage.setItem("segNom", segNombre);
		localStorage.setItem("priAp", priAp);
		localStorage.setItem("segAp", segAp);
		localStorage.setItem("edad", Edad);
		localStorage.setItem("Tel", Telph);
		localStorage.setItem("linklink", varLink);
		return true;
	} 
	else 
	{

		
	alert("Sorry, your browser does not support Web Storage...");//si el browser no lo soporta envia esta alerta de error
		//document.f2.action="ppal.html";
		return true;
	}
	
	
}
//<img src="archivo.jpg">
document.addEventListener("DOMContentLoaded", function(e)
{

//let imgPerfil=`<img src="`+ varLink +`" alt="">`
	
	  	//document.getElementById("divFotoPerfil").innerHTML = imgPerfil;
	  	//document.getElementById("fotoPerfil").innerHTML = imgPerfil;
});

