import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  urlTwitter = "https://twitter.com/Marta_montt98";
  urlInsta = "https://www.instagram.com/martamontalban_phto/";
  urlFb = "https://www.facebook.com/martius.montalban";
  urlLinked = "https://www.linkedin.com/in/marta-montalb%C3%A1n-alarc%C3%B3n-620a081b0/";
  email = "montalbanalarconmarta@gmail.com";

  urlMiLinked = "https://linkedin.com/in/smarquezp05";
  anio = "2021";
  author = "Sergio Márquez";

  constructor() { }

  ngOnInit(): void {
  }

}
