import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesionPipe } from '../../pipes/profesion.pipe';
import { EdadPipe } from '../../pipes/edad.pipe';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, EdadPipe, ProfesionPipe],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent {
enviado:boolean=false;

fb= inject(FormBuilder);
  registroFrom:FormGroup=this.fb.group({
    nombre:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    fechaNacimiento:['',Validators.required],
    password:['',[Validators.required, Validators.minLength(6)]],
  })
  
  registrar(){
    if(this.registroFrom.valid){
      this.enviado=true;
      console.log('Registro exitoso:', this.registroFrom.value);
      alert('Registro exitoso');
  }else{
    this.registroFrom.markAllAsTouched();
  }
}

camposSinLlenar=()=>{
  return !this.enviado && Object.values(this.registroFrom).some
  (valor => valor.trim?.()!=='');
}
}
