import { Component, OnInit } from '@angular/core';
import { SesionesService } from '../../../services/sesiones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  sesion$: any;
  source: string = "assets/images/sesiones";

  constructor(private activatedRoute: ActivatedRoute, private sesionesService: SesionesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.sesionesService.getSesion(param.id).subscribe(s => this.sesion$ = s);
    });
  }
}
