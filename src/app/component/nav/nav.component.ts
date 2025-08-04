import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuutenticacionService } from '../../servicios/auutenticacion.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private authServicio: AuutenticacionService, private router: Router) { }
  logout=()=> {
    this.authServicio.logout();
    this.router.navigate(['/login']);
  }
}
