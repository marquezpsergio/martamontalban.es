import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  source = "assets/images";

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

  constructor() { }

  ngOnInit(): void {
  }

}
