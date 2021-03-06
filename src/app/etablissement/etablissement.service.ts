import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Etablissement } from '../beans/Etablissement'
import { puts } from 'util';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Injectable({
    providedIn: 'root'
})
export class EtablissementService{
    constructor(private http: HttpClient){}
    getEtablissements(): Observable<any>{
        return this.http.get(API_URLS.ETABISSEMENT_URL);
    }


    addEtablissement(etablissement:Etablissement): Observable<any>{
    return this.http.post(API_URLS.ETABISSEMENT_URL, etablissement);
    }

    updateEtablissement(etablissement:Etablissement): Observable<any>{
    return this.http.put(API_URLS.ETABISSEMENT_URL, etablissement);
    }

    deleteEtablissement(id:number): Observable<any>{
        console.log("ici " + id);
        return this.http.delete(API_URLS.ETABISSEMENT_URL+`/${id}`);

    }

    getEtablissementById(id:number): Observable<any>{
        return this.http.get(API_URLS.ETABISSEMENT_URL+`/${id}`);
    }
}