import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../../_model/estudiante';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  url: string = `${environment.HOST}/estudiantes`

  listar(){
    return this.http.get<Estudiante[]>(`${this.url}/listar`);
  }

  listarPorId(id:number){
    return this.http.get<Estudiante>(`${this.url}/listarPorId/${id}`);
  }

  registrar(estudiante:Estudiante){
    return this.http.post(`${this.url}/agregar`,estudiante);
  }

  modificar(estudiante:Estudiante){
    return this.http.put(`${this.url}/modificar`,estudiante);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/eliminar/${id}`);
  }

}
