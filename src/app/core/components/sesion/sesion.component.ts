import { Component, OnInit } from '@angular/core';
import { SesionesService } from '../../../services/sesiones.service';
import { Sesion } from '../../../models/Sesion';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
    var sesionGot;
    this.activatedRoute.params.subscribe(param => {
      this.sesionesService.getSesion(param.id).subscribe(s => this.sesion$ = s);
    });
  }

}
