var array = {};
//var array2 = {};
var cartInfo = { };

var subtotal = undefined;
var cod= 2;
//var imageSrc = undefined;//contiene el array con la info del json
var variablex = undefined;

function showImagesGallery(array)
{
	
    let htmlContentToAppendcart = `
	<div class="text" id="idArti"></div>
	<table class="estiloTablaEncabezados table" id="TABLE_ID_HERE">
	<thead>
	<tr class="estiloTabla"><div>
	<th scope="col">Articulo</th>
	<th scope="col">Nombre</th> 
	<th scope="col">Moneda</th> 
	<th scope="col">Costo</th>
	<th scope="col">Cantidad</th>
	<th scope="col">SubTotal</th>
	
	</div>
	</tr>
	<thead>
	`
	
    for(let i = 0; i < array.articles.length; i++)
	{
        imageSrc = array.articles[i];
		subtotal = (imageSrc.count * imageSrc.unitCost);
		
        htmlContentToAppendcart += `
        
		<tbody>
		<tr class="estiloTabla">
		
		<td id="articulo" ><div class="col-6 mb-4 h-100 divimagen" id="divimagen">
		
		<img class="img-fluid" src="../` + imageSrc.src + `" alt="">
		
        </div></td>
		
		<td> <div>` + imageSrc.name + ` </div></td>
		<td> <div>` + imageSrc.currency + ` </div></td>
		<td> <div>` + imageSrc.unitCost + `</div></td>
		<td> <div class="quantity"> <input id="inputCantidad" onchange="ShowSelected();" type="number" name="pesocompuesto" min=1 step="1" value= "` + imageSrc.count + `" /> </div></td>
		<td> <div id="subtotalcto">` +  subtotal + ` </div></td>
		<th> <i  type="button" class="fas fa-minus-circle" onclick="eliminarArt()" class="borrar" value="Eliminar"></i></button></th>
		
		
		</tr>
		
        `
		
        document.getElementById("idArticulosAcomprar").innerHTML = htmlContentToAppendcart;
	}
	

}
	
		
function eliminarArt()
{ 

	
	
	/*var index = array.articles;
	if (index > -1) 
	{
   array.articles.splice(index, 1);
	}
	array.articles.splice(0, 1);*/
	
	
	
	let hola=`<div class="text" id="idArti"></div>
	
	<table class="estiloTablaEncabezados table">
	<thead>
	<tr class="estiloTabla"><div>
	<th scope="col">Articulo</th>
	<th scope="col">Nombre</th> 
	<th scope="col">Moneda</th> 
	<th scope="col">Costo</th>
	<th scope="col">Cantidad</th>
	<th scope="col">SubTotal</th>
	
	</div>
	</tr>
	<thead>
	
	
		<tbody>
		
		<tr>
		
		<td> <a href="categories.html"> ----> Volver a comprar</a></td>
	</tr>
		</tbody>
		</table>
	`
document.getElementById("idArticulosAcomprar").innerHTML = hola;
}

function ShowSelected() /* Para obtener el valor del imput que contiene la cantidad de articulos*/
{
	
	cod = document.getElementById("inputCantidad").value;
	
		variablex= (cod*imageSrc.unitCost);
	
	document.getElementById("subtotalcto").innerHTML = variablex;

	
}


function CostoPremium()
{
	variablex= (cod*imageSrc.unitCost);
	variablex =(variablex * 1.15);
	let ctoenvio= variablex / 1.15 - variablex
	
let mostrar = `<p> El costo final de su compra es de: $` + parseInt(variablex) + ` y estará llegando de 2 a 5 días.</p>`
	document.getElementById("costoenvio").value = `El costo del envío seleccionado será de $`+ Math.abs(parseInt(ctoenvio)) +``;
	document.getElementById("costototal").innerHTML = mostrar;
	document.getElementById("metodos").style.display = 'block';
	document.getElementById("costototal").style.display = 'block';
	document.getElementById("msg1").style.display = 'block';
	document.getElementById("costoenvio").style.color = 'Green';
}

function CostoExpress()
{
	variablex= (cod*imageSrc.unitCost);
	variablex =(variablex * 1.07);
	let ctoenvio= variablex / 1.07 - variablex
	
	let mostrar = ` <p> El costo final de su compra es de: $` + parseInt(variablex) + ` y estará llegando de 5 a 8 días`
	document.getElementById("costoenvio").value = ` El costo del envío seleccionado será de $`+ Math.abs(parseInt(ctoenvio)) +``;
	document.getElementById("costototal").innerHTML = mostrar;
	document.getElementById("metodos").style.display = 'block';
	document.getElementById("costototal").style.display = 'block';
	document.getElementById("msg1").style.display = 'block';
	document.getElementById("costoenvio").style.color = 'Green';
}
function CostoStandard()
{
	variablex= (cod*imageSrc.unitCost);
	variablex =(variablex * 1.05);
	let ctoenvio= variablex / 1.05 - variablex
	
	let mostrar = `<p> El costo final de su compra es de: $` + parseInt(variablex) + ` y estará llegando de 12 a 15 días`
	document.getElementById("costoenvio").value = `El costo del envío seleccionado será de $`+ Math.abs(parseInt(ctoenvio)) +``;
	document.getElementById("costototal").innerHTML = mostrar;
	document.getElementById("metodos").style.display = 'block';
	document.getElementById("costototal").style.display = 'block';
	document.getElementById("msg1").style.display = 'block';
	document.getElementById("costoenvio").style.color = 'Green';
	
}


