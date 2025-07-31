import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from '../../interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }

  private API_EMPLEADOS="https://futuramaapi.com/api/characters"

  getEmpleados():Observable<{items:Empleados[]}>{
    return this.http.get<{items:Empleados[]}>(this.API_EMPLEADOS)
  }
}
