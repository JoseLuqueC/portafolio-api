'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://JoseLuque:MongoPass123@cluster0-shard-00-00-tcgsf.mongodb.net:27017,cluster0-shard-00-01-tcgsf.mongodb.net:27017,cluster0-shard-00-02-tcgsf.mongodb.net:27017/portafolio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3700");
        	});

        })
        .catch(err => console.log(err));