//Función que se ejecuta una vez que se haya lanzado el evento
// el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//NOTA: EL SIMBOLO DE $ ES PARA LLAMAR A LA CLASE ASI COMO EN CSS UNICAMENTE SE USA EL PUNTO
document.addEventListener("DOMContentLoaded", function (e) 
	{
		var input = $('.validate-input .input100'); //la variable va a estar en todas las clases validate-input y input100
		
		$('.validate-form').on('submit', function () 
			{
				var check = true; //la variabel va a estar en validate-from
				
				for (var i = 0; i < input.length; i++) 
				{ //chequea el largo de la variable input en los campos para verificar si esta vacia o no ==false es = 0 osea campo vacio
					if (validate(input[i]) == false) 
					{
						showValidate(input[i]);//si esta vacia llama a la funcion
						check = false;
					}
				}
				
				return check;
			});
			
			
			$('.validate-form .input100').each(function () 
				{ //each = cada funcion
					$(this).focus(function () 
						{//focus=funcion/atributo de js 
							//ilumina los campos que no cumplen los requisitos 
							
						});
				});
				
				function validate(input) 
				{
					if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') 
					{//attr = atributo
						if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {//regular expresion para controlar mail
							return false;
						}//chequea el formato del mail
					}
					else 
					{
						if ($(input).val().trim() == '') 
						{ //verifica si el pass esta vacio o no
							return false;
						}
					}
						
	function mostrar()
	{
		
		document.getElementById("result").innerHTML = "The age entered is: " +input+ " years";
	}
				}
				
				function showValidate(input) 
				{//muestra la alerta indicando deben completar el campo
					var thisAlert = $(input).parent(); //toma el id de los campoc
					
					$(thisAlert).addClass('alert-validate');//pone la alerta donde esta el id del campo que tomo anteriormente
				}
				
	});
	
	
	
	
	/*if(typeof(Storage))!=="underfined"
		{
		localStorage,setItem("mail");
		var a = localStorage.getItem("mail");
		console.log(a);
		
		}
	else{alert("error");}*/
	
	
	
	
		