const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";//mje de has publicado con exito
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";//comentarios
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function () {
	document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
	document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
	var result = {};
	showSpinner();
	return fetch(CATEGORIES_URL)
    .then(response => {
		if (response.ok) {
			return response.json();
			} else {
			throw Error(response.statusText);
		}
	})
    .then(function (response) {
		result.status = 'ok';
		result.data = response;
		hideSpinner();
		return result;
	})
    .catch(function (error) {
		result.status = 'error';
		result.data = error;
		hideSpinner();
		return result;
	});
}
var getJSONData2 = function (url) {//SE CREA Y EN CATEGORY INFO SE MODIFICA EL NOMBRE DE LA VARIABLE GETJSDATA2
	var result = {};
	showSpinner();
	return fetch(CATEGORY_INFO_URL)
    .then(response => {
		if (response.ok) {
			return response.json();
			} else {
			throw Error(response.statusText);
		}
	})
    .then(function (response) {
		result.status = 'ok';
		result.data = response;
		hideSpinner();
		return result;
	})
    .catch(function (error) {
		result.status = 'error';
		result.data = error;
		hideSpinner();
		return result;
	});
	
}
var getJSONData3 = function (url) 
{//SE CREA Y EN CATEGORY INFO SE MODIFICA EL NOMBRE DE LA VARIABLE GETJSDATA2
	var result = {};
	showSpinner();
	return fetch(PRODUCTS_URL)
    .then(response => 
		{
			if (response.ok) 
			{
				return response.json();
			} 
			else 
			{
				throw Error(response.statusText);
			}
		})
		.then(function (response) 
			{
				result.status = 'ok';
				result.data = response;
				hideSpinner();
				return result;
			})
			.catch(function (error) 
				{
					result.status = 'error';
					result.data = error;
					hideSpinner();
					return result;
				});}
				
				var getJSONData4 = function (url) 
				{//SE CREA Y EN CATEGORY INFO SE MODIFICA EL NOMBRE DE LA VARIABLE GETJSDATA2
					var result = {};
					showSpinner();
					return fetch(PRODUCT_INFO_URL)
					.then(response => 
						{
							if (response.ok) 
							{
								return response.json();
							} 
							else 
							{
								throw Error(response.statusText);
							}
						})
						.then(function (response) 
							{
								result.status = 'ok';
								result.data = response;
								hideSpinner();
								return result;
							})
							.catch(function (error) 
								{
									result.status = 'error';
									result.data = error;
									hideSpinner();
									return result;
								});}
								
								
								
								var getJSONData5 = function (url) 
								{//SE CREA Y EN CATEGORY INFO SE MODIFICA EL NOMBRE DE LA VARIABLE GETJSDATA2
									var result = {};
									showSpinner();
									return fetch(PRODUCT_INFO_COMMENTS_URL)//se inserta otra url
									.then(response => 
										{
											if (response.ok) 
											{
												return response.json();
											} 
											else 
											{
												throw Error(response.statusText);
											}
										})
										.then(function (response) 
											{
												result.status = 'ok';
												result.data = response;
												hideSpinner();
												return result;
											})
											.catch(function (error) 
												{
													result.status = 'error';
													result.data = error;
													hideSpinner();
													return result;
												});}
												//Función que se ejecuta una vez que se haya lanzado el evento de
												//que el documento se encuentra cargado, es decir, se encuentran todos los
												//elementos HTML presentes.
												//document.addEventListener("DOMContentLoaded", function(e){
//});
//prueba
