import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://mamont-mailsender.sergiomrquez2.repl.co';
  }

  enviarEmail(formulario: any): Observable<any> {
    let params = JSON.stringify(formulario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url, params, {headers: headers})
  }
}
