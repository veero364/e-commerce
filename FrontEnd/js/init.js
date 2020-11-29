const CATEGORIES_URL = "http://localhost:3000/categorys";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/PUBLISH_PRODUCT_URL";//mje de has publicado con exito
const CATEGORY_INFO_URL = "http://localhost:3000/CATEGORY_INFO_URL";
const PRODUCTS_URL = "http://localhost:3000/PRODUCTS_URL";
const PRODUCT_INFO_URL = "http://localhost:3000/PRODUCT_INFO_URL";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/PRODUCT_INFO_COMMENTS_URL";//comentarios
const CART_INFO_URL = "http://localhost:3000/CART_INFO_URL";
//const CART_INFO_URL2 = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "http://localhost:3000/CART_BUY_URL";//mje de has comprado con exito

var showSpinner = function () {
document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
var result = {};
showSpinner();
return fetch(url)
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




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){
//});
//prueba
