var array = {};
var array2 = {};

var subtotal = undefined;
var cod= 2;
var imageSrc = undefined;
var variablex = undefined;
function showImagesGallery(array)
{
	
    let htmlContentToAppendcart = `<div class="text" id="idArti"></div>
	
	<table class="estiloTablaEncabezados">
	<tr class="estiloTabla"><div>
	<th>Articulo</th>
	<th><div>Nombre</div></th> 
	<th><div>Moneda</div></th> 
	<th><div>Costo</div></th>
	<th><div>Cantidad</div></th>
	<th><div>Sub-total</div></th>
	</div>
	</tr></table>`
	
    for(let i = 0; i < array.articles.length; i++)
	{
        imageSrc = array.articles[i];
		
		subtotal = (imageSrc.count * imageSrc.unitCost);
        htmlContentToAppendcart += `
        
		
		<table class="estiloTablaEncabezados">
		
		<tr class="estiloTabla">
		
		<td id="articulo" ><div class="col-6 mb-4 h-100" id="divimagen">
		
		<img class="img-fluid" src="` + imageSrc.src + `" alt="">
		
        </div></td>
		
		<td> <div>` + imageSrc.name + ` </div></td>
		<td> <div>` + imageSrc.currency + ` </div></td>
		<td> <div>` + imageSrc.unitCost + `</div></td>
		<td> <div class="quantity"> <input id="inputCantidad" onchange="ShowSelected();" type="number" name="pesocompuesto" min=1 step="1" value= "` + imageSrc.count + `" /> </div></td>
		<td> <div id="subtotalcto">` +  subtotal + ` </div></td>
		
		
		
		</tr></table>
        `
		
        document.getElementById("idArticulosAcomprar").innerHTML = htmlContentToAppendcart;
		
		
	}
	
	
}

/*//ID AUTOGENERADO
	
	var idauto =function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	var r = (d + Math.random() * 16) % 16 | 0;
	d = Math.floor(d / 16);
	return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
    return uuid;
}*/


function ShowSelected()
{
	/* Para obtener el valor */
	cod = document.getElementById("inputCantidad").value;
	//let variablex= (cod*imageSrc.unitCost);
	//alert(cod);
	Showcosto();
}
function Showcosto()
{
	
	variablex= (cod*imageSrc.unitCost);
	//alert(variablex);
	
	document.getElementById("subtotalcto").innerHTML = variablex;
	
}


function CostoPremium()
{
	variablex= (cod*imageSrc.unitCost);
	variablex =(variablex * 1.15);
	let ctoenvio= variablex / 1.15 - variablex

	let mostrar = `<p> El costo final de su compra es de: $` + variablex + ` y estará llegando de 2 a 5 días.</p>`
	document.getElementById("costoenvio").value = `El costo del envío seleccionado será de $`+ Math.abs(ctoenvio) +``;
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
	
	let mostrar = ` <p> El costo final de su compra es de: $` + variablex + ` y estará llegando de 5 a 8 días`
	document.getElementById("costoenvio").value = ` El costo del envío seleccionado será de $`+ Math.abs(ctoenvio) +``;
	document.getElementById("costototal").innerHTML = mostrar;
	document.getElementById("metodos").style.display = 'block';
	document.getElementById("costototal").style.display = 'block';
	document.getElementById("msg1").style.display = 'block';
	document.getElementById("costoenvio").style.color = 'Green';
}
function CostoStandard()
{
	variablex= (cod*imageSrc.unitCost);
	variablex1 =(variablex * 1.05);
	let ctoenvio= variablex / 1.05 - variablex
	
	let mostrar = `<p> El costo final de su compra es de: $` + variablex1 + ` y estará llegando de 12 a 15 días`
	document.getElementById("costoenvio").value = `El costo del envío seleccionado será de $`+ Math.abs(ctoenvio) +``;
	document.getElementById("costototal").innerHTML = mostrar;
	document.getElementById("metodos").style.display = 'block';
	document.getElementById("costototal").style.display = 'block';
	document.getElementById("msg1").style.display = 'block';
	document.getElementById("costoenvio").style.color = 'Green';
	
}


function myFunctionmostrar() {
	if(document.getElementById("costoenvio").value === " ")
	{
		document.getElementById("costoenvio").value = "Favor Selecione un methodo de envio";
		document.getElementById("costoenvio").style.color = 'red';
	}
	else
	{
		document.getElementById("costoenvio").style.color = 'Green';
		var selectedOption = $("input:radio[name=rdbtn]:checked").val();
		//alert(selectedOption);
    var x = document.getElementById("myDIV");
    if (selectedOption === "tarjeta" || selectedOption === "t/b") {
        x.style.display = "block";
        x.style.color = "Green";
    } else {
        x.style.display = "none";
    }
}
}




var cartInfo = { };

getJSONData6(CART_INFO_URL).then(function(resultObj)
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

document.addEventListener("DOMContentLoaded", function(e)
{ let insertarvar =`
  <p>Favor seleccione un metodo de pago:</p>
  <input type="radio" id="tarjeta" value="tarjeta" name="rdbtn" class="field" required>
  <label for="male">Tarjeta de Crédito</label><br>
  <input type="radio" id="banco" value="t/b" name="rdbtn" class="field" required>
  <label for="female">Transferencia Bancaria</label><br>
  `
  document.getElementById("metodos").innerHTML = insertarvar;
});
		
    getJSONData7(CART_BUY_URL).then(function mje(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;
			
            let categoryNameHTML  = document.getElementById("mensaje");
           
			
            categoryNameHTML.innerHTML = category.msg;
           
            //Muestro las imagenes en forma de galería
            //showImagesGallery(category);
		}
	});
