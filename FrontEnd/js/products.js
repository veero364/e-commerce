//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function (e) {
const ORDER_ASC_BY_COST = "$->$$";
const ORDER_DESC_BY_COST = "$$->$";
const ORDER_BY_PROD_REL = "RR->R";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;
var cadena = undefined;


//  var categoriesArray = [];

function sortCategories(criteria, array){//ordenar POR COSTO
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
		});
	}
	else if (criteria === ORDER_DESC_BY_COST)
	{
        result = array.sort(function(a, b) 
			{
				if ( a.cost > b.cost )
				{ return -1; }
				if ( a.cost < b.cost )
				{ return 1; }
				return 0;
			});
	}
	
	else if (criteria === ORDER_BY_PROD_REL)//ordena segun relavancia
	{
        result = array.sort(function(a, b)
			{
				
				let aCount = parseInt(a.soldCount);
				let bCount = parseInt(b.soldCount);
				
				if ( aCount > bCount )
				{ return -1; }
				if ( aCount < bCount )
				{ return 1; }
				return 0;
			});
	}
	
    return result;
}

function showProductsList(currentCategoriesArray) { //MOSTRAR PRODUCTOS
	
	let htmlContentToAppend = "";
	for (let i = 0; i < currentCategoriesArray.length; i++) {//recorro el array
		let category = currentCategoriesArray[i];
		
		let P_Name = category.name.toLowerCase();       
        let P_Description = category.description.toLowerCase();   
		
		if (((minCount == undefined) || (minCount != undefined && parseInt(category.cost) >= minCount)) &&//le agrego condiciones al array
			((maxCount == undefined) || (maxCount != undefined && parseInt(category.cost) <= maxCount)) &&  
		( (P_Description.indexOf(cadena)) !== -1 || (P_Name.indexOf(cadena)) !== -1))
		{
			
            htmlContentToAppend += `
			<a href="product-info.html" class="list-group-item list-group-item-action">
            <div class=" list-group-item-action">
			<div class="row">
			<div class="col-3">
			<img src="../` + category.imgSrc + `" alt="` + category.desc + `" class="img-thumbnail">
			</div>
			<div class="col">
			<div class="d-flex w-100 justify-content-between">
			<h4 class="mb-1">`+ category.name +' ----> '+ category.currency+'  '+category.cost+`</h4>
			<small class="text-muted" id="divVen">` + category.soldCount + ` artículos</small>
			
			</div>
			<div class="vero w-100 justify-content-between">
			<small class="text-muted">` + category.description+ ` </small>
			</div>
			
			</div>
			</div>
            </div>
            `
		}
		
		document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
		
		
		}
}

function sortAndShowCategories(sortCriteria, CategoriesArray){//ORDENAR Y MOSTRAR CATEGORIA
    currentSortCriteria = sortCriteria;
	
    if(CategoriesArray != undefined){
        currentCategoriesArray = CategoriesArray;
	}
	
    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);
	
    //Muestro las categorías ordenadas
	
	
    showProductsList(currentCategoriesArray);
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
	getJSONData(PRODUCTS_URL).then(function (resultObj) {
		if (resultObj.status == "ok") {
			currentCategoriesArray= resultObj.data;
			//Muestro las categorías ordenadas
			showProductsList(currentCategoriesArray);
		}
	});
	
	//INSERTA LAS FUNCIONES PARA ORDENAR ALFABETICAMENTE
	document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_COST);
	});
	
    document.getElementById("sortDesc").addEventListener("click", function(){
		sortAndShowCategories(ORDER_DESC_BY_COST);
	});
	
	//INSERTA LAS FUNCIONES PARA ORDENAR POR RELAVANCIA
    document.getElementById("sortByCount").addEventListener("click", function(){
		
        sortAndShowCategories(ORDER_BY_PROD_REL);
	});
	
	
	
	document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";
		document.getElementById("search").value = "";
		
		cadena = undefined;
        minCount = undefined;
        maxCount = undefined;
		buscador();
		showProductsList(currentCategoriesArray);
	});
	
    document.getElementById("rangeFilterCount").addEventListener("click", function(){//MUESTRA EL ARRAY FILTRADO
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;
		
        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
		}
        else{
            minCount = undefined;
		}
		
        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
		}
        else{
            maxCount = undefined;
		}
		
		showProductsList(currentCategoriesArray);
	});
	
});


//BUSCAR ARTICULO
function buscador() {
    cadena = document.getElementById("search");
    cadena = cadena.value.toLowerCase();
    showProductsList(currentCategoriesArray);
}
document.getElementById("search").addEventListener("keyup", buscador);
buscador();




