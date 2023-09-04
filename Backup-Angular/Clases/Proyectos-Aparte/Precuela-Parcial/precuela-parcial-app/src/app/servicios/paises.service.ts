import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  

  constructor(private http : HttpClient) {    

   }   

  getPaises()
   {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');  
   }

   getPaisEspecifico(pais : string)
   {
    return this.http.get<any[]>('https://restcountries.com/v3.1/name/' + pais);
   }
}