function myFunctionmostrar() { //oculta o muestra los campos dependiendo de lo seleccionado ej el metodo de pago
	if(document.getElementById("costoenvio").value === " ")
	{
		document.getElementById("costoenvio").value = "Favor Selecione un methodo de envio";
		document.getElementById("costoenvio").style.color = 'red';
	}
	else
	{
		document.getElementById("costoenvio").style.color = 'Green';
		let selectedOption = $("input:radio[name=rdbtn]:checked").val();
		//alert(selectedOption);
		let x = document.getElementById("myDIV");
		if (selectedOption === "tarjeta" || selectedOption === "t/b") {
			x.style.display = "block";
			x.style.color = "Green";
			} else {
			x.style.display = "none";
		}
	}
}






getJSONData(CART_INFO_URL).then(function(resultObj)
	{
        if (resultObj.status === "ok")
        {
            cartInfo = resultObj.data;
			
			
            let htmlContentToAppend = "";
			if (resultObj.status === "ok")
			{
				category = resultObj.data;
				for(let i = 0; i < cartInfo.articles.length; i++)
				{
					let artcilesInfo = cartInfo.articles[i];
					let categoryNameHTML  = document.getElementById("idArticulosAcomprar");
					categoryNameHTML.innerHTML = array.src;
				}
			}
			showImagesGallery(category);
		}
	});
	//METODOS DE PAGO
	document.addEventListener("DOMContentLoaded", function(e)
		{ let insertarvar =`
			<p>Favor seleccione un metodo de pago:</p>
			<input type="radio" id="tarjeta" value="tarjeta" name="rdbtn" class="btn btn-primary  field" required data-toggle="modal" data-target="#staticBackdrop">
			<label for="male">Tarjeta de Crédito</label><br>
			
			
			<!-- Modal -->
			<form action="#" class="credit-card-div" name="myForm">
			<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div class="modal-dialog">
			<div class="modal-content">
			<div class="modal-header">
			<h5 class="modal-title" id="staticBackdropLabel">PAGO POR TARJETA</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
			</div>
			<div class="modal-body">
			
			
			
			
			
			<div class="panel panel-default" >
			<div class="panel-heading">
			
			<div class="row ">
			<div class="col-md-12">
			<input type="text" class="form-control" placeholder="Ingrese el numero de tarjeta" required="required" name="numeroTarjeta"/>
			</div>
			</div>
			<div class="row ">
			<div class="col-md-3 col-sm-3 col-xs-3">
			<span class="help-block text-muted small-font" > Mes de vto</span>
			<input type="text" class="form-control" placeholder="MM" required value="" name="MM"/>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-3">
			<span class="help-block text-muted small-font" >  Año de vto</span>
			<input type="text" required value="" class="form-control" placeholder="YY" name="YY" />
			</div>
			<div class="col-md-3 col-sm-3 col-xs-3">
			<span class="help-block text-muted small-font" >  CCV</span>
			<input type="text" required value="" class="form-control" placeholder="CVV" name="CVV"/>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-3">
			<img src="../img/tarjeta.jpg" class="img-rounded" />
			</div>
			</div>
			<div class="row ">
			<div class="col-md-12 pad-adjust">
			
			<input type="text" name="fname" required class="form-control" placeholder="Nombre en la tarjeta" />
			</div>
			</div>
			<div class="row">
			<div class="col-md-12 pad-adjust">
			</div>
			</div>
			</div>
			</div>
			
			
			
			
			
			
			</div>
			<div class="modal-footer">
			
			<button type="submit"  class="btn btn-primary"  data-dismiss="modal">Guardar</button>
			</div>
			
			</div>
			</div>
			</div>
			</form>
			<input type="radio" id="banco" value="t/b" name="rdbtn" class="field" required  data-toggle="modal" data-target="#staticBackdropB">
			<label for="female">Transferencia Bancaria</label><br>
			
			<!-- Modal -->
			<div class="modal fade" id="staticBackdropB" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div class="modal-dialog">
			<div class="modal-content">
			<div class="modal-header">
			<h5 class="modal-title" id="staticBackdropLabel">PAGO POR BANCO</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
			</div>
			<div class="modal-body">
			
			
			<form action="#" class="credit-card-div">
			<div class="panel panel-default" >
			<div class="panel-heading">
			
			<div class="row ">
			<div class="col-md-12">
			<input type="text" class="form-control" placeholder="Ingrese cuenta bancaria" value="" required />
			</div>
			</div>
			</div>
			</div>
			
			
			
			
			
			
			</div>
			<div class="modal-footer">
			
			<button type="submit" class="btn btn-primary" data-dismiss="modal">Guardar</button>
			</form>
			</div>
			</div>
			</div>
			</div>
			`
			document.getElementById("metodos").innerHTML = insertarvar;
		});
		//valida el metod de pago
		
/*		function validateForm() {
			var nmTar = document.myForm.numeroTarjeta.value;
var MMtar = document.myForm.MM.value;
		var YYtar = document.myForm.YY.value;
var fnametar= document.myForm.fname.value;
alert (nmTar);
alert (MMtar);
alert (YYtar);
alert (fnametar);
  //$('#staticBackdrop').modal('toggle');
    //alert("Name must be filled out");
    return false;
	
}
*/		
		
		
		
		
		getJSONData(CART_BUY_URL).then(function mje(resultObj){
			if (resultObj.status === "ok")
			{
				category = resultObj.data;
				
				let categoryNameHTML  = document.getElementById("mensaje");
				
				
				categoryNameHTML.innerHTML = category.msg;
				
				//Muestro las imagenes en forma de galería
				//showImagesGallery(category);
			}
		});
		
		
				