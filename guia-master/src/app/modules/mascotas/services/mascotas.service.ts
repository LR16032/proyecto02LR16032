import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascotas.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private bae_url: string = environment.baseURl;
  constructor(private http: HttpClient) { }

  get mascotas(): Observable<IMascota[]>{
    //peticion get a la ruta
    return this.http.get<IMascota[]>(`${this.bae_url}/mascotas`);
  }

  buscarMascota(termino:string):Observable<IMascota[]>{
    if(termino.length>1){
      return this.http.get<IMascota[]>(`${this.bae_url}/mascotas/?q=${termino}&limit=5`);
    }else{
      return this.http.get<IMascota[]>(`${this.bae_url}/mascotas`);
    }
  }

  detalleMascota(id:string):Observable<IMascota>{
    return this.http.get<IMascota>(`${this.bae_url}/mascotas/${id}`);
  }

  eliminarMascota(id:string):Observable<IMascota>{
    return this.http.delete<IMascota>(`${this.bae_url}/mascotas/${id}`);
  }
}
