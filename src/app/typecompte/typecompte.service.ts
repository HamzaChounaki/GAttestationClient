import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { TypeCompte } from '../beans/TypeCompte'


@Injectable({
    providedIn: 'root'
})
export class TypeCompteService {

  constructor(private http :HttpClient){

  }
  getTypeComptes(): Observable<any>{
      return this.http.get(API_URLS.TYPECOMPTE_URL);
  }

  addTypeCompte(typecompte:TypeCompte): Observable<any>{
      return this.http.post(API_URLS.TYPECOMPTE_URL, typecompte);
  }

  getTypeCompteById(id:number): Observable<any>{
    return this.http.get(API_URLS.TYPECOMPTE_URL+`/find/${id}`);
}

  updateTypeCompte(typecompte:TypeCompte): Observable<any>{
      return this.http.put(API_URLS.TYPECOMPTE_URL, typecompte);
  }

  deleteTypeCompte(id:number): Observable<any>{
      console.log("Ici "+ id);
      return this.http.delete(API_URLS.TYPECOMPTE_URL +`/${id}`);
  }
}
