import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeRdvEmployeService {
 
  constructor(private http: HttpClient) { }

  listeRDVEmploye(idEmploye:any){
    const URL_LIST_RDV = "https://back-mean-1.vercel.app/employe/rendezVousEmployeOne/"+idEmploye;
    return this.http.get(URL_LIST_RDV);
  }
}
