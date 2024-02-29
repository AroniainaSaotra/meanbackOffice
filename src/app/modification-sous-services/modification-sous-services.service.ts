import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationSousServicesService {

  constructor(private http:HttpClient) { }

  listeSousServiceId(idSousService:any){
    const URL_SOUS_SERVICE_ID = "https://back-mean-1.vercel.app/sous-services/listeSousServicesById/"+idSousService;
    return this.http.get(URL_SOUS_SERVICE_ID);
  }

  modifySousService(idSousService:any,body:any){
    const URL_MODIFY_SOUS_SERVICE="https://back-mean-1.vercel.app/sous-services/modifySousService/"+idSousService;
    return this.http.put(URL_MODIFY_SOUS_SERVICE,body);
  }
}
