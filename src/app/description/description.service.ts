import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private http: HttpClient) { }

  ajoutDescription(idEmploye:any, body:any){
    const URL_DESCRIPTION = "https://back-mean-1.vercel.app/employe/ajoutDescription/"+idEmploye;
    return this.http.post(URL_DESCRIPTION,body);
  }

  listeEmployeById(idEmploye:any){
    const URL_LIST_EMPLOYE_ID= "https://back-mean-1.vercel.app/employe/listeemployeId/"+idEmploye;
    return this.http.get(URL_LIST_EMPLOYE_ID);
  }
}
