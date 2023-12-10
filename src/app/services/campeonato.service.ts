import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  key: string = 'live_93d96a6d3ff0aeb0ae22723baebb4e'
  constructor(private httpClient:HttpClient) { }

  getTabelaSerieB(): Observable<any> {

  const headers = new HttpHeaders({
  'Authorization': `Bearer ${this.key}`
  });
  
    const requestOptions = { headers:headers}

    return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', requestOptions);
  }
}

