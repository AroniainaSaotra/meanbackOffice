import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationServiceService {

  constructor(private http: HttpClient) { }

  listeServicesId(idServices:any){
    const URL_SERVICE_ID ="https://back-mean-1.vercel.app/services/listeServicesById/"+idServices;
    return this.http.get(URL_SERVICE_ID);
  }

  modifyService(idService:any , body:any){
    const URL_MODIFY_SERVICE = "https://back-mean-1.vercel.app/services/modifyService/"+idService;
    return this.http.put(URL_MODIFY_SERVICE,body);
  }
}
