//REQUERIMIENTOS---------------------------------
//const http = require('http');//node no necesita de paquetes para hacer el servidor por lo q solo procedemoms a requerirlo
const express = require('express');//requerimos el paquete intalado
const app = express();
const path = require('path');
/*Por razones de seguridad, los exploradores restringen las solicitudes HTTP de origen cruzado 
iniciadas dentro de un script. 
es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent obtenga 
permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) 
al que pertenece*/
const cors = require('cors')

//terminamos de exportar als variables del archivi ConstantesJson
const {
    CART_INFO_URL, 
    CART_BUY_URL, 
    CATEGORIES_URL, 
    CATEGORY_INFO_URL, 
    PRODUCTS_URL, 
    PRODUCT_INFO_URL, 
    PUBLISH_PRODUCT_URL, 
    PRODUCT_INFO_COMMENTS_URL
}  = require('./BackEnd/ConstantesJson.js')//--------------------------------------------------

app.use(cors());// si no se usa el cors la pagina no levanta la constante del localhost

app.use(express.json());


//CREAMOS SERVIDOR-----------------------------------------------
/* const server = http.createServer((req, res)=> {
    res.end('Hola Mundo!\n');
}) *///como se usa express estas lineas no son necesarias
//indicamos el puerto
const puerto = 3000

//creamos un escucha en el puerto para que ejecute las peticiones get
 app.listen(puerto, () => {
    console.log('Apllication ejemplo, escuchando el puerto 3000', puerto);
}); 
//----------------------------------------------------------------

//-----middleware-------------------------------------------

app.use(express.static(__dirname + "/FrontEnd/html"))

// función middleware para servir archivos estáticos - sin esto no levanta el css porque no se le indica de donde sacarlos
app.use(express.static(path.join(__dirname, '/FrontEnd')));


//--------------------------------------------------------------------------

//********PRUEBA****************** */

//http://localhost:3000/nameform



/////////FIN PRUEBA////////////////








//INDICAMOS lo que va a MOSTRAR/respuesta/ en pantalla y bajo que RUTA-------
app.get('/CART_INFO_URL', (req, res) => {
    res.json(CART_INFO_URL)
})
app.get('/CART_BUY_URL', (req, res) => {
    res.json(CART_BUY_URL)
})


app.get('/categorys', (req, res) => {
    res.json(CATEGORIES_URL)
})
app.get('/CATEGORY_INFO_URL', (req, res) => {
    res.json(CATEGORY_INFO_URL)
})


app.get('/PRODUCTS_URL', (req, res) => {
    res.json(PRODUCTS_URL)
})
app.get('/PRODUCT_INFO_URL', (req, res) => {
    res.json(PRODUCT_INFO_URL)
})
app.get('/PUBLISH_PRODUCT_URL', (req, res) => {
    res.json(PUBLISH_PRODUCT_URL)
})
app.get('/PRODUCT_INFO_COMMENTS_URL', (req, res) => {
    res.json(PRODUCT_INFO_COMMENTS_URL)
})

//-----------------------------------------------------------

//el 404 se pone despues de todas las peticiones
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/FrontEnd/html/404.html")
})