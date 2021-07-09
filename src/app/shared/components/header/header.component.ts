import { Component, OnInit } from '@angular/core';
import { SesionesService } from '../../../services/sesiones.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sesiones$: any;
  source = "assets/images/sesiones";

  constructor(private sesionesService: SesionesService) { }

  ngOnInit(): void {
    this.sesiones$ = this.sesionesService.getSesiones();
  }

}
