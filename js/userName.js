
function validate()
{
var user = document.f1.email.value;//creo una variable que almacena el valor ingresado en el campo usuario. f1=name del form


// Chequeo que soporte el browser
if (typeof(Storage) !== "undefined") {
  // Si hay algo definido lo almaceno
  localStorage.setItem("usuario", user);
	document.f1.action="ppal.html";
	return true;
} 
else 
{
  alert("Sorry, your browser does not support Web Storage...");//si el browser no lo soporta envia esta alerta de error
  document.f1.action="ppal.html";
	return true;
}
}

  function myFunction()
   {
  
	   document.getElementById("user").innerHTML = localStorage.getItem("usuario");
	   document.getElementById("user14").value = localStorage.getItem("usuario");

	 document.getElementById("userPerfil_priNom").value = localStorage.getItem("priNom");
	  document.getElementById("userPerfil_segNom").value = localStorage.getItem("segNom");
	  document.getElementById("userPerfil_priAp").value = localStorage.getItem("priAp");
	  document.getElementById("userPerfil_segAp").value = localStorage.getItem("segAp");
	 document.getElementById("idEdad").value = localStorage.getItem("edad");
	  document.getElementById("Telefono").value = localStorage.getItem("Tel");
	 document.getElementById("idLink").value = localStorage.getItem("linklink");
	 let h=localStorage.getItem("linklink");
	document.getElementById("FotoInseted").innerHTML = h;
	 
  }










