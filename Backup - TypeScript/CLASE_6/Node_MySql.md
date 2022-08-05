1) En la carpeta de trabajo escribir el comando "npm init -y" para iniciar
2) Agrego el archivo en donde voy a crear el servidor
3) Instalo las siguientes definiciones:
- npm install express
- npm install @types/node
- npm install @types/jquery
- npm install multer mime-types
- npm install mysql express-myconnection
- npm install cors

4) Inicio servidor con node "nombredelarchivo" -- Ej = node Node_basico.js

--------------------------------------------------------------------------------------------------------

Apéndice:
Crear code-snippet para la creación del servidor NodeJs

1.- Menú -> Archivo --> Preferencias >> Fragmentos de código del usuario.
2.- Crear el code-snippet dentro de las llaves ({ })
3.- 
	"servidor_nodejs" : {
		"scope": "typescript",
		"prefix": "snjs",
		"body": [
			"const express = require('express');",
			"",
			"const app = express();",
			"",
			"app.set('puerto', $1);",
			"",
			"app.get('/', (request:any, response:any)=>{",
			"\tresponse.send('GET - servidor NodeJS');",
			"});",
			"",
			"",
			"app.listen(app.get('puerto'), ()=>{",
			"\tconsole.log('Servidor corriendo sobre puerto:', app.get('puerto'));",
			"});"
		],
		"description": "Creación de servidor NodeJS"
	}

4.- Guardar.