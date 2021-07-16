import {Component, OnInit} from '@angular/core';
import {SesionesService} from '../../../services/sesiones.service';
import {ActivatedRoute} from '@angular/router';
import {fromEvent} from "rxjs";

declare var $: any; // Para jQuery

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  sesion$: any;
  source: string = "assets/images/sesiones";

  idImagenModal: number = 0;

  resizeObservable$: any;
  resizeSubscription$: any;

  constructor(private activatedRoute: ActivatedRoute, private sesionesService: SesionesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.sesionesService.getSesion(param.id).subscribe(s => {
        this.sesion$ = s;
      });
    });

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      if (this.idImagenModal > 0) {
        this.mostrarModal(this.idImagenModal);
      }
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  mostrarModal(id: number) {
    /* Loading Modal Image */
    this.idImagenModal = id;
    let imagen = this.sesion$.imagenes[id];
    let rutaImagen = this.source + '/' + this.sesion$.directorio + '/' + imagen;
    let imagenModal = $('#imagenModal')
    imagenModal.attr('data-src', '');
    imagenModal.attr('src', '');
    imagenModal.attr('data-src', rutaImagen);
    imagenModal.attr('src', rutaImagen);

    /* Check Image Width and Height for max-width in Modal */
    var x = window.matchMedia("(max-width:700px)");
    if (x.matches) {
      $('.modal-dialog').attr('style', 'max-width: 100vw !important');
    } else {
      var img = new Image();
      img.src = rutaImagen;
      if (img.width > img.height) {
        $('.modal-dialog').attr('style', 'max-width: 75vw !important');
      } else {
        $('.modal-dialog').attr('style', 'max-width: 600px !important');
      }
    }

    /* Show Modal */
    $('#modalImagen').modal('show');
  }
}
