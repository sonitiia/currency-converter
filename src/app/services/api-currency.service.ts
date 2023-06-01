import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencyData(base: string): Observable<any> {
    const url = 'https://api.exchangerate.host/latest';
    let params = new HttpParams();
    params = params.set('base', base);
    return this.http.get(url, { params: params });
  }
}
