import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-formulario-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-clientes.component.html',
  styleUrl: './formulario-clientes.component.css'
})
export class FormularioClientesComponent {

  constructor(private servicioCliente: ClientesService){}

  nombre:string='';
  email:string='';
  direccion:string='';

  agregarCliente(formulario:any){
    this.servicioCliente.guardarCliente(formulario.value).subscribe(()=>{
      window.location.reload();
    })
  }
}
