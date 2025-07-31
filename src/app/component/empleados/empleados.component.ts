import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { EmpleadosService } from '../../servicios/empleados.service';
import { Empleados } from '../../../interfaces/Empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  constructor(private servicioEmpleado: EmpleadosService){}

  empleados: Empleados[]=[];

  ngOnInit(){
    this.servicioEmpleado.getEmpleados().subscribe(data=>{
      this.empleados=data.items;
    })
  }

}
