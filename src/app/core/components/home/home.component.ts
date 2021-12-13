import { Component, OnInit } from '@angular/core';
import * as lazySizes from 'lazysizes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source = "https://firebasestorage.googleapis.com/v0/b/mamont-d3364.appspot.com/o/images%2Fhome%2F";
  altmedia = "?alt=media";
  constructor() { }

  ngOnInit(): void {
    lazySizes.init();
  }

}
