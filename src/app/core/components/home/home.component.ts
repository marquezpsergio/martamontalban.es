import { Component, OnInit } from '@angular/core';
import * as lazySizes from 'lazysizes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source = "assets/images/sesiones";
  constructor() { }

  ngOnInit(): void {
    lazySizes.init();
  }

}
