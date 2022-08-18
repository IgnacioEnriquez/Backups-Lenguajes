 //SINTAXIS DE "Fat arrow"
 let f3 : Function = ( i : number ) : number => { return i * i;  }
 console.log(f3(2));

 //SINTAXIS DE "Fat arrow" CON TIPO DE RETORNO INFERIDO
 let f4 : Function = ( i : number ) => { return i * i; }
 console.log(f4(2));

 //SINTAXIS DE "Fat arrow" CON TIPO DE RETORNO INFERIDO,
 //SI NO TIENE LLAVES({}) NO NECESITA 'RETURN'
 let f5 : Function = ( i : number ) => i * i ;
 console.log(f5(2));