import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuutenticacionService } from '../servicios/auutenticacion.service';

export const loginCanMatchGuard: CanMatchFn = (route, segments) => {

  const authSevicio = inject(AuutenticacionService);
  return !authSevicio.sesionIniciada();
};
