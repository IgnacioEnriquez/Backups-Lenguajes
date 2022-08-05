
// ----------------------------------------------------------------- CLASES BASICAS ----------------------------------------------------------------------------------------------------------------------------------
export class Camioneta{

    public color : string; 
    private precio : number; 

    //GETTERS
    public GetColor():string{
        return this.color;
    }

    //SETTERS
    public SetColor(color:string):void{
        this.color = color;
    }

    //ACCESOR GET
    public get Precio() : number {
        return this.precio;
    }
       
    //ACCESOR SET
    public set Precio(value : number) {
        this.precio = value;
    }
    
    public constructor(color:string, precio:number){
        this.precio = precio;
        this.color = color;
    }

    public static MetodoEstatico():void{
        console.log("Método esático");
    }
}
//NOTAS:
//1) LOS ACCESORES REQUIEREN QUE SE ESTABLEZCA EL COMPILADOR PARA SALIDA A ECMAScript 5 O SUPERIOR. 
//2) LOS ACCESORES SOLO CON GET SE INFIEREN AUTOMATICAMENTE COMO READONLY. 
//3) LOS ACCESORES SET, NO PUEDEN LLEVAR TIPO DE RETORNO

// ----------------------------------------------------------------- CLASES HEREDADAS ----------------------------------------------------------------------------------------------------------------------------------

export class Vehiculo{

    protected marca:string;

    public constructor(marca:string){
        this.marca = marca;
    }

    public Mostrar():string{
        return this.marca;
    }
}

export class Auto extends Vehiculo{

    public color : string;
    private precio : number;

    public get Precio():number{
        return this.precio;
    }

    public set Precio(value : number) {
        this.precio = value;
    }  

    public constructor(color:string, precio:number, marca:string){
        super(marca);
        this.precio = precio;
        this.color = color;
    }

    //POLIMORFISMO
    public Mostrar():string{
        return super.Mostrar() + this.precio + this.color;
    }
}

// ----------------------------------------------------------------- CLASES ABSTRACTAS ----------------------------------------------------------------------------------------------------------------------------------
export abstract class Vehiculo2{

    protected marca:string;

    public constructor(marca:string){
        this.marca = marca;
    }

    public abstract Acelerar():void;

    public abstract get Marca() : string;
    public abstract set Marca(value: string);
    
    public Mostrar():string{
        return this.marca;
    }
}

export class Auto2 extends Vehiculo2{

    public color : string;
    private precio : number;

    public GetPrecio():number{
        return this.precio;
    }

    public constructor(color:string, precio:number, marca:string){
        super(marca);
        this.precio = precio;
        this.color = color;
    }

    //DE LA CLASE ABSTRACTA
    public Acelerar():void{
        console.log("Acelerando...");
    }

    //DE LA CLASE ABSTRACTA
    public get Marca():string{
        return this.marca;
    }

    //DE LA CLASE ABSTRACTA
    public set Marca(value:string){
        this.marca = value;
    }

    //POLIMORFISMO
    public Mostrar():string{
        return super.Mostrar() + this.precio + this.color;
    }

}