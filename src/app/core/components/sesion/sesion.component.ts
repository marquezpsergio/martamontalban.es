import {Component, OnInit} from '@angular/core';
import {SesionesService} from '../../../services/sesiones.service';
import {ActivatedRoute} from '@angular/router';

declare var $: any; // Para jQuery

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  sesion$: any;
  source: string = "assets/images/sesiones";

  constructor(private activatedRoute: ActivatedRoute, private sesionesService: SesionesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.sesionesService.getSesion(param.id).subscribe(s => {
        this.sesion$ = s;
      });
    });
  }

  mostrarModal(id: number) {
    /* Loading Modal Image */
    let imagen = this.sesion$.imagenes[id];
    let rutaImagen = this.source + '/' + this.sesion$.directorio + '/' + imagen;
    let imagenModal = $('#imagenModal')
    imagenModal.attr('data-src', '');
    imagenModal.attr('src', '');
    imagenModal.attr('data-src', rutaImagen);
    imagenModal.attr('src', rutaImagen);

    /* Check Image Width and Height for max-width in Modal */
    var img = new Image();
    img.src = rutaImagen;
    if (img.width > img.height) {
      $('.modal-dialog').attr('style', 'max-width: 90vw !important');
    } else {
      $('.modal-dialog').attr('style', 'max-width: 700px !important');
    }

    /* Show Modal */
    $('#modalImagen').modal('show');
  }
}
