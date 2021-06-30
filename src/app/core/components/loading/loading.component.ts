import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementsByTagName("footer")[0].style.display = "none";
    setTimeout(() => {
      document.getElementsByTagName("header")[0].style.display = "block";
      document.getElementsByTagName("footer")[0].style.display = "block";
      this.router.navigate(["/home"])
    }, 3000);
  }

}
