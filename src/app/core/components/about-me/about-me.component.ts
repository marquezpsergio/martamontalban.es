import { Component, HostListener, OnInit } from '@angular/core';
import * as lazySizes from 'lazysizes';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  source = "assets/images/about-me";

  nombre = "Marta Montalbán";
  cargo = "Comunicadora Audiovisual";
  email = "montalbanalarconmarta@gmail.com";
  telefono = 685059209;
  telefonoStr = "685 05 92 09";
  urlTwitter = "https://twitter.com/Marta_montt98";
  urlInsta = "https://www.instagram.com/martamontalban_phto/";
  urlFb = "https://www.facebook.com/martius.montalban";
  urlLinked = "https://www.linkedin.com/in/marta-montalb%C3%A1n-alarc%C3%B3n-620a081b0/";
  rutaCV = "/assets/cv/CV_MartaMontalbanAlarcon.pdf";

  divCardInfo: HTMLElement | null | undefined;
  divFormAcad: HTMLElement | null | undefined;
  divHabs: HTMLElement | null | undefined;
  divExpLab: HTMLElement | null | undefined;
  divInfoAd: HTMLElement | null | undefined;
  divContactForm: HTMLElement | null | undefined;

  totalAlturaDivCardInfo = 0;
  totalAlturaDivFormAcad = 0;
  totalAlturaDivHabs = 0;
  totalAlturaDivExpLab = 0;
  totalAlturaDivInfoAd = 0;
  totalAlturaDivContactForm = 0;

  constructor() { }

  ngOnInit(): void {
    this.inicializarDivs();
    lazySizes.init();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    this.comprobarDivs();
  }

  inicializarDivs() {
    this.divCardInfo = document.getElementById("divCardInfo");
    this.divFormAcad = document.getElementById("divFormAcad");
    this.divHabs = document.getElementById("divHabs");
    this.divExpLab = document.getElementById("divExpLab");
    this.divInfoAd = document.getElementById("divInfoAd");
    this.divContactForm = document.getElementById("divContactForm");

    if (this.divCardInfo) {
      this.totalAlturaDivCardInfo = this.divCardInfo.offsetHeight;
    }
    if (this.divFormAcad) {
      this.totalAlturaDivFormAcad = this.totalAlturaDivCardInfo + this.divFormAcad.offsetHeight;
    }
    if (this.divHabs) {
      this.totalAlturaDivHabs = this.totalAlturaDivFormAcad + this.divHabs.offsetHeight;
    }
    if (this.divExpLab) {
      this.totalAlturaDivExpLab = this.totalAlturaDivHabs + this.divExpLab.offsetHeight;
    }
    if (this.divInfoAd) {
      this.totalAlturaDivInfoAd = this.totalAlturaDivExpLab + this.divInfoAd.offsetHeight;
    }
    if (this.divContactForm) {
      this.totalAlturaDivContactForm = this.totalAlturaDivInfoAd + this.divContactForm.offsetHeight;
    }

    this.comprobarDivs();
  }

  comprobarDivs() {
    var windowAltura = window.innerHeight;
    var windowScrollY = window.scrollY;
    var totalScroll = windowAltura + windowScrollY * 1.1;

    if (this.divCardInfo && totalScroll >= this.totalAlturaDivCardInfo) {
      this.divCardInfo.style.opacity = '1';
    }
    if (this.divFormAcad && totalScroll >= (this.totalAlturaDivFormAcad * 0.5)) {
      this.divFormAcad.style.opacity = '1';
    }
    if (this.divHabs && totalScroll >= this.totalAlturaDivHabs * 1.1) {
      this.divHabs.style.opacity = '1';
    }
    if (this.divExpLab && totalScroll >= this.totalAlturaDivExpLab) {
      this.divExpLab.style.opacity = '1';
    }
    if (this.divInfoAd && totalScroll >= this.totalAlturaDivInfoAd * 1.2) {
      this.divInfoAd.style.opacity = '1';
    }
    if (this.divContactForm && totalScroll >= this.totalAlturaDivContactForm * 1.2) {
      this.divContactForm.style.opacity = '1';
    }
  }
}
