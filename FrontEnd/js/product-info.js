//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){*});

var category2 = {};
var category5 = {};

var ShowSelected= undefined;


function showImagesGallery(array) 
{
    let htmlContentToAppend = "";
    let imgHTML = `
	
    <div class="carousel-item active">
    <img id="active-carousel-img" class="d-block w-100  zoom" src="../`+ array[0] +`" alt="Slide `+ 1 +`">
    </div>
    `;
	
    let carouselExampleIndicatorsHTML = `
	<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    `;
    
    for (let i = 1; i < array.length; i++) 
	{
        let img = array[i];
		
        imgHTML += `
		<div class="carousel-item zoom" >
		<img class="d-block w-100" src="../`+ img +`" alt="Slide `+ i +`">
		</div>
        `;
		
        carouselExampleIndicatorsHTML += `
		<li data-target="#carouselExampleIndicators" data-slide-to="`+ i +`"></li>`;
	}
	
	htmlContentToAppend +=`
	<div id="prod-info-carousel" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">`+ carouselExampleIndicatorsHTML +`</ol>
	<div class="carousel-inner">`+ imgHTML +`</div>
	<a class="carousel-control-prev" href="#prod-info-carousel" role="button" data-slide="prev">
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span></a>
	<a class="carousel-control-next" href="#prod-info-carousel" role="button" data-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
	</a>
	</div>
	`;
	
	document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;//"productImagesGallery" nombre id html
	
}



