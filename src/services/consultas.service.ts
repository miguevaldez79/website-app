import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from '../enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private _baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }


  private getHeaders() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      return new HttpHeaders({
        'Authorization': `Bearer ${jwtToken}`
      });
    } else {
      return new HttpHeaders();
    }
  }

  public getLevantamiento(cedula: string): Observable<any>   {
    const headers = this.getHeaders();

    return this.http.get<any>(`${this._baseUrl}/abogado`, {
      params: { cedula },
    });
  }



}
