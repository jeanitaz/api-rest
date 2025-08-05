import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent {
enviado:boolean=false;

registro={
  nombre:'',
  email:'',
  profesion:'',
  fechaNacimiento:'',
  password:''
};

camposSinLlenar=()=>{
  return !this.enviado && Object.values(this.registro).some
  (valor => valor.trim?.()!=='');
}
}