function showComentarios(array)
{
	
	let htmlContentToAppend = "";
	
	for(let i = 0; i < array.length; i++)
	{
		let com = array[i];
		
		let star = com.score;
		
		
		//funcion para agregar las puntuaciones en formato estrella
		function agregar3()
		{
			if(star == 1 )
			{ 
				document.getElementById("idscore").innerHTML =(htmlContentToAppend += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
				
			}
			
			else if(star == 2 )
			{ 
				document.getElementById("idscore").innerHTML =(htmlContentToAppend += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
				
			}
			
			else if(star == 3 )
			{ 
				document.getElementById("idscore").innerHTML =(htmlContentToAppend += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
				
			}
			
			else if(star == 4)
			{ 
				document.getElementById("idscore").innerHTML =(htmlContentToAppend += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> `)
			}
			
			else if(star == 5)
			{ 
				document.getElementById("idscore").innerHTML =(htmlContentToAppend += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> `)
			}
			
		}
		
		htmlContentToAppend += `
		<a href="product-info.html" class="list-group-item list-group-item-action">
		<div class="divusu"> <img src="../img/user.png" width="55" height="55"> </div>
		<div class="co2"><p ="pPuntosComentario">
		<h6 class="mb-1">`+  com.description+'  '+`</h6> </p></div>
		
		<p class="pDatosComentario " >
		<h6><small class="text-muted ">` +' Usuario: '+ com.user + `</small></h6>
		<h6><small class="text-muted">` +' Fecha de publicación: '+ com.dateTime + `</small></h6>
		</p>	`	
		agregar3();`
		
		`
		
		document.getElementById("idscore").innerHTML = htmlContentToAppend;	
		
		
	}
	
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e)
	{
		getJSONData(PRODUCT_INFO_URL).then(function(resultObj)
			{
				if (resultObj.status === "ok")
				{
					category2 = resultObj.data;
					
					var arrdescproduct= category2.relatedProducts; //1,3
					//console.log(arrdescproduct);
					
					
					let categoryNameHTML  = document.getElementById("categoryName");
					let categoryDescriptionHTML = document.getElementById("categoryDescription");
					let productCountHTML = document.getElementById("productCount");
					let productCriteriaHTML = document.getElementById("productCriteria");
					let productPHTML = document.getElementById("productP");
					//let relPHTML = document.getElementById("relacionados");
					
					categoryNameHTML.innerHTML = category2.name;
					categoryDescriptionHTML.innerHTML = category2.description;
					productCountHTML.innerHTML = category2.soldCount;
					productCriteriaHTML.innerHTML = category2.category;
					productPHTML.innerHTML = category2.currency + " " +category2.cost;
					//relPHTML.innerHTML = category2.relatedProducts;
					
					//Muestro las imagenes en forma de galería
					showImagesGallery(category2.images);
				}
			});
	});
	
	document.addEventListener("DOMContentLoaded", function(e)
		{
			getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj)
				{
					if (resultObj.status === "ok")
					{
						category5 = resultObj.data;
						
						let scoreHTML = document.getElementById("idscore");
						let descriptionHTML = document.getElementById("description");
						let usuarioHTML = document.getElementById("user5");
						let fechaHTML = document.getElementById("dateTime");
						
						scoreHTML.innerHTML = category5.score;
						descriptionHTML.innerHTML = category5.description;
						usuarioHTML.innerHTML = category5.user;
						fechaHTML.innerHTML = category5.dateTime;
						
						//Muestro las imagenes en forma de galería
						showComentarios(category5);
						
					}
				});
		});
		function relacionados(object){
			let auto = `
			<div class="card withzoom" style="width: 20em; height:30em; margin-right: 1em";>
			<img class="card-img-top" src="../`+ object.imgSrc +`" alt="Card image cap">
			<div class="card-body">
            <h5 class="card-title">`+ object.name +`</h5>
            <p class="card-text"><hr>`+ object.description +`</p>
			</div>
			</div>
			`
			return auto;
		}
		
		function showRelacionados(array){
			
			let htmlContentToAppend = "";
			let prod1 = array[1];
			let prod2 = array[3]; 
			
            htmlContentToAppend += `
            <div style="display:flex;">
            <div> <a class="custom-card" href="./product-info.html" >`+
            relacionados(prod1) + `
            </div> </a>
            <div> <a class="custom-card" href="./product-info.html">` +
            relacionados(prod2) + `            
            </div> </a>
            </div>
            `
			document.getElementById("relacionados").innerHTML = htmlContentToAppend;
		}
		var estrComm= undefined;
		
		function alertas()
		{
			
			var val = $.trim($("textarea").val());//guardo lo que el usuario introduce txt
			//var val1Estrella = $("idselect").val();//guardo lo que el usuario introduce txt
			var e = document.getElementById("idselect");
			estrComm = e.options[e.selectedIndex].text;
			//alert("val de *" +estrComm);
			var usuEmailComment = localStorage.getItem("usuario");//traigo el mail del usuario del local storage y lo almaceno el la variable
			var today = new Date();//creo nuevo objeto tipo fecha
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();//traeme el año+mes+dia
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();//traeme hora+minutos+segundos
			var dateTime = date+' '+time;//almaceno todo junto en una unica variable para mostrar
			
			if (val != "") 
			{//chequeo si el usuario ingresa o no un valor
				if (typeof(Storage) !== "undefined") 
				{
					// Si hay algo definido lo almaceno en val
					localStorage.setItem("commantario", val);
					
				} 
				else 
				{
					alert("Sorry, your browser does not support Web Storage...");//si el browser no lo soporta envia esta alerta de error
				}				
			} 
			function agregar4()
			{  
				switch (estrComm) 
				{
					case 1:
					//Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
					//document.getElementById("idscoreestrComm").innerHTML =(htmlContentToAppend += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
					document.getElementById("idscoreestrComm").innerHTML = (bloque += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
					break;
					case 2:
					//Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
					document.getElementById("idscoreestrComm").innerHTML =(bloque += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
					break;
					case 3:
					//Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
					document.getElementById("idscoreestrComm").innerHTML =(bloque+= `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>`)
					break;
					case 4:
					//Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
					document.getElementById("idscoreestrComm").innerHTML =(bloque += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span>`)
					break;
					case 5:
					//Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
					document.getElementById("idscoreestrComm").innerHTML =(bloque += `Calificación:  <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>`)
					break;
					default:
					//Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
					//alert("el valor no es valido");
					break;
				}
				
			}
			
			
			let bloque ="";
			bloque += `
			<div class=" list-group-item list-group-item-action">
			<div class="divusua col-lg-3 col-md-4 col-6"> <img src="../img/user.png" width="55" height="55"> </div>
			<div class="d-block mb-4 h-100 co2 ">  <p ="pPuntosComentarios"> <h6 class="mb-1"> `+ val + `</h6> </p>  </div>		
			<p class="pDatosComentarios" >  <h6><small >  Usuario:` +usuEmailComment + `</small> 
			 <h6><small class="text-muted"> Fecha de publicacion: ` + dateTime + `</h6></small></p>
			<div id="idscoreestrComm"> Calificación:` + estrComm +`</div> 
		
			</div>
			`
			agregar4();
			document.getElementById("usuarioComment").innerHTML= bloque;
			
			}
			
			
			document.addEventListener("DOMContentLoaded", function(e){
				getJSONData(PRODUCTS_URL).then(function(resultObj){
					if (resultObj.status === "ok")
					{
						currentRelatedArray = resultObj.data;
						showRelacionados(currentRelatedArray);
					}
				});
				
			
			});
						