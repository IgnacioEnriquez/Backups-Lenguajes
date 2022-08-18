
//AGREGO MYSQL y EXPRESS-MYCONNECTION
const mysql = require('mysql');
const myconn = require('express-myconnection');
const db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'productos_node'
};

//AGREGO MW 
app.use(myconn(mysql, db_options, 'single'));


//---------------------------------------------------------------- LISTAR USUARIOS --------------------------------------------------------

app.get('/productos_bd', (request:any, response:any)=>{

    request.getConnection((err:any, conn:any)=>{

        if(err) throw("Error al conectarse a la base de datos.");

        conn.query("select * from productos", (err:any, rows:any)=>{

            if(err) throw("Error en consulta de base de datos.");

            //response.json(rows);
            response.send(JSON.stringify(rows));
        });
    });

});

//---------------------------------------------------------------- AGREGAR USUARIOS --------------------------------------------------------

app.post('/productos_bd', upload.single("foto"), (request:any, response:any)=>{
   
    let file = request.file;
    let extension = mime.extension(file.mimetype);
    let obj = JSON.parse(request.body.obj);
    let path : string = file.destination + obj.codigo + "." + extension;

    fs.renameSync(file.path, path);

    obj.path = path.split("public/")[1];

    request.getConnection((err:any, conn:any)=>{

        if(err) throw("Error al conectarse a la base de datos.");

        conn.query("INSERT INTO productos set ?", [obj], (err:any, rows:any)=>{

            if(err) {console.log(err); throw("Error en consulta de base de datos.");}

            response.send("Producto agregado a la bd.");
        });
    });
});

//---------------------------------------------------------------- MODIFICAR USUARIOS --------------------------------------------------------

app.post('/productos_bd/modificar', upload.single("foto"), (request:any, response:any)=>{
    
    let file = request.file;
    let extension = mime.extension(file.mimetype);
    let obj = JSON.parse(request.body.obj);
    let path : string = file.destination + obj.codigo + "." + extension;

    fs.renameSync(file.path, path);

    obj.path = path.split("public/")[1];

    let obj_modif : any = {};
    //para excluir la pk (codigo)
    obj_modif.marca = obj.marca;
    obj_modif.precio = obj.precio;
    obj_modif.path = obj.path;

    request.getConnection((err:any, conn:any)=>{

        if(err) throw("Error al conectarse a la base de datos.");

        conn.query("update productos set ? where codigo = ?", [obj_modif, obj.codigo], (err:any, rows:any)=>{

            if(err) {console.log(err); throw("Error en consulta de base de datos.");}

            response.send("Producto modificado en la bd.");
        });
    });
});

//---------------------------------------------------------------- ELIMINAR USUARIOS --------------------------------------------------------

app.post('/productos_bd/eliminar', (request:any, response:any)=>{
   
    let obj = request.body;
    let path_foto : string = "public/";

    request.getConnection((err:any, conn:any)=>{

        if(err) throw("Error al conectarse a la base de datos.");

        //obtengo el path de la foto del producto a ser eliminado
        conn.query("select path from productos where codigo = ?", [obj.codigo], (err:any, result:any)=>{

            if(err) throw("Error en consulta de base de datos.");
            //console.log(result[0].path);
            path_foto += result[0].path;
        });
    });

    request.getConnection((err:any, conn:any)=>{

        if(err) throw("Error al conectarse a la base de datos.");

        conn.query("delete from productos where codigo = ?", [obj.codigo], (err:any, rows:any)=>{

            if(err) {console.log(err); throw("Error en consulta de base de datos.");}

            fs.unlink(path_foto, (err:any) => {
                if (err) throw err;
                console.log(path_foto + ' fue borrado.');
            });

            response.send("Producto eliminado de la bd.");
        });
    });
});



