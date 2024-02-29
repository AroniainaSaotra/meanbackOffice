import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeServicesService {

  constructor(private http:HttpClient) { }

  listeServices(){
    const URL_LISTE_SERVICES = "https://back-mean-1.vercel.app/services/listeServices";
    return this.http.get(URL_LISTE_SERVICES);
  }
}
