1) En la carpeta utilizamos el comando tsc --init y se genera el archivo tsconfig.json

2) Descomentamos el campo "sourceMap" : true

3) Transpilamos los archivos entrando:
 i) Terminal
 ii) Elegir tsc: compilación tsconfig.json

4) Para juntar varios archivos .ts en un solo archivo de salida:

tsc --outFile <main> <arch1> <arch2>

5) Una vez generados los archivos utilizamos Ejecutar y Depurar, y creamos el archivo launch.json

6) Dentro de el agregamos la opcion Iniciar Programa con Node.js

7) Reemplazamos app.js por el archivo que vamos a poder debuggear
