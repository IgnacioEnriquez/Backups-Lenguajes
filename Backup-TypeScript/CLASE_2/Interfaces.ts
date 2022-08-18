export interface IAutoBase{
    
    GetColor():string;
    SetColor(color:string):void;
    patente : string;
}

//NOTAS:
//1) LAS INTERFACES SE PUEDEN HEREDAR
//2) LAS INTERFACES PUEDEN CONTENER ATRIBUTOS Y METODOS
//implements IAutoBase