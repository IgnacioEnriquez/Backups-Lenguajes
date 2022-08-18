
//AGREGO JWT
const jwt = require("jsonwebtoken");

//SE ESTABLECE LA CLAVE SECRETA PARA EL TOKEN
app.set("key", "cl@ve_secreta");

app.use(express.urlencoded({extended:false}));


app.post("/crear_token", (request:any, response:any)=>{

    if((request.body.usuario == "admin" || request.body.usuario == "user") && request.body.clave == "123456"){

        //SE CREA EL PAYLOAD CON LOS ATRIBUTOS QUE NECESITAMOS
        const payload = { 
            exito : true,
            usuario: request.body.usuario,
            perfil: request.body.usuario == "admin" ? "administrador" : "usuario",

        };

        //SE FIRMA EL TOKEN CON EL PAYLOAD Y LA CLAVE SECRETA
        const token = jwt.sign(payload, app.get("key"), {
            expiresIn : "1d"
        });

        response.json({
            mensaje : "JWT creado",
            jwt : token
        });
    }
    else{
        response.json({
            mensaje : "Usuario no registrado",
            jwt : null
        });
    }

});
//#02
app.get('/verificar_token', verificar_jwt, (request:any, response:any)=>{
    
    response.json({exito:true, jwt: response.jwt});
});
//#03
app.get('/admin', solo_admin, (request:any, response:any)=>{
    
    response.json(response.jwt);
});