import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeOffreService {

  constructor(private http:HttpClient) { }

  ajoutOffre(body:any){
    const URL_LISTE_OFFRE = "https://back-mean-1.vercel.app/offre/ajoutOffre";
    return this.http.post(URL_LISTE_OFFRE,body);
  }
}
