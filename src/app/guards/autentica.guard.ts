import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuutenticacionService } from '../servicios/auutenticacion.service';

export const autenticaGuard: CanActivateFn = (route, state) => {
/*const router = inject(Router);
  const logingExitoso=localStorage.getItem('user');
  if (logingExitoso) {
    return true;
  }else{
  return router.parseUrl('/');
  }*/

  const authServicio = inject(AuutenticacionService);
  const router = inject(Router);
  if(authServicio.sesionIniciada()){
    return true;
  }else{
    localStorage.setItem('redirectUrl', state.url);
    return router.parseUrl('/login');
  }
};
