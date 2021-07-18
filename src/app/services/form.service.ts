import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://formspree.io/f/mknkvqvj';
  }

  enviarEmail(contactForm: NgForm): Observable<any> {
    let params = contactForm.value;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this._http.post(this.url, {
      name: params.subject,
      replyto: params.email,
      message: params.message
    }, {headers: headers})
  }
}
