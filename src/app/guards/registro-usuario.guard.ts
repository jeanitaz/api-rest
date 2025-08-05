import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuariosComponent } from '../component/registro-usuarios/registro-usuarios.component';

export const registroUsuarioGuard: CanDeactivateFn<RegistroUsuariosComponent> 
= (component, currentRoute, currentState, nextState) => {
  if(component.camposSinLlenar()){
    return confirm('Tienes datos sin llenar. ¿Seguro quieres abandonar el registro?');
  }
  return true;
};
