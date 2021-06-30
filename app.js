 const http = require('http');

 http.createServer( (req, res) => {

    res.write("Hola");
    res.end();
   
 })  

.listen( 2003);

console.log('Escuchando desde aqui', 2003)