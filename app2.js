 const express = require('express');
 const hbs = require('hbs');
 const app = express();
 const port = 2002;

 app.set('view engine', 'hbs');

 app.use( express.static('public'))

 hbs.registerPartial( __dirname + '/view/parcials');

app.get('/', function (req,res) {

    res.render('Home', {

        Nombre: '+KOTITAS',
        titulo: 'Peluqueria'
     })
});

app.get('/generic', function (req,res) {

    res.render('generic')
});

app.listen(port, () => {

    console.log('Escuchando desde la ruta http://localhost:${port}');
});
