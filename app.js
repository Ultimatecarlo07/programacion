const express = require("express"); // llamamos al modulo express, todos los comandos con los que podemos trabajar
const app = express(); // es una constante que se almacena en la variable app y por medio de esta se obtienen el numero de puertos
const port = 3000; // node js trabaja con este puerto
app.get("/", function (req, res) { // querer ingresar al servicio
res.send("Bienvenido"); // respuesta de lo que se quiere mostrar
});

app.listen(port, function () { // lee el puerto
console.log(`Puerto ${port}!`); // aparece el mensaje y el numero de puerto
});

var Connection = require('tedious').Connection;  
    var config = {  
        server: 'CARLOS_RIVERA\SQLEXPRESS',  
        authentication: {
            type: 'default',
            options: {
                userName: 'car02', 
                password: 'car02'  
            }
        },
        options: {
            
            encrypt: true,
            database: 'ventas2'  
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {
        console.log("Ingreso");  
});

connection.connect();